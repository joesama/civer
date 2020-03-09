<?php

namespace App\Http\Controllers;

use App\Services\Setup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SetupController extends Controller
{

    /**
     * Show the application welcome screen to the user.
     *
     * @return mixed
     */
    public function index(Request $request)
    {
        $serviceSetup = new Setup($request->input());

        return Inertia::render('Setup', [
            'system' => $serviceSetup->siteSetup(),
        ]);
    }

    /**
     * Save setup
     *
     * @param Request $request
     *
     * @return void
     */
    public function setup(Request $request)
    {
        $serviceSetup = new Setup($request->input());

        $serviceSetup->initiateSetup();

        return Inertia::render('Setup', [
            'system' => $serviceSetup->siteSetup(),
        ]);
    }
}
