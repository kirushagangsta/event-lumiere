<template>
  <section class="py-[192px] width-wrapper flex justify-between xl:gap-10 max-xl:flex-col max-xl:px-5 max-xl:py-20 max-xl:gap-12">
    <LazyMainPageValuesBlock
      v-for="value in values"
      :key="value.title"
      :title="value.title"
      :text="value.text"
    />
  </section>
</template>

<script setup lang="ts">
const values = [
  {
    title: "СПЛОЧЕННОСТЬ",
    text: "Добро пожаловать в сообщество ценителей высшего класса. Мы сплочены общими интересами. Изысканность, эстетика и страсть к уникальным моментам - то, что говорит за нас."
  },
  {
    title: "АУТЕНТИЧНОСТЬ",
    text: "Мы\xa0предлагаем только подлинную продукцию и не видим смысла в ношении реплик. Это не представляет интереса ни\xa0для\xa0нас, ни\xa0для\xa0Вас."
  },
  {
    title: "ДАНЬ УВАЖЕНИЯ РОСКОШИ",
    text: "У роскошного образа жизни очень много составляющих. Нишевая парфюмерия является одним из ключевых аспектов, которому здесь уделено особое внимание."
  }
]
</script>
