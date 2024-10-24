<script setup lang="ts">

</script>

<template>
  <header class="width-wrapper mt-8 z-[2]">
    <div class="w-full bg-white opacity-10 h-[1px]" />
    <div class="flex justify-between items-center mt-4 w-full">
      <nuxt-link to="/">
        <img class="h-11 w-[146px]" src="@/assets/svg/logo.svg" alt="logo">
      </nuxt-link>
      <div class="flex gap-12 text-white uppercase title-14-700 tracking-[4px]">
        <nuxt-link class="text-white" to="/">Парфюмерия</nuxt-link>
        <nuxt-link class="text-white" to="/">О НАС</nuxt-link>
        <nuxt-link class="text-white" to="/">FAQ</nuxt-link>
        <nuxt-link class="text-white" to="/">Контакты</nuxt-link>
      </div>
      <i class="icon icon-basket"></i>
    </div>
  </header>
</template>

<style scoped lang="scss">
</style>
