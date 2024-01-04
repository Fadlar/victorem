<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'name', 'stock', 'weight', 'customer_price', 'agent_price', 'description', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class)->orderBy('position');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'products_categories')->withTimestamps();
    }

    public function discount()
    {
        return $this->hasOne(Discount::class);
    }

    public function vouchers()
    {
        return $this->belongsToMany(Voucher::class, 'vouchers_products');
    }
}
