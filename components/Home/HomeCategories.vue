<template>
  <section class="overflow-x-auto scrollbar-hide">
    <ul class="flex gap-2">
      <li v-for="item in category" :key="item.id" class="w-max min-w-[120px]">
        <CardCategory :data="item" />
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data: category, status: categoryStatus } = await useFetch('/api/tmdb/genre/movie/list', {
  default: () => [],
  transform: (res) => res.genres
});
</script>
