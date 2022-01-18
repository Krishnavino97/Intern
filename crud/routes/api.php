<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiDeviceController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("list",[ApiDeviceController::class, 'list']);

Route::post("add", [ApiDeviceController::class, 'add']);

Route::put("update", [ApiDeviceController::class, 'update']);

Route::delete("delete/{id}", [ApiDeviceController::class, 'delete']);

Route::get("search/{name}", [ApiDeviceController::class, 'search']);

// Route::get("list",[CustomAuthController::class, 'list']);