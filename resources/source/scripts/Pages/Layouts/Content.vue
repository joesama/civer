<template>
  <div class="gradient-blue pt-20 p-2 min-h-screen h-auto w-screen">
    <div class="w-full h-full min-h-screen grid grid-rows-3 grid-flow-col gap-4">
      <div class="row-span-3 col-span-2 bg-white rounded-lg">
        <slot />
      </div>
      <div class="row-span-1 bg-white rounded-lg"></div>
      <div class="row-span-2 bg-white rounded-lg"></div>
    </div>
  </div>
</template>