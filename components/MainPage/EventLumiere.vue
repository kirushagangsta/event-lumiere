<template>
  <div class="eventlumiere w-100 d-flex justify-content-center align-items-center">
    <div class="eventlumiere-content d-flex justify-content-center align-items-center">
      <div class=" ">
        <div class="title-16-600 ls-4">СИМВОЛ НЕПРИНУЖДЕННОЙ ЭЛЕГАНТНОСТИ</div>
        <div class="title-40-700 ls-4">EVENT LUMIERE - <br>
          СООБЩЕСТВО ЦЕНИТЕЛЕЙ</div>
        <div class="title-16-400 mt-24">Откройте для себя искусство элегантности и утонченности <br> с нашей коллекцией нишевой парфюмерии.
          Присоединяйтесь к сообществу тех, <br> кто ценит изысканность и наслаждайтесь высочайшим качеством <br> продуктов,
          которые символизируют непринужденную элегантность.</div>
          <div class="title-16-400 mt-16">В каждом аромате есть гармония и стиль, которые привнесут особый шарм <br> в Вашу жизнь. Вы - свет события.</div>
          <div class="eventlumiere-content__button w-fit title-14-700 text-uppercase ls-4">смотреть все</div>
      </div>
      <img src="@/assets/images/human.webp" alt="human" class="eventlumiere__img">
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.eventlumiere {
  height: 799px;
  background-color: #F8F8F3;

  &-content {
    width: 1440px;

    &__button {
      margin-top: 40px;
      background-color: $black-color;
      color: $white-color;
      padding: 15px 48px;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    &__button:hover {
      background-color: $white-color; 
    color: $black-color;
    border: 1px;
    border-color: black;
}
    }
  }


</style>