<?php

use M1guelpf\NetlifyMix\Http\Middleware\VerifyNetlifyRequest;

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

Route::statamic('blog/feed', 'feed', ['layout' => '', 'content_type' => 'xml']);
Route::statamic('blog/', 'posts.index');
