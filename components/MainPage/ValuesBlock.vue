<template>
  <div class="w-full text-center">
    <img
      class="values-block__img size-24 mx-auto"
      src="@/assets/images/horse.webp"
      alt="horse"
    >
    <div class="title-24-600 mt-3 font-tragan">
      {{ title }}
    </div>
    <div class="title-16-400 mt-3 font-tragan">
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
