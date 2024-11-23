<script setup lang="ts">
import type {PropType} from "vue";
import logo from "@/assets/svg/logo.svg"
import logoBlack from "@/assets/svg/logo-black.svg"

const props = defineProps({
  theme: String as PropType<"black" | "white">
})
</script>

<template>
  <header
    class="width-wrapper z-[2] max-xl:px-5"
    :class="{ '': theme === 'black' }"
  >
    <div
      class="flex justify-between items-center xl:mt-4 w-full border-b-[1px] py-2.5"
      :class="{
        'xl:mt-4 border-b-[rgba(255,255,255,.1)]': theme === 'black',
        ' mb-4 border-b-[rgba(0,0,0,.05)]': theme === 'white',
      }"
    >
      <nuxt-link to="/">
        <img class="w-[116px] h-[34px]" :src="theme === 'white' ? logoBlack : logo" alt="logo">
      </nuxt-link>
      <div class="flex gap-12 text-white uppercase title-14-700 tracking-[4px] max-xl:hidden">
        <LazyUiUnderline class="py-3">
          <nuxt-link :class="theme === 'white' ? 'text-black' : 'text-white'" to="/">Парфюмерия</nuxt-link>
        </LazyUiUnderline>
        <LazyUiUnderline class="py-3">
          <nuxt-link :class="theme === 'white' ? 'text-black' : 'text-white'" to="/about">О НАС</nuxt-link>
        </LazyUiUnderline>
        <LazyUiUnderline class="py-3">
          <nuxt-link :class="theme === 'white' ? 'text-black' : 'text-white'" to="/">FAQ</nuxt-link>
        </LazyUiUnderline>
        <LazyUiUnderline class="py-3">
          <nuxt-link :class="theme === 'white' ? 'text-black' : 'text-white'" to="/">Контакты</nuxt-link>
        </LazyUiUnderline>
      </div>
      <div class="flex gap-4">
        <i
          class="icon icon-basket"
          :class="theme === 'white' ? 'bg-black' : 'bg-white'"
        ></i>
        <i
          class="icon icon-burger xl:!hidden"
          :class="theme === 'white' ? 'bg-black' : 'bg-white'"
        ></i>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
</style>
