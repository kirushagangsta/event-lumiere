<script setup lang="ts">
import track1 from "@/assets/images/track-1.webp";
import track2 from "@/assets/images/track-2.webp";
import track3 from "@/assets/images/track-3.webp";
import track4 from "@/assets/images/track-4.webp";
import track5 from "@/assets/images/track-5.webp";

const images = [track1, track2, track3, track4, track5];
</script>

<template>
  <section class="track w-100 text-center">
    <h2 class="text-uppercase ls-4">следите за нашим развитием</h2>
    <div class="mt-24">
      <a href="https://www.instagram.com/event.lumiere/" class="color-black font-serif"
         target="_blank">@event.lumiere</a>
    </div>
    <div class="track-carousel d-flex gap-4 mt-96 title-20-400 w-100">
      <div
        v-for="i in 4"
        class="d-flex gap-4"
      >
        <div
          v-for="image in images"
          :key="image"
          class="track-carousel__img"
        >
          <img :src="image" alt="track" class="w-100 h-100" loading="lazy">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.track {
  @include py(192px);
  max-width: 100vw;

  &-carousel {
    animation: slide-carousel 30s infinite;

    @include up-breakpoint(xxl) {
      animation: slide-carousel-xxl 60s infinite;
    }

    &__img {
      width: calc(20vw - 4px);
      height: calc(20vw - 4px);

      @include up-breakpoint(xxl) {
        width: calc(10vw - 4px);
        height: calc(10vw - 4px);
      }
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