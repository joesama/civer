<template>
  <div class="pt-20 gradient-blue p-2 min-h-full h-auto w-full">
    <div class="grid gap-1 grid-cols-3 gap-2">
      <div class="col-span-2">
        <div class="w-full h-auto min-h-full hidden sm:block bg-white rounded-lg p-1">
          <slot />
        </div>
      </div>
      <div class="col-span-1">
        <div class="grid grid-flow-col grid-cols-1 grid-rows-3 gap-4">
          <div class="row-span-1 col-span-1 bg-white rounded-lg">
              <div class="civer-info-grid m-1">
                <div class="civer-info-divider rounded-t-lg">
                  {{ __('auth.profile.title') }}
                </div>
                <div class="civer-info-label">{{ __('auth.profile.name') }}</div>
                <div class="civer-info-desc">
                  {{ $page.nav.user.name }}
                </div>
                <div class="civer-info-label">{{ __('auth.profile.dept') }}</div>
                <div class="civer-info-desc"></div>
                <div class="civer-info-label">{{ __('auth.profile.phone') }}</div>
                <div class="civer-info-desc"></div>
                <div class="civer-info-label rounded-bl-lg">{{ __('auth.profile.email') }}</div>
                <div class="civer-info-desc rounded-br-lg">
                  {{ $page.nav.user.email }}
                </div>
              </div>
          </div>
          <div class="row-span-2 col-span-1 bg-white rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
</template>