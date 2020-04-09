<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Show the application welcome screen to the user.
     *
     * @return mixed
     */
    public function __invoke()
    {
        return Inertia::render('Dashboard', []);
    }
}
