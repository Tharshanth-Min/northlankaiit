<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StreamTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {

        DB::table('stream_types')->insert([
            'name' => 'Science stream',
        ]);

        DB::table('stream_types')->insert([
            'name' => 'Mathematics stream',
        ]);

        DB::table('stream_types')->insert([
            'name' => 'Commerce stream',
        ]);

        DB::table('stream_types')->insert([
            'name' => 'Arts stream',
        ]);

        DB::table('stream_types')->insert([
            'name' => 'Technology stream',
        ]);
    }
}
