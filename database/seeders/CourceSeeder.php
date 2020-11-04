<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        DB::table('courses')->insert([
            'name' => 'B.Sc in COMPUTER SCIENCE',
        ]);

        DB::table('courses')->insert([
            'name' => 'B.Sc in COMPUTER SCIENCE(Top Up)',
        ]);

        DB::table('courses')->insert([
            'name' => 'M.Sc in COMPUTER SCIENCE',
        ]);

        DB::table('courses')->insert([
            'name' => 'B.Sc in PHYSICAL EDUCATION & SPORTS',
        ]);

        DB::table('courses')->insert([
            'name' => 'B.Sc in PHYSICAL EDUCATION & SPORTS (TOP UP)',
        ]);

        DB::table('courses')->insert([
            'name' => 'MASTER OF BUSINESS ADMINISTRATION (M.BA)',
        ]);

        DB::table('courses')->insert([
            'name' => 'DOCTOR OF BUSINESS ADMINISTRATION (D.BA)',
        ]);

        DB::table('courses')->insert([
            'name' => 'B.Sc in CIVIL ENGINEERING (TOP UP)',
        ]);

        DB::table('courses')->insert([
            'name' => 'BACHELOR OF EDUCATION (B.ED)',
        ]);

        DB::table('courses')->insert([
            'name' => 'MASTER OF EDUCATION (M.ED)',
        ]);

        DB::table('courses')->insert([
            'name' => 'DOCTOR OF EDUCATION (D.ED)',
        ]);

        DB::table('courses')->insert([
            'name' => 'MASTER OF PUBLIC ADMINISTRATION (MPA)',
        ]);

        DB::table('courses')->insert([
            'name' => 'BA in English (Top Up)',
        ]);
    }
}
