<?php

use App\Http\Controllers\DeviceController;
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\FileController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

Route::group(['middleware' => 'auth:sanctum'], function(){
    //All secure URL's
   // Route::apiResource("resourceroute",[ResourceController::class]);


   Route::get("list",[DeviceController::class, 'list']);

   Route::post("add", [DeviceController::class, 'add']);
   
   Route::put("update", [DeviceController::class, 'update']);
   
   Route::delete("delete/{id}", [DeviceController::class, 'delete']);
   
   Route::get("search/{name}", [DeviceController::class, 'search']);
   
   Route::post("test",[DeviceController::class, 'test']);

    });



Route::post("login",[UserController::class,'index']);
Route::post("upload",[FileController::class,'upload']);
