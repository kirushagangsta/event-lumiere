<script setup lang="ts">
import type {PropType} from "vue";
import logo from "@/assets/svg/logo.svg"
import logoBlack from "@/assets/svg/logo-black.svg"

const props = defineProps({
  theme: String as PropType<"black" | "white">,
  burgerOpened: {
    type: Boolean,
    default: false,
  },
  isFixed: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <header
    class="width-wrapper z-[2] max-xl:px-5"
    :class="{ 'bg-white': theme === 'white' }"
  >
    <div
      class="flex justify-between items-center xl:mt-4 w-full border-b-[1px] py-2.5 header-border"
      :class="{
        'xl:mt-4 border-b-[rgba(255,255,255,.1)]': theme === 'black',
        'mb-4 border-b-[rgba(0,0,0,.05)]': theme === 'white',
      }"
    >
      <nuxt-link
        to="/"
        @click="$emit('close-burger')"
      >
        <img class="w-[116px] h-[34px]" :src="theme === 'white' ? logoBlack : logo" alt="logo">
      </nuxt-link>
      <div class="flex gap-12 text-white uppercase title-14-700 tracking-[4px] max-xl:hidden">
        <LazyUiUnderline :underline-color="theme === 'white' ? 'black' : 'white'" class="py-3">
          <nuxt-link :class="theme === 'white' ? 'text-black' : 'text-white'" to="/">Парфюмерия</nuxt-link>
        </LazyUiUnderline>
        <LazyUiUnderline :underline-color="theme === 'white' ? 'black' : 'white'" class="py-3">
          <nuxt-link :class="theme === 'white' ? 'text-black' : 'text-white'" to="/about">О НАС</nuxt-link>
        </LazyUiUnderline>
        <LazyUiUnderline :underline-color="theme === 'white' ? 'black' : 'white'" class="py-3">
          <nuxt-link :class="theme === 'white' ? 'text-black' : 'text-white'" to="/">FAQ</nuxt-link>
        </LazyUiUnderline>
        <LazyUiUnderline :underline-color="theme === 'white' ? 'black' : 'white'" class="py-3">
          <nuxt-link :class="theme === 'white' ? 'text-black' : 'text-white'" to="/">Контакты</nuxt-link>
        </LazyUiUnderline>
      </div>
      <div class="flex gap-4">
        <i
          class="icon icon-basket"
          :class="theme === 'white' ? 'bg-black' : 'bg-white'"
        ></i>
        <i
          v-if="!burgerOpened"
          class="icon icon-burger xl:!hidden"
          :class="theme === 'white' ? 'bg-black' : 'bg-white'"
          @click="burgerOpened ? $emit('close-burger') : $emit('show-burger')"
        ></i>
        <i
          v-else
          class="icon icon-cross xl:!hidden"
          :class="theme === 'white' ? 'bg-black' : 'bg-white'"
          @click="$emit('close-burger')"
        ></i>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
</style>
