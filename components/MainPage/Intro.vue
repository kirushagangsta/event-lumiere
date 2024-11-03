<template>
  <div class="intro w-full h-[971px] flex justify-center max-xl:px-5 max-xl:h-[calc(100vh-67px)] max-xl:items-center">
    <img src="@/assets/images/intro.webp" alt="intro" class="h-[1117px] absolute w-full top-0 left-0 object-cover max-xl:h-screen ">
    <div class="intro-content mt-[103px] py-[192px] relative text-center text-white font-cormorant uppercase width-wrapper h-fit max-xl:mt-0 max-xl:py-0">
      <h1 class="text-animation title-1 tracking-[4px] max-xl:!text-[40px]">
        Кто знает — тот знает
      </h1>
      <div class="text-animation title-30-600 mt-4 max-xl:!text-[20px] ">Сообщество ценителей</div>
      <div class="mx-auto mt-12 mb-0 bg-black py-[15px] px-12 w-fit tracking-[4px] cursor-pointer button-animation max-xl:w-full">Перейти к покупкам</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.intro-content {
  background: radial-gradient(70.71% 70.71% at 50% 50%, rgba(0, 0, 0, 0.41) 8%, rgba(0, 0, 0, 0) 70.4%);
}

.text-animation {
  animation: text-slide-in 1s forwards;
}

.button-animation {
  opacity: 0;
  animation: fade-in 1s 1s forwards;
}

</style>