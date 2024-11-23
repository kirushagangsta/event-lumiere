<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div class="page-wrapper">
    <div
      v-if="route.path === '/'"
      class="absolute top-0 left-0 h-[146px] z-[2] top-shadow w-full max-xl:h-[75px]"
    ></div>
    <LayoutHeader :theme="route.path === '/' ? 'black' : 'white'" />
    <slot />
    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss">
.top-shadow {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(202, 203, 207, 0) 100%);
}
</style>