




<template>
  <div class="pt-20 gradient-blue p-2 min-h-full h-auto w-full">
    <div class="w-full h-auto min-h-full grid sm:grid-rows-5 sm:grid-flow-col-dense gap-4">
      <div class="hidden sm:block sm:row-span-5 sm:col-span-6 bg-white rounded-lg p-1">
        <slot />
      </div>
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
      <div class="row-span-4 col-span-1 bg-white rounded-lg"></div>
    </div>
  </div>
</template>