<script setup lang="ts">
import type {PropType} from "vue";
import type {BtnThemes} from "~/types/ui/models";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },

  theme: {
    type: String as PropType<BtnThemes>,
    default: "black",
  }
})

const themeClasses = computed(() => {
  switch (props.theme) {
    case "black": return "bg-black text-white";
    case "white": return "bg-white text-black"
  }
})
</script>

<template>
  <div
    class="py-[15px] px-12 cursor-pointer"
    :class="themeClasses"
  >
    {{ text }}
  </div>
</template>

<style scoped lang="scss">

</style>