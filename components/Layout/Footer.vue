<script setup lang="ts">

</script>

<template>
  <footer class="w-100 bg-secondary footer">
    <div class="width-wrapper d-flex flex-column align-items-center pt-16 pb-48">
      <img
        class="footer__img"
        src="@/assets/images/horse.webp"
        alt="horse"
      >
      <div class="footer__separator w-100 mt-8"/>
      <div class="title-24-600 mt-48">
        УЗНАТЬ БОЛЬШЕ
      </div>
      <div class="d-flex font-serif gap-40 title-16-400 mt-32">
        <nuxt-link to="/">Парфюмерия</nuxt-link>
        <nuxt-link to="/">О нас</nuxt-link>
        <nuxt-link to="/">Faq</nuxt-link>
        <nuxt-link to="/">Контакты</nuxt-link>
      </div>
      <div class="title-14-700 fw-400 lh-150 mt-48">
        ® 2024 Event Lumiere
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  &__img {
    height: 96px;
    width: 96px;
  }

  &__separator {
    background: rgba(0, 0, 0, 0.1);
    height: 1px;
  }
  a {
    color: $black-color;
  }
}
</style>
