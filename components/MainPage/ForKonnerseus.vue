<template>
  <div
    v-element-visibility="onElementVisibility"
    class="h-[550px] w-full flex justify-center relative font-cormorant"
  >
    <div
      v-for="(slide, index) in slides"
      :key="slide.text"
      class="relative shrink-0 transition-all duration-[2s] w-full h-full"
      :style="{ transform: `translateX(${-activeControl * 100 + 200}%)` }"
    >
      <img :src="slide.image" alt="konnoseurs" class="w-full h-full absolute top-0 left-0 object-cover"
           loading="lazy">
      <div class="konnerseus__radial z-[2] xl:left-[calc(50%-570px)] width-wrapper h-full absolute"></div>
      <div
        class="z-[3] relative uppercase text-center h-full flex flex-col justify-center max-xl:px-5">
        <div
          class="text-white title-2 tracking-[4px] transition-all duration-1000 delay-[0.5s] max-xl:!text-[30px]"
          :class="{
            'translate-y-[60px] opacity-0': !isVisible || activeControl !== index + 1,
          }"
        >
          {{ slide.text }}
        </div>
        <a
          href="https://t.me/eventlumiere"
          target="_blank"
          class="flex justify-center title-14-700 mt-12 transition-all duration-1000 delay-[1.5s]"
          :class="{
            'opacity-0': !isVisible || activeControl !== index + 1
          }"
        >
          <div class="px-12 py-[15px] text-black w-fit title-14-700 tracking-[4px] bg-white max-xl:w-full">
            смотреть в Telegram
          </div>
        </a>
      </div>
    </div>
    <div class="bottom-[21px] gap-[10px] z-[4] absolute flex items-center">
      <div
        v-for="i in 3"
        :key="i"
        class="size-1.5 rounded-[50%] cursor-pointer opacity-60 bg-white"
        :class="{
          'size-[9px] !opacity-100': activeControl === i
        }"
        @click="setSlide(i)"
      >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import konnoBg1 from "@/assets/images/konnoseurs-bg-1.webp"
import konnoBg2 from "@/assets/images/konnoseurs-bg-2.webp"
import konnoBg3 from "@/assets/images/konnoseurs-bg-3.webp"
import { vElementVisibility } from '@vueuse/components'

const isVisible = ref(false);
const activeControl = ref(1);

const slides = [
  {
    image: konnoBg1,
    text: "для конносеров"
  },
  {
    image: konnoBg2,
    text: "Вкусы, что вдохновляют"
  },
  {
    image: konnoBg3,
    text: "культура. стиль. традиции."
  }
]

let interval: Nullable<NodeJS.Timeout> = null;

const slide = () => {
  if (activeControl.value > 2) {
    activeControl.value = 1;
  } else {
    activeControl.value += 1;
  }
}

const setSlide = (slideNumber: number) => {
  activeControl.value = slideNumber;
  if (interval) {
    clearInterval(interval);
    interval = setInterval(slide, 700000);
  }
}

onMounted(() => {
  slide();
  interval = setInterval(slide, 700000);
})

onUnmounted(() => {
  if (interval)
    clearInterval(interval);
});

const onElementVisibility = () => {
  if (!isVisible.value) {
    isVisible.value = true;
  }
}
</script>

<style lang="scss" scoped>
.konnerseus__radial {
  background: radial-gradient(70.71% 70.71% at 50% 50%, rgba(0, 0, 0, 0.5) 8%, rgba(0, 0, 0, 0) 70.5%);
}
</style>