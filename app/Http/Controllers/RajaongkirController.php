<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RajaongkirController extends Controller
{
    public function province()
    {
        $apiKey = 'ee59bffdc580bed4323ca4f0d31c33e7'; // Sesuaikan dengan kunci API Anda
        $url = 'https://pro.rajaongkir.com/api/province';

        try {
            $response = Http::withHeaders([
                'key' => $apiKey,
            ])->get($url);

            return response()->json($response->json());
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function city($province_id)
    {
        $apiKey = 'ee59bffdc580bed4323ca4f0d31c33e7'; // Sesuaikan dengan kunci API Anda
        $url = 'https://pro.rajaongkir.com/api/city?province=' . $province_id;

        try {
            $response = Http::withHeaders([
                'key' => $apiKey,
            ])->get($url);

            return response()->json($response->json());
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function subdistrict($city_id)
    {
        $apiKey = 'ee59bffdc580bed4323ca4f0d31c33e7'; // Sesuaikan dengan kunci API Anda
        $url = 'https://pro.rajaongkir.com/api/subdistrict?city=' . $city_id;

        try {
            $response = Http::withHeaders([
                'key' => $apiKey,
            ])->get($url);

            return response()->json($response->json());
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function cost(Request $request, $subdistrict_id)
    {
        $apiKey = 'ee59bffdc580bed4323ca4f0d31c33e7'; // Sesuaikan dengan kunci API Anda
        $url = 'https://pro.rajaongkir.com/api/cost';

        try {
            $response = Http::withHeaders([
                'key' => $apiKey,
            ])->post($url, [
                'origin' => '126',
                'originType' => 'city',
                'destination' => $subdistrict_id,
                'destinationType' => 'subdistrict',
                'weight' => $request->weight,
                'courier' => 'jne',
            ]);

            return response()->json($response->json());
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
