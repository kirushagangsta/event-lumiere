<template>
  <section class="eventlumiere w-100 d-flex justify-content-center align-items-center">
    <div class="width-wrapper d-flex justify-content-between align-items-center">
      <div class="eventlumiere-content">
        <div class="title-16-400 fw-600 ls-4 font-cormorant">СИМВОЛ НЕПРИНУЖДЕННОЙ ЭЛЕГАНТНОСТИ</div>
        <h2 class="title-2 ls-4 mt-16 font-cormorant">EVENT LUMIERE -
          СООБЩЕСТВО ЦЕНИТЕЛЕЙ</h2>
        <div class="title-16-400 mt-24">Откройте для себя искусство элегантности и утонченности с нашей коллекцией
          нишевой парфюмерии.
          Присоединяйтесь к сообществу тех, кто ценит изысканность и наслаждайтесь высочайшим качеством
          продуктов,
          которые символизируют непринужденную элегантность.</div>
        <div class="title-16-400 mt-16">В каждом аромате есть гармония и стиль, которые привнесут особый шарм в
          Вашу жизнь. Вы - свет события.</div>
        <div
          class="eventlumiere-content__button w-fit title-14-700 text-uppercase ls-4 cursor-pointer font-cormorant color-white">
          смотреть все</div>
      </div>
      <img src="@/assets/images/human.webp" alt="human" class="eventlumiere__img">
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.eventlumiere {
  height: 799px;
  background-color: #F8F8F3;

  &-content {
    width: 621px;

    &__button {
      margin-top: 40px;
      background-color: $black-color;
      padding: 15px 48px;
    }
  }

  &__img {
    width: 632px;
    height: 799px;
  }
}
</style>