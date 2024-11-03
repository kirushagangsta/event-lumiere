<script setup lang="ts">
import track1 from "@/assets/images/track-1.webp";
import track2 from "@/assets/images/track-2.webp";
import track3 from "@/assets/images/track-3.webp";
import track4 from "@/assets/images/track-4.webp";
import track5 from "@/assets/images/track-5.webp";

const images = [track1, track2, track3, track4, track5];
</script>

<template>
  <section class="track py-[192px] max-w-[100vw] max-xl:pt-[122px] max-xl:pb-[80px] w-full text-center">
    <h2 class="uppercase font-bold text-[40px] leading-[150%] max-xl:text-[30px] font-cormorant">следите за нашим
      развитием</h2>
    <div class="mt-6 max-xl:mt-2">
      <LazyUiUnderline class="pb-2 w-fit mx-auto">
        <a href="https://www.instagram.com/event.lumiere/"
           class="text-black text-[20px] max-xl:text-[16px] leading-[150%]"
           target="_blank">@event.lumiere</a>
      </LazyUiUnderline>
    </div>
    <div class="track-carousel flex gap-1 mt-[88px] max-xl:mt-10 title-20-400 w-full">
      <div
        v-for="i in 4"
        class="flex gap-1"
      >
        <div
          v-for="image in images"
          :key="image"
          class="size-[calc(20vw-4px)] xxl:size-[calc(10vw-4px)] max-xl:size-[calc(40vw-2px)] max-xl:-translate-x-[10vw]"
        >
          <img :src="image" alt="track" class="size-full">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.track {
  .underline-hover:after {
    border-bottom-color: black;
  }

  &-carousel {
    animation: slide-carousel 30s infinite;

    @include up-breakpoint(xxl) {
      animation: slide-carousel-xxl 60s infinite;
    }

    @include breakpoint(xl) {
      animation: slide-carousel-lg 30s infinite;
    }
  }

  @keyframes slide-carousel-lg {
    @include carousel-animation(5, 40, -2);
  }

  @keyframes slide-carousel {
    @include carousel-animation(5);
  }

  @keyframes slide-carousel {
    @include carousel-animation(5);
  }

  @keyframes slide-carousel-xxl {
    @include carousel-animation(10);
  }
}
</style>