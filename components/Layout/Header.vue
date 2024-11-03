<script setup lang="ts">

</script>

<template>
  <header class="width-wrapper mt-8 z-[2] max-xl:px-5 max-xl:mt-4">
    <div class="w-full bg-white opacity-10 h-[1px] max-xl:hidden" />
    <div class="flex justify-between items-center xl:mt-4 w-full">
      <nuxt-link to="/">
        <img class="h-11 w-[146px]" src="@/assets/svg/logo.svg" alt="logo">
      </nuxt-link>
      <div class="flex gap-12 text-white uppercase title-14-700 tracking-[4px] max-xl:hidden">
        <LazyUiUnderline class="py-3">
          <nuxt-link class="text-white" to="/">Парфюмерия</nuxt-link>
        </LazyUiUnderline>
        <LazyUiUnderline class="py-3">
          <nuxt-link class="text-white" to="/">О НАС</nuxt-link>
        </LazyUiUnderline>
        <LazyUiUnderline class="py-3">
          <nuxt-link class="text-white" to="/">FAQ</nuxt-link>
        </LazyUiUnderline>
        <LazyUiUnderline class="py-3">
          <nuxt-link class="text-white" to="/">Контакты</nuxt-link>
        </LazyUiUnderline>
      </div>
      <div class="flex gap-4">
        <i class="icon icon-basket"></i>
        <i class="icon icon-burger xl:!hidden"></i>
      </div>
    </div>
    <div class="w-full bg-white opacity-10 h-[1px] mt-1 xl:hidden" />
  </header>
</template>

<style scoped lang="scss">
</style>
