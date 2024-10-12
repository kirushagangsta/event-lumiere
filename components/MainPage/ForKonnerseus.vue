<template>
  <div class="konnerseus w-100 d-flex justify-content-center align-items-center position-relative">
    <img src="@/assets/images/konnoseurs-bg.webp" alt="konnoseurs" class="w-100 h-100 position-absolute konnerseus__img"
      loading="lazy">
    <div class="position-relative text-uppercase">
      <div class="color-white title-2 ls-4">
        для конносеров

      </div>
      <a href="" class="d-flex justify-content-center title-14-700 mt-48">
        <div class="konnerseus__button color-black w-fit title-14-700 ls-4">
          смотреть в Telegram
        </div>
      </a>
    </div>
    <div class="konnerseus-controls position-absolute d-flex align-items-center">
      <div 
        v-for="i in 3" 
        :key="i" 
        class="konnerseus-controls__circle cursor-pointer" 
        :class="activeControl === i ? `active`:``"
        @click="activeControl = i" 
      >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const activeControl =ref(1);
</script>

<style lang="scss" scoped>
.konnerseus {
  height: 550px;

  &__img {
    top: 0;
    left: 0;
    object-fit: cover;
  }

  &__button {
    padding: 15px 48px;
    background-color: $white-color;
  }

  &-controls {
    bottom: 21px;
    gap: 10px;

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