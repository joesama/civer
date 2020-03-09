<?php

function translations($lang)
{
    return (new App\Services\Translations($lang))->content();
}
