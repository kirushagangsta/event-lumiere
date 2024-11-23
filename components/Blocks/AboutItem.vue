<script setup lang="ts">
import type {PropType} from "vue";

const props = defineProps({
  subheader: {
    type: String,
  },
  header: {
    type: String,
  },
  textParagraphs: {
    type: Array as PropType<string[]>,
  },
  btnText: {
    type: String,
  },
  btnAction: {
    type: String,
  },
  reversed: {
    type: Boolean,
    default: false,
  },
  firstItem: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <section class="flex xl:py-24 gap-10 items-center max-xl:flex-col">
    <div
      class="font-cormorant text-[16px] max-xl:text-[14px] max-xl:order-1"
      :class="{ 'xl:order-1': reversed }"
    >
      <div v-if="subheader" class="uppercase leading-[150%] max-xl:mb-2">
        {{ subheader }}
      </div>
      <div class="xl:mt-4 uppercase leading-[150%] text-[30px] max-xl:text-[24px]">
        {{ header }}
      </div>
      <img
        v-if="firstItem"
        class="xl:size-[526px] xl:hidden my-10 max-xl:w-full"
        src="@/assets/images/temp-about.png"
        alt="about"
      />
      <div class="mt-6 font-forum text-[20px] leading-[130%] max-xl:text-[18px]">
        <p
          v-for="(item, index) in textParagraphs" :key="item"
          :class="{ 'mt-4': index !== 0 }"
        >
          {{ item }}
        </p>
      </div>
      <a
        v-if="btnAction?.includes('http')"
        :href="btnAction"
        target="_blank"
      >
        <LazyUiButton class="mt-10 w-[335px] max-xl:w-full text-center font-cormorant uppercase tracking-[3px] title-14-700 !px-0" :text="btnText" />
      </a>
      <nuxt-link v-else :to="btnAction">
        <LazyUiButton class="mt-10 w-[335px] max-xl:w-full text-center font-cormorant uppercase tracking-[3px] title-14-700 !px-0" :text="btnText" />
      </nuxt-link>
    </div>
    <img
      class="xl:size-[526px] max-xl:w-full max-xl:order-0"
      :class="{ 'xl:order-0': reversed, 'max-xl:hidden': firstItem }"
      src="@/assets/images/temp-about.png"
      alt="about"
    />
  </section>
</template>

<style scoped lang="scss">

</style>