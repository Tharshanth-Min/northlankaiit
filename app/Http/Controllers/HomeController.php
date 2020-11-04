<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;

class HomeController extends Controller {

    public function index() {
        $news = News::select('id', 'title', 'description')->latest()->first();
        return view('welcome', compact('news'));
    }
}
