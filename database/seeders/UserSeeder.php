<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'username' => 'admin112',
                'name' => 'Administrator',
                'email' => 'admin@mail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ], [
                'username' => 'team112',
                'name' => 'Team',
                'email' => 'team@mail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ], [
                'username' => 'agent112',
                'name' => 'Agent',
                'email' => 'agent@mail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ], [
                'username' => 'customer112',
                'name' => 'Customer',
                'email' => 'customer@mail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ], [
                'username' => 'fDev112',
                'name' => 'Fadlar',
                'email' => 'fadlar@mail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ], [
                'username' => 'duy112',
                'name' => 'Aldi',
                'email' => 'aldi@mail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ]

        ])->each(fn ($q) => \App\Models\User::updateOrCreate($q));
    }
}
