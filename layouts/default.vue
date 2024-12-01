<script setup lang="ts">
import BurgerMenu from "~/components/Blocks/BurgerMenu.vue";
import { vElementVisibility } from '@vueuse/components'

const route = useRoute();

const showBurger = ref<boolean>(false);
const headerFixed = ref<boolean>(false);

const hideBurger = () => setTimeout(() => {
  showBurger.value = false;
}, 50)

const onSlotVisibility = (state: boolean) => {
  console.log(state)
  headerFixed.value = !state;
}
</script>

<template>
  <div class="page-wrapper">
    <div
      v-if="route.path === '/'"
      class="absolute top-0 left-0 h-[146px] z-[2] top-shadow w-full max-xl:h-[75px]"
    ></div>
    <LayoutHeader
      :theme="route.path === '/' ? 'black' : 'white'"
      @show-burger="showBurger = true"
      v-element-visibility="onSlotVisibility"
    />
    <div
      class="fixed top-0 left-0 z-10 bg-white w-full transition-all duration-1000"
      :class="[headerFixed ? 'top-0' : 'top-[-100px]']"
    >
      <LayoutHeader
        theme="white"
        @show-burger="showBurger = true"
      />
    </div>
    <slot />
    <LayoutFooter />
    <BurgerMenu
      v-if="showBurger"
      :burger-opened-state="showBurger"
      @close="hideBurger"
    />
  </div>
</template>

<style scoped lang="scss">
.top-shadow {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(202, 203, 207, 0) 100%);
}
</style>