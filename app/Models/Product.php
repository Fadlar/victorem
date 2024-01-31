<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['slug', 'name', 'weight', 'price', 'discount', 'discount_percent', 'description', 'status'];

    protected $with = ['images', 'categories'];

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

    public function sizes()
    {
        return $this->hasMany(Size::class)->orderByRaw("FIELD(name, 's','m','l','xl')");
    }

    public function price_format($value)
    {
        return 'Rp' . number_format($value, 0, ',', '.');
    }

    public function price_format2($value)
    {
        return number_format($value, 0, ',', '.');
    }

    public function discount_format($value)
    {
        return number_format($value, 0, ',', '.') . '%';
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
