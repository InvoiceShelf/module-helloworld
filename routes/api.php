<?php

use Illuminate\Support\Facades\Route;
use Modules\HelloWorld\Http\Controllers\QrCodeController;

/*
 * Behind the host's API stack, like every module route: a signed-in member of
 * the active company. The slug prefix keeps it clear of core routes.
 */
Route::prefix('api/v1/hello-world')->middleware(['api', 'auth:sanctum', 'company', 'bouncer'])->group(function (): void {
    Route::get('qr', QrCodeController::class)->name('hello-world.qr');
});
