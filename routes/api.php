<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\NewsImageController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\HelperController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([
    'prefix' => 'v1'
], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
});


Route::prefix('v1')->middleware(['auth:api','scope:moderator', 'role'])->group(function () {
    Route::post('register', 'AuthController@signUp');
});

Route::prefix('v1')->middleware(['auth:api','scope:admin,user', 'role'])->group(function () {
    Route::resource('news', NewsController::class);
    Route::resource('news-gallery', NewsImageController::class);
    Route::delete('remove-news-image', [NewsImageController::class, 'removeImage']);
    Route::resource('gallery', GalleryController::class);
    Route::resource('student', StudentController::class);
    Route::get('course-name', [HelperController::class, 'courseName']);
    Route::get('test', [StudentController::class, 'test']);

});
