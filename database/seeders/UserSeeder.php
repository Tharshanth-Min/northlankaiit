<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        User::factory()->count(3)->create()
            ->each(function($user) {
                $user->role()->save(Role::factory()->make());
            });
    }
}
