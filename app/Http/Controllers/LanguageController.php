<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\File;

class LanguageController extends Controller
{
    public function translateList()
    {
        $list = translations((base_path('lang/' . app()->getLocale() . '.json')));

        return response()->json([
            'list' => $list,
            'current' => app()->getLocale()
        ]);
    }

    public function index(Request $request)
    {
        $type = $request->type ?? "en";
        $path = base_path('lang/' . $type . '.json');
        $data = array_reverse(translations($path));

        $search = $request->input('search');
        if ($search) {
            $data = array_filter($data, function ($value, $key) use ($search) {
                return stripos($key, $search) !== false || stripos($value, $search) !== false;
            }, ARRAY_FILTER_USE_BOTH);
        }

        $currentPage = LengthAwarePaginator::resolveCurrentPage();
        $perPage = 30;
        $currentPageItems = array_slice($data, ($currentPage - 1) * $perPage, $perPage);
        $data = new LengthAwarePaginator($currentPageItems, count($data), $perPage);
        return $data;
    }

    public function store(Request $request)
    {
        session(['locale' => $request->name]);

        return back();
    }

    public function create(Request $request)
    {
        $request->validate([
            'key' => ['required'],
            'value' => ['required'],
        ]);

        $path = base_path('lang/' . $request->lang . '.json');
        $data = translations($path);
        $key = $request->key;

        $cleanedKey = str_replace('_', ' ', $key);

        if (array_key_exists($cleanedKey, $data)) {
            return back()->withErrors(['key' => 'Key has been used'])->withInput();
        }

        $data[$cleanedKey] = $request->value;
        File::put($path, json_encode($data, JSON_PRETTY_PRINT));
        return back();
    }


    public function edit(Request $request)
    {
        $request->validate([
            'lang' => ['required'],
        ]);
        $path = base_path('lang/' . $request->lang . '.json');
        $data = translations($path);
        $key = $request->key;
        $cleanedKey = str_replace('_', ' ', $key);

        if (!array_key_exists($key, $data)) {
            return "Key not found";
        }

        $data[$cleanedKey] = $request->value;
        file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT));
        return back();
    }

    public function destroy(Request $request)
    {
        $path = base_path('lang/' . $request->lang . '.json');
        $data = translations($path);
        $key = str_replace('_', ' ', $request->key);
        if (!array_key_exists($key, $data)) {
            return "Key tidak ditemukan";
        }

        unset($data[$key]);
        file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT));
        return back();
    }
}
