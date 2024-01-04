<?php

namespace App\Http\Controllers;

use App\Models\Voucher;
use Illuminate\Http\Request;

class VoucherController extends Controller
{
    public function index(Request $request){
        $voucher = Voucher::with(['products','user','products'])->latest()->get();
        return $voucher;
    }
    
    public function create(){
        // Isi Function
    }
    
    public function store(Request $request){
        $request->validate([
            'voucher_type' => ['required'],
            'name' => ['required'],
            'start_at' => ['required'],
            'end_at' => ['required'],
            'promo_type' => ['required'],
            'piece_type' => ['required'],
            'quota' => ['required','numeric'],
            'minimum_purchase' => ['required','numeric'],
            'nominal' => ['required'],
        ]);
        
        $voucher = Voucher::create([
            'user_id' => $request->user()->id,
            'voucher_type' => $request->voucher_type,
            'name' => $request->name,
            'start_at' => $request->start_at,
            'end_at' => $request->end_at,
            'promo_type' => $request->promo_type,
            'piece_type' => $request->piece_type,
            'quota' => $request->quota,
            'percentage' => ($request->promo_type == 'product') ? $request->percentage : '',
            'nominal' => $request->nominal,
            'minimum_purchase' => $request->minimum_purchase,
        ]);
        $products = json_decode($request->product_ids);
        (count($products) > 0) ? $voucher->products()->attach($products) : '';
    }
    
    public function edit(){
        // Isi Function
    }
    
    public function update(Voucher $voucher, Request $request){
        $request->validate([
            'voucher_type' => ['required'],
            'name' => ['required'],
            'start_at' => ['required'],
            'end_at' => ['required'],
            'promo_type' => ['required'],
            'piece_type' => ['required'],
            'quota' => ['required', 'numeric'],
            'minimum_purchase' => ['required', 'numeric'],
            'nominal' => ['required'],
        ]);
        
        $voucher->update([
            'voucher_type' => $request->voucher_type,
            'name' => $request->name,
            'start_at' => $request->start_at,
            'end_at' => $request->end_at,
            'promo_type' => $request->promo_type,
            'piece_type' => $request->piece_type,
            'quota' => $request->quota,
            'percentage' => ($request->promo_type == 'product') ? $request->percentage : '',
            'nominal' => $request->nominal,
            'minimum_purchase' => $request->minimum_purchase,
        ]);
        $products = json_decode($request->product_ids);
        (count($products) > 0) ? $voucher->products()->sync($products) : '';
        return $voucher;
    }
    
    public function destroy(Voucher $voucher){
        $voucher->delete();
    }
}
