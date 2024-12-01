<script setup lang="ts">
import BurgerMenu from "~/components/Blocks/BurgerMenu.vue";
import {vElementVisibility} from '@vueuse/components'

const route = useRoute();

const showBurger = ref<boolean>(false);
const headerFixed = ref<boolean>(false);

const hideBurger = () => setTimeout(() => {
  showBurger.value = false;
}, 50)

const onHeaderVisibility = (state: boolean) => {
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
      v-element-visibility="onHeaderVisibility"
    />
    <div
      class="fixed top-0 left-0 z-10 bg-white w-full transition-all duration-1000"
      :class="[headerFixed ? 'top-0' : 'top-[-100px]']"
    >
      <LayoutHeader
        class="fixed-header"
        theme="white"
        @show-burger="showBurger = true"
        :is-fixed="headerFixed"
      />
    </div>
    <slot/>
    <LayoutFooter/>
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

<style lang="scss">
.fixed-header {
  .header-border {
    border-bottom: 1px solid transparent;
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>