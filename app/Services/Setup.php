<?php
namespace App\Services;

use Exception;
use Illuminate\Support\Facades\Storage;
use Orchestra\Support\Facades\Memory;

class Setup
{
    const LOGO = '/images/CIVER.png';

    const LOGIN = '/images/login_left.png';

    const SITE = 'site';

    protected $setup;

    protected $memory;

    /**
     * Setup Services Constructor.
     *
     * @param array $setupParameter
     */
    public function __construct(array $setupParameter)
    {
        $this->setup = $setupParameter;

        try {
            $this->memory = $this->getMemoryProvider();
        } catch (Exception $exception) {
            return redirect('/');
        }
    }
    /**
     * Initiate Setup Process.
     *
     * @return void
     */
    public function initiateSetup()
    {
        foreach ($this->setup as $key => $value) {
            $this->memory->put(self::SITE .'.'. $key, $value);
        }

        $this->memory->put(self::SITE .'.logo.url', self::LOGO);

        $this->memory->put(self::SITE .'.login.url', self::LOGIN);
    }

    /**
     * Update site setup information.
     *
     * @return void
     */
    public function updateSetup()
    {
        collect($this->setup)->except(['logo', 'login'])->each(function ($value, $key) {
            $this->memory->put(self::SITE .'.'. $key, $value);
        });
    }

    /**
     * Upload images for site configs.
     *
     * @param array $files
     *
     * @return void
     */
    public function uploadSiteImages(array $files)
    {
        $folder = 'images';

        foreach ($files as $key => $uploadedFile) {
            $filename = 'app_'. $key . '.' . $uploadedFile->extension();

            $fileUploaded = Storage::putFileAs(
                $folder,
                $uploadedFile,
                $filename
            );

            $publicPath = 'images/sites/';

            if (!\is_dir($newDir = \public_path($publicPath))) {
                mkdir($newDir);
            }

            copy(storage_path('app/'). $fileUploaded, $newDir.$filename);

            $this->memory->put(self::SITE .'.'.$key.'.url', $publicPath.$filename);

            $this->memory->put(self::SITE .'.'.$key.'.path', $fileUploaded);
        }
    }

    /**
     * Get Site Setup Information.
     *
     * @return void
     */
    public function siteSetup()
    {
        return $this->getMemoryProvider()->get(self::SITE);
    }

    /**
     * Get Memory Provider.
     *
     * @return void
     */
    private function getMemoryProvider()
    {
        return Memory::make();
    }
}
