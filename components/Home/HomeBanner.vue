<template>
  <section>
    <ClientOnly>
      <swiper-container
        id="swiper-container-banner"
        :slides-per-view="1.3"
        :space-between="16"
        :centered-slides="true"
        :loop="true"
        :loopAdditionalSlides="0"
        :pagination="{
          clickable: true
        }"
        class="swiper-container"
      >
        <swiper-slide v-for="item in 10" :key="item" class="swiper-slide">
          <nuxt-link to="" class="flex-1">
            <NuxtImg
              loading="lazy"
              src="https://placehold.co/1920x1080"
              alt="Placeholder"
              class="aspect-[256/120] h-full w-full object-cover rounded-lg"
            />
          </nuxt-link>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </section>
</template>
