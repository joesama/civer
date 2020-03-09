<?php

namespace App\Services;

class Translations
{
    /**
     * Locale
     *
     * @var string
     */
    private $locale;

    /**
     * Fallback locale
     *
     * @var string
     */
    private $fallback;

    public function __construct($lang)
    {
        $this->locale = $lang;

        $this->fallback = config('app.fallback_locale');
    }

    private function getAllTransalationFiles()
    {
        return glob(resource_path('lang/' . $this->locale) . '/*.php');
    }

    public function content()
    {
        $contents = [];

        foreach ($this->getAllTransalationFiles() as $file) {
            $contents[basename($file, '.php')] = require($file);
        }

        return (object) $contents;
    }
}
