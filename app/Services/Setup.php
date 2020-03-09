<?php
namespace App\Services;

use Orchestra\Support\Facades\Memory;

class Setup
{
    const LOGO = '/images/CIVER.png';

    const SITE = 'site';

    protected $setup;

    /**
     * Setup Services Constructor.
     *
     * @param array $setupParameter
     */
    public function __construct(array $setupParameter)
    {
        $this->setup = $setupParameter;
    }
    /**
     * Initiate Setup Process.
     *
     * @return void
     */
    public function initiateSetup()
    {
        $memory = $this->getMemoryProvider();

        foreach ($this->setup as $key => $value) {
            $memory->put(self::SITE .'.'. $key, $value);
        }

        $memory->put(self::SITE .'.logo', self::LOGO);
    }

    /**
     * Preview Site Setup Information.
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
