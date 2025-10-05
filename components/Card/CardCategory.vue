<template>
  <nuxt-link
    :to="`/category/${props.data?.id}`"
    class="flex items-end justify-end p-2 rounded-md bg-primaryaccent hover:bg-primary transition-all overflow-hidden h-[56px] cursor-pointer"
  >
    <span class="text-white text-right text-sm font-medium">{{ props.data?.name }}</span>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => null
  }
});
</script>
