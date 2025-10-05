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
      <SwiperSlide v-for="item in 10" :key="item" class="swiper-slide">
        <nuxt-link to="" class="cursor-pointer">
          <NuxtImg
            loading="lazy"
            src="https://placehold.co/1920x1080"
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
