<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class HelperController extends Controller {

    public function successMessage() {
        return view('success.success')->with('success', "The student's registered");
    }

    public function courseName() {
        $course = Course::select('id', 'name')->get();

        return [
            'course' => $course,
        ];
    }
}
