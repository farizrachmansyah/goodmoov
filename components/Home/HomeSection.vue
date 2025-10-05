<template>
  <section>
    <SectionTitle :title="props.title" class="mb-2" />

    <section class="overflow-x-auto scrollbar-hide">
      <ul class="flex gap-2 w-full">
        <li v-for="item in props.data" :key="item.id" class="max-w-[160px]">
          <CardMovie :data="item" />
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  data: {
    type: Array,
    default: () => []
  },
  isLoading: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.section-title::before {
  content: '';
  @apply absolute top-0 left-0 w-full max-w-10 h-[2px] bg-primary;
}
</style>
