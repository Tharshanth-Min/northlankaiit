<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function rectorMessage() {
        return view('abouts.rector-message');
    }
}
