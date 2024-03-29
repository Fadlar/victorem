<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'avatar',
        'phone_number',
        'address',
        'birthplace',
        'birthdate',
        'gender'
    ];
    
}
