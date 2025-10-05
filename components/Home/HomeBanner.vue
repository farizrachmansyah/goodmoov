<template>
  <section>
    <Swiper
      id="swiper-container-banner"
      :modules="[Pagination]"
      :slides-per-view="1.6"
      :centered-slides="true"
      :loop="true"
      :speed="500"
      :pagination="{
        clickable: true
      }"
      class="swiper-container"
    >
      <SwiperSlide v-for="item in topRated" :key="item.id" class="swiper-slide">
        <nuxt-link :to="`/movie/${item.id}`" class="cursor-pointer" :title="item.title">
          <NuxtImg
            loading="lazy"
            :src="item.image"
            alt="Placeholder"
            class="aspect-[256/120] h-full w-full object-cover rounded-lg"
          />
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

const { data: topRated, status: topRatedStatus } = await useFetch('/api/tmdb/movie/top_rated', {
  default: () => [],
  transform: (res) =>
    res.results.map((item) => ({
      id: item.id,
      title: item.title,
      image: `https://image.tmdb.org/t/p/original${item.backdrop_path}`
    }))
});
</script>

<style scoped>
:deep(.swiper) {
  padding-bottom: calc(14px + 8px);
}

:deep(.swiper-slide) {
  img {
    transform: scale(0.9);
    transition: all 0.5s ease;
  }

  &.swiper-slide-active img {
    transform: scale(1);
  }
}

:deep(.swiper-pagination) {
  @apply flex justify-center bottom-0;

  .swiper-pagination-bullet {
    @apply bg-[#D9D9D9] opacity-100 transition-all;
  }
  .swiper-pagination-bullet-active {
    @apply w-4 rounded-lg bg-primary;
  }
}
</style>
