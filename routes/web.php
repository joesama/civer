<?php

use Illuminate\Routing\Router;

/*
|--------------------------------------------------------------------------
| Application Frontend Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a given Closure or controller and enjoy the fresh air.
|
*/

$router->middleware('web')
    ->group(function (Router $router) {
        $router->middleware('guest')->group(function (Router $router) {
            $router->get('/', function () use ($router) {
                try {
                    $memory = app()->make('orchestra.memory')->make();

                    if ($memory->get('site') === null) {
                        return redirect(route('setup'));
                    }
                } catch (Exception $exception) {
                    return view('welcome', ['error' => $exception]);
                }

                return redirect(route('welcome'));
            });
            $router->get('/setup', 'SetupController@index');
            $router->get('/login', 'WelcomeController')->name('welcome');
            $router->post('/setup', 'SetupController@setup')->name('setup');
            $router->post('/login', 'Auth\LoginController@login')->name('login');
        });

        $router->middleware('auth')->group(function (Router $router) {
            $router->get('/home', 'HomeController')->name('home');
            $router->post('/logout', 'Auth\LoginController@logout')->name('logout');
            $router->get('/access', 'Auth\LoginController@access')->name('access');
            $router->get('/acl', 'Auth\AccessControlController@index')->name('acl');
            $router->post('/acl/save', 'Auth\AccessControlController@save')->name('acl.save');
            $router->get('/config', 'Settings\ApplicationController@index')->name('config');
            $router->post('/config/save', 'Settings\ApplicationController@saveAppInfo')->name('config.save');
        });
    });
