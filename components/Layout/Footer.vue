<script setup lang="ts">

</script>

<template>
  <footer class="w-full bg-[#F8F8F3]">
    <div class="width-wrapper flex flex-col items-center pt-4 pb-12">
      <img
        class="size-24"
        src="@/assets/images/horse.webp"
        alt="horse"
      >
      <div class="w-full mt-2 h-[1px] bg-black opacity-10"/>
      <div class="title-24-600 mt-12">
        УЗНАТЬ БОЛЬШЕ
      </div>
      <div class="flex font-serif gap-10 title-16-400 mt-8">
        <nuxt-link class="text-black" to="/">Парфюмерия</nuxt-link>
        <nuxt-link class="text-black" to="/">О нас</nuxt-link>
        <nuxt-link class="text-black" to="/">FAQ</nuxt-link>
        <nuxt-link class="text-black" to="/">Контакты</nuxt-link>
      </div>
      <div class="title-14-700 fw-400 lh-150 mt-12">
        ® 2024 Event Lumiere
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
</style>
