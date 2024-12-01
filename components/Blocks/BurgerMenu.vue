<script setup lang="ts">
const props = defineProps({
  burgerOpenedState: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="fixed w-screen h-screen top-0 left-0 bg-white z-[99]">
    <LayoutHeader
      :burger-opened="burgerOpenedState"
      theme="white"
      @close-burger="$emit('close')"
    />
    <div class="mt-14 flex flex-col gap-10 uppercase px-5 text-[18px] tracking-[3px] leading-[150%] font-semibold">
      <nuxt-link
        to="/"
        @click="$emit('close')"
      >
        Парфюмерия
      </nuxt-link>
      <nuxt-link
        to="/about"
        @click="$emit('close')"
      >
        О нас
      </nuxt-link>
      <nuxt-link
        to="/"
        @click="$emit('close')"
      >ИНФО
      </nuxt-link>
      <nuxt-link
        to="/"
        @click="$emit('close')"
      >
        Контакты
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>