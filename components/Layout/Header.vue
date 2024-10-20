<script setup lang="ts">

</script>

<template>
  <header class="width-wrapper header">
    <div class="header__separator w-100" />
    <div class="d-flex justify-content-between align-items-center mt-16 w-100">
      <nuxt-link to="/">
        <img class="header__logo" src="@/assets/svg/logo.svg" alt="logo">
      </nuxt-link>
      <div class="header-menu d-flex gap-48 color-white text-uppercase title-14-700 ls-4">
        <nuxt-link to="/">Парфюмерия</nuxt-link>
        <nuxt-link to="/">О НАС</nuxt-link>
        <nuxt-link to="/">FAQ</nuxt-link>
        <nuxt-link to="/">Контакты</nuxt-link>
      </div>
      <i class="icon icon-basket"></i>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  margin-top: 32px;
  z-index: 2;

  &__separator {
    background: rgba(255, 255, 255, 0.1);
    height: 1px;
  }

  &__logo {
    height: 44px;
    width: 146px;
  }

  &-menu {
    a {
      color: $white-color;
    }
  }
}
</style>
