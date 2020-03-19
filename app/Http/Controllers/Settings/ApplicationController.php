<?php
namespace App\Http\Controllers\Settings;

use Inertia\Inertia;
use App\Services\Setup;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;

class ApplicationController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Setup site informations.
     *
     * @param Request $request
     *
     * @return void
     */
    public function index(Request $request)
    {
        $serviceSetup = new Setup($request->input());
        
        return Inertia::render('Settings/Config', [
            'system' => $serviceSetup->siteSetup(),
        ]);
    }

    /**
     * Save site information data.
     *
     * @param Request $request
     *
     * @return void
     */
    public function saveAppInfo(Request $request)
    {
        $serviceSetup = new Setup($request->input());

        $serviceSetup->updateSetup();

        if (!empty($request->file())) {
            $serviceSetup->uploadSiteImages([
                'logo' => $request->file('logo'),
                'login' => $request->file('login'),
            ]);
        }

        return Redirect::route('config');
    }
}
