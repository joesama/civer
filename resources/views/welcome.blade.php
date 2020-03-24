<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link href="{{ mix('/css/civer.css') }}" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/nprogress@0.2.0/nprogress.css">
        <script src="{{ mix('/js/civer.js') }}" defer></script>
    </head>
    <body>
        <div class="gradient-blue civer h-screen w-screen">
            <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                <div class="block rounded-lg outline-no shadow-lg w-3/4 bg-white py-8">
                    <div class="flex font-medium subpixel-antialiased tracking-wider leading-tight text-center mx-6 mb-6 font-bold">
                        <img src="/images/CIVER.png" class="object-contain"/>
                        <div class="w-3/6 text-base font-mono font-hairline mt-4 m-auto">
                            <ul class="list-disc p-4 text-left">
                                <li class="my-4">
                                    Run <code class="bg-gray-900 text-white p-2 rounded-lg">composer pre-setup-civer</code> 
                                </li>
                                <li  class="my-4">
                                    Update configuration file
                                </li>
                                <li  class="my-4">
                                    Run <code class="bg-gray-900 text-white p-2 rounded-lg">php artisan migrate</code> 
                                </li>                         
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
