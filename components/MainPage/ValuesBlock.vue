<template>
  <div class="values-block text-center">
    <img
      class="values-block__img"
      src="@/assets/images/horse.webp"
      alt="horse"
    >
    <div class="title-24-600 mt-12 font-tragan">
      {{ title }}
    </div>
    <div class="title-16-400 mt-12 font-tragan">
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ""
  },
  text: {
    type: String,
    default: ""
  }
})
</script>

<style scoped lang="scss">
.values-block {
  width: 425px;

  &__img {
    height: 96px;
    width: 96px;
  }
}
</style>
