<script setup lang="ts">
import track1 from "@/assets/images/track-1.webp";
import track2 from "@/assets/images/track-2.webp";
import track3 from "@/assets/images/track-3.webp";
import track4 from "@/assets/images/track-4.webp";
import track5 from "@/assets/images/track-5.webp";

const images = [track1, track2, track3, track4, track5];
</script>

<template>
  <section class="track py-[192px] max-w-[100vw] w-full text-center">
    <h2 class="uppercase tracking-[4px] font-bold text-2xl">следите за нашим развитием</h2>
    <div class="mt-6">
      <a href="https://www.instagram.com/event.lumiere/" class="text-black font-serif"
         target="_blank">@event.lumiere</a>
    </div>
    <div class="track-carousel flex gap-1 mt-24 title-20-400 w-full">
      <div
        v-for="i in 4"
        class="flex gap-1"
      >
        <div
          v-for="image in images"
          :key="image"
          class="size-[calc(20vw-4px)] xxl:size-[calc(10vw-4px)]"
        >
          <img :src="image" alt="track" class="size-full" loading="lazy">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.track {
  &-carousel {
    animation: slide-carousel 30s infinite;

    @include up-breakpoint(xxl) {
      animation: slide-carousel-xxl 60s infinite;
    }
  }

  @keyframes slide-carousel {
    @include carousel-animation(5);
  }

  @keyframes slide-carousel-xxl {
    @include carousel-animation(10);
  }
}
</style>