<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'user_id' =>  5,
                'name' =>  $name = 'Deck',
                'slug' => str()->slug($name),
                'description' => 'This is deck',
                'icon' => 'product-categories/nZj8lPPoXytCHOs4UXSiBrsT9YaFzHLCUgknbcDT.jpg'

            ], [
                'user_id' =>  5,
                'name' => $name = 'Truck',
                'slug' => str()->slug($name),
                'description' => 'This is Truck',
                'icon' => 'product-categories/nZj8lPPoXytCHOs4UXSiBrsT9YaFzHLCUgknbcDT.jpg'

            ], [
                'user_id' =>  5,
                'name' => $name = 'Wheels',
                'slug' => str()->slug($name),
                'description' => 'This is wheels',
                'icon' => 'product-categories/nZj8lPPoXytCHOs4UXSiBrsT9YaFzHLCUgknbcDT.jpg'

            ]
        ])->each(fn ($q) => \App\Models\Category::create($q));
    }
}
