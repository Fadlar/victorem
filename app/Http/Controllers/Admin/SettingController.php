<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        return inertia('Admin/Setting/Index');
    }

    public function store(Request $request)
    {
        return $request->all();
        // foreach($request->all() as ) {

        // }
    }
}
