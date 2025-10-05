<template>
  <div class="group flex flex-col justify-center gap-1">
    <div class="aspect-[80/100] min-w-[80px] overflow-hidden">
      <NuxtImg
        :src="props.data?.image || 'https://placehold.co/1080x1920'"
        :alt="props.data?.name || 'Cast Name'"
        width="80"
        height="100"
        class="w-full h-full object-cover group-hover:scale-110 transition-all"
        loading="lazy"
      />
    </div>

    <span class="text-xs text-center">{{ props.data?.name }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => null
  }
});
</script>
