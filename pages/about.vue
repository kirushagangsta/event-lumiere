<script setup lang="ts">
interface IAboutItems {
  subheader?: string,
  header: string,
  textParagraphs: string[],
  btnText: string,
  btnAction: string,
}

const aboutItems: IAboutItems[] = [
  {
    subheader: "О нас",
    header: "Event Lumiere\xa0— это\xa0сообщество людей, которые ценят настоящее качество и\xa0стремятся к\xa0лучшему",
    textParagraphs: [
      'Мы\xa0рассказываем о\xa0различных аспектах элегантного образа жизни, включая стиль, сигары, алкоголь, манеры, уникальные локации и\xa0многое другое.',
      'Здесь не\xa0важен статус или\xa0опыт\xa0— с\xa0нами может быть каждый, кто\xa0намерен узнать для\xa0себя больше про\xa0жизнь высшего сорта и\xa0разделяет нашу страсть к\xa0изысканности.'
    ],
    btnText: "сообщество в telegram",
    btnAction: "https://t.me/eventlumiere",
  },
  {
    header: "ПАРФЮМЕРНАЯ ТРАДИЦИЯ",
    textParagraphs: [
      'Нишевая парфюмерия\xa0— это\xa0одно из\xa0направлений нашего сообщества, которому мы\xa0уделяем особое внимание, поскольку она\xa0является частью семейной культуры уже\xa0более 15\xa0лет.',
      'Идея о\xa0создании круга ценителей появилась относительно недавно, однако ранее существовавший в\xa0Севастополе до\xa02012\xa0года магазин парфюмерии «Event» был\xa0весьма узнаваем и\xa0даже спонсировал мероприятия и\xa0показы\xa0мод.',
      'Наша традиция\xa0по\xa0сей\xa0день вдохновляет нас\xa0на\xa0ношение парфюмов и\xa0изучение актуальных ароматов, позволяя сохранять связь с\xa0прошлым, одновременно стремясь к\xa0чему‑то новому.'
    ],
    btnText: "блог в instagram",
    btnAction: "https://www.instagram.com/event.lumiere/",
  },
  {
    header: "ТЕСТИРУЙТЕ АРОМАТЫ",
    textParagraphs: [
      'У\xa0нас\xa0вы можете приобрести на\xa0распив некоторые парфюмы, чтобы\xa0без\xa0лишних затрат попробовать ароматы, которые смогут разнообразить ваш\xa0стиль и\xa0подчеркнуть вашу индивидуальность.',
    ],
    btnText: "перейти к покупкам",
    btnAction: "/about",
  },
]
</script>

<template>
  <div class="width-wrapper max-xl:px-5 max-xl:mt-2 max-xl:flex max-xl:flex-col max-xl:gap-[120px]">
    <LazyBlocksAboutItem
      v-for="(item, index) in aboutItems"
      :key="item.header"
      :subheader="item.subheader"
      :header="item.header"
      :text-paragraphs="item.textParagraphs"
      :btn-text="item.btnText"
      :btn-action="item.btnAction"
      :reversed="index % 2 === 1"
      :first-item="index === 0"
    />
  </div>
</template>

<style scoped lang="scss">

</style>