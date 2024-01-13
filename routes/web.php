<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\FrontController;

use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

/*
|
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
*/

Route::get('/admin/any/{any}', [AdminController::class, 'admin'])->where('any', '.*')->name('lvs.admin.auth');

Route::get('/admin', [AdminController::class, 'admin'])->where('any', '.*')->name('lvs.admin');

Route::get('/admin/{any}', [AdminController::class, 'admin'])->where('any', '.*')->name('lvs.admin.any');

Route::get('/admin', function () { return redirect()->route('lvs.admin.any', 'dashboard'); } );

/*
|
|--------------------------------------------------------------------------
| Front Routes
|--------------------------------------------------------------------------
|
*/

Route::get('/front', [FrontController::class, 'front'])->where('any', '.*')->name('lvs.front');

Route::get('/front/{any}', [FrontController::class, 'front'])->where('any', '.*')->name('lvs.front.any');

Route::get('/', function () { return redirect()->route('lvs.front.any', 'home'); } );
