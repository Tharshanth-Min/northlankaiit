<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;

class AboutController extends Controller {

    public function rectorMessage() {
        $news = News::select('id', 'title', 'description')->latest()->first();

        return view('abouts.rector-message', compact('news'));
    }

    public function lecturersMessage() {
        $news = News::select('id', 'title', 'description')->latest()->first();
        return view('abouts.lecturers-panel', compact('news'));
    }

    public function instituteGoal() {
        $news = News::select('id', 'title', 'description')->latest()->first();

        return view('abouts.institute-goal', compact('news'));
    }
}
