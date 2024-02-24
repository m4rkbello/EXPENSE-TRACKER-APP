<?php

use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\WalletController;
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

// Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::resource('wallets', WalletController::class)->only('index');

// Route::get('wallets', [WalletController::class, 'index']);
// Route::post('wallets', [WalletController::class, 'store']);
// Route::get('wallets/{wallet}', [WalletController::class, 'show']);
// Route::put('wallets/{wallet}', [WalletController::class, 'update']);
// Route::delete('wallets/{wallet}', [WalletController::class, 'destroy']);

Route::resource("wallets", WalletController::class);
Route::resource("expenses", ExpenseController::class);
