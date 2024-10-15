<template>
  <section class="values width-wrapper d-flex justify-content-between">
    <LazyMainPageValuesBlock
      v-for="value in values"
      :key="value.title"
      :title="value.title"
      :text="value.text"/>

  </section>
</template>

<script setup lang="ts">
const values = [
  {
    title: "СПЛОЧЕННОСТЬ",
    text: "Добро пожаловать в сообщество ценителей высшего класса. Мы\xa0сплочены общими интересами. Эксклюзивные парфюмы объединяют людей, разделяющих страсть к\xa0элегантности и\xa0совершенству. С нами Вы всегда будете частью этого."
  },
  {
    title: "АУТЕНТИЧНОСТЬ",
    text: "Мы предлагаем только подлинные ароматы.  Все остальное не представляет интереса ни для нас, ни для Вас."
  },
  {
    title: "ДАНЬ УВАЖЕНИЯ РОСКОШИ",
    text: "Погрузитесь в мир изысканных ароматов и\xa0бескомпромиссной элегантности. Роскошный образ жизни не существует отдельно от\xa0нишевой парфюмерии."
  }
]
</script>

<style scoped lang="scss">
.values {
  @include py(192px);

}
</style>
