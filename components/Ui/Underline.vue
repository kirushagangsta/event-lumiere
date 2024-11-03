<script setup lang="ts">

</script>

<template>
  <div class="underline-hover">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.underline-hover {
  position: relative;
  overflow: hidden;
}

.underline-hover:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: -100%;
  border-bottom: 2px solid;
  border-bottom-color: #ffffff;
  transition: all .5s;
  width: 100%;
  overflow: hidden;
  transform: translateX(0);
}

.underline-hover:hover:after {
  transform: translateX(100%);
}
</style>