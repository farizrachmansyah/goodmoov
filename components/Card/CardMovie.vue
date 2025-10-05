<template>
  <nuxt-link
    :to="`/movie/${props.data?.id}`"
    class="group flex flex-col gap-1 cursor-pointer"
    :title="props.data?.title || 'Movie Title'"
  >
    <div class="relative aspect-[160/220] min-w-[160px] overflow-hidden">
      <NuxtImg
        :src="props.data?.image || 'https://placehold.co/1080x1920'"
        :alt="props.data?.title || 'Movie Title'"
        width="160"
        height="220"
        class="w-full h-full object-cover group-hover:scale-110 transition-all"
        loading="lazy"
      />

      <div class="absolute bottom-0 right-0 px-2 py-1 bg-[#00000080]">
        <span class="text-white text-xs">{{ props.data?.voteAverage?.toFixed(1) }}</span>
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <h2 class="text-sm text-white truncate">{{ props.data?.title }}</h2>
      <h3 class="text-sm text-white">{{ releaseDate }}</h3>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => null
  }
});

const releaseDate = useDateFormat(props.data?.releaseDate, 'YYYY');
</script>
