<template>
  <main class="site-main container">
    <section class="flex items-center justify-between mb-6">
      <NuxtLink to="/" class="text-white text-[32px]">
        <NuxtIcon name="arrow-left" />
      </NuxtLink>
      <SectionTitle :title="pageTitle" :is-right-align="true" class="section-title" />
    </section>

    <ul class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-6 gap-y-4">
      <li v-for="item in 10" :key="item">
        <CardMovie />
      </li>
    </ul>

    <section class="flex justify-center mt-6">
      <button
        class="flex items-center justify-center px-6 py-2 rounded-md bg-primaryaccent text-white text-xs font-medium"
      >
        Load More
      </button>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
const pageTitle = ref(route.params.category);
</script>

<style scoped>
:deep(.section-title) {
  h1 {
    @apply text-2xl;
  }
}
</style>
