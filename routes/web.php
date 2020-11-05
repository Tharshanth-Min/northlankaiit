<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ProgramController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\HelperController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// DASHBOARD IN REACT


Route::view('/dashboard/{any}', 'dashboard')->where('any', '.*');



Route::get('/', [HomeController::class, 'index']);
Route::get('/rector-message', [AboutController::class, 'rectorMessage']);
Route::get('/lecturers-message', [AboutController::class, 'lecturersMessage']);
Route::get('/institute-goal', [AboutController::class, 'instituteGoal']);
Route::get('/programmes/bsc-computer-science', [ProgramController::class, 'bscComputing']);
Route::get('/programmes/bsc-computer-science-top-up', [ProgramController::class, 'bscComputingTopUp']);
Route::get('/programmes/msc-computer-science', [ProgramController::class, 'mscComputing']);
Route::get('/programmes/bsc-physical-education-sport-top-up', [ProgramController::class, 'bscPhysicalEduSpotTopUp']);
Route::get('/programmes/bsc-physical-education-sport', [ProgramController::class, 'bscPhysicalEduSpot']);
Route::get('/programmes/mba-business-administration', [ProgramController::class, 'mabBusinessAdmins']);
Route::get('/programmes/dba-business-administration', [ProgramController::class, 'dbaBusinessAdmins']);
Route::get('/programmes/bsc-civil-engineering-top-up', [ProgramController::class, 'bscCivilEngTopUp']);
Route::get('/programmes/bachelor-education', [ProgramController::class, 'bachelorEducaBed']);
Route::get('/programmes/master-education', [ProgramController::class, 'masterEducaPhd']);
Route::get('/programmes/doctor-education', [ProgramController::class, 'doctorEducaPhd']);
Route::get('/programmes/master-public-administration', [ProgramController::class, 'masterPublicAdmins']);
Route::get('/programmes/ba-english-top-up', [ProgramController::class, 'baEnglishTopUp']);
Route::get('/gallery', [GalleryController::class, 'galleries']);
Route::get('/contact', [ContactController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
Route::get('/student-register-online', [StudentController::class, 'addStudent']);
Route::post('/student-register-online', [StudentController::class, 'storeStudent']);
Route::get('/student-registration-succeeded', [HelperController::class, 'successMessage']);
Route::get('/video', [VideoController::class, 'index']);
Route::get('/blog', [NewsController::class, 'viewNews']);
Route::get('/news/{title?}', [NewsController::class, 'showImage']);
