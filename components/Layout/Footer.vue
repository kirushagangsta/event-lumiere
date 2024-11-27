<script setup lang="ts">

</script>

<template>
  <footer class="w-full bg-[#F8F8F3]">
    <div class="width-wrapper flex flex-col items-center pt-4 pb-12 max-xl:px-5 max-xl:pb-6">
      <img
        class="size-16"
        src="@/assets/images/horse.webp"
        alt="horse"
      >
      <div class="w-full mt-2 h-[1px] bg-black opacity-10"/>
      <div class="title-24-600 mt-12 max-xl:mt-10 max-xl:!text-[20px]">
        УЗНАТЬ БОЛЬШЕ
      </div>
      <div class="flex font-forum gap-10 text-[20px] leading-[130%] mt-8 max-xl:mt-6 max-xl:!text-[14px] max-xl:w-full max-xl:justify-between">
        <nuxt-link class="text-black" to="/">Парфюмерия</nuxt-link>
        <nuxt-link class="text-black" to="/about">О&nbsp;нас</nuxt-link>
        <nuxt-link class="text-black" to="/">FAQ</nuxt-link>
        <nuxt-link class="text-black" to="/">Контакты</nuxt-link>
      </div>
      <div class="font-forum text-[16px] leading-[130%] !font-normal max-xl:!text-[12px] lh-150 mt-12 max-xl:mt-10">
        ® 2024 Event Lumiere
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
</style>
