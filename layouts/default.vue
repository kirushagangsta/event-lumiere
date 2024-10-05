<script setup lang="ts">

</script>

<template>
  <div class="page-wrapper">
    <div class="position-absolute top-shadow w-100"></div>
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss">
.top-shadow {
  top: 0;
  left: 0;
  height: 146px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(202, 203, 207, 0) 100%);
}
</style>