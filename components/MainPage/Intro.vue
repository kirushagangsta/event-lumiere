<template>
  <div class="intro d-flex justify-content-center">
    <img src="@/assets/images/intro.webp" alt="intro" class="intro__img position-absolute w-100">
    <div class="intro-content position-relative text-center color-white font-cormorant text-uppercase width-wrapper">
      <h1 class="title-1 ls-4">
        Кто знает — тот знает
      </h1>
      <div class="title-30-600 mt-16">Сообщество ценителей</div>
      <div class="intro-content__button w-fit ls-4 cursor-pointer">Перейти к покупкам</div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.intro {
  width: 100%;
  height: 971px;

  &__img {
    height: 1117px;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  &-content {
    margin-top: 103px;
    @include py(192px);
    background: radial-gradient(70.71% 70.71% at 50% 50%, rgba(0, 0, 0, 0.41) 8%, rgba(0, 0, 0, 0) 70.4%);
    height: fit-content;

    &__button {
      padding: 15px 48px;
      background-color: $black-color;
      margin: 48px auto 0;
    }
  }
}
</style>