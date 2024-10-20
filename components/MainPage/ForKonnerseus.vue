<template>
  <div class="konnerseus w-100 d-flex justify-content-center position-relative font-cormorant">
    <div
      v-for="slide in slides"
      :key="slide.text"
      class="position-relative konnerseus__slide w-100 h-100"
      :style="{ transform: `translateX(${-activeControl * 100 + 200}%)` }"
    >
      <img :src="slide.image" alt="konnoseurs" class="w-100 h-100 position-absolute konnerseus__img"
           loading="lazy">
      <div class="konnerseus__radial width-wrapper h-100 position-absolute"></div>
      <div class="konnerseus__slide-text position-relative text-uppercase text-center h-100 d-flex flex-column justify-content-center">
        <div class="color-white title-2 ls-4">
          {{slide.text}}
        </div>
        <a href="https://t.me/eventlumiere" target="_blank" class="d-flex justify-content-center title-14-700 mt-48">
          <div class="konnerseus__button color-black w-fit title-14-700 ls-4">
            смотреть в Telegram
          </div>
        </a>
      </div>
    </div>
    <div class="konnerseus-controls position-absolute d-flex align-items-center">
      <div
        v-for="i in 3"
        :key="i"
        class="konnerseus-controls__circle cursor-pointer"
        :class="activeControl === i ? `active`:``"
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
    interval = setInterval(slide, 7000);
  }
}

onMounted(() => {
  slide();
  interval = setInterval(slide, 7000);
})

onUnmounted(() => {
  if (interval)
  clearInterval(interval);
});
</script>

<style lang="scss" scoped>
.konnerseus {
  height: 550px;

  &__radial {
    background: radial-gradient(70.71% 70.71% at 50% 50%, rgba(0, 0, 0, 0.5) 8%, rgba(0, 0, 0, 0) 70.5%);
    z-index: 2;
    left: calc(50% - 670px);
  }

  &__img {
    top: 0;
    left: 0;
    object-fit: cover;
  }

  &__button {
    padding: 15px 48px;
    background-color: $white-color;
  }

  &__slide {
    flex-shrink: 0;
    transition: all 2s;

    &-text {
      z-index: 3;
    }
  }

  &-controls {
    bottom: 21px;
    gap: 10px;
    z-index: 4;

    &__circle {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: rgba($color: $white-color, $alpha: 0.6);
    }

    &__circle.active {
      width: 9px;
      height: 9px;
      background-color: $white-color;
    }
  }
}
</style>