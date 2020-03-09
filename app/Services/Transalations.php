<?php

namespace App\Services;

class Translations
{
    private $locale;

    public function __construct($lang)
    {
        $this->locale = $lang;
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
