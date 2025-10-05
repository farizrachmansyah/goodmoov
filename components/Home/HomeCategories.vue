<template>
  <section class="overflow-x-auto scrollbar-hide">
    <ul class="flex gap-2 w-full">
      <li v-for="item in 10" :key="item" class="swiper-slide min-w-[120px]">
        <CardCategory />
      </li>
    </ul>
  </section>
</template>
