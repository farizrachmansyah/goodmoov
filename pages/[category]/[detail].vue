<template>
  <main class="site-main container">
    <section class="flex items-center justify-between mb-6">
      <NuxtLink to="/category" class="text-white text-[32px]">
        <NuxtIcon name="arrow-left" />
      </NuxtLink>
    </section>

    <section class="flex gap-4 mb-6">
      <div class="aspect-[160/224] max-w-[160px] overflow-hidden">
        <NuxtImg
          src="https://placehold.co/1080x1920"
          alt="goodmoov"
          width="160"
          height="220"
          class="w-full h-full object-cover group-hover:scale-110 transition-all"
          loading="lazy"
        />
      </div>

      <div>
        <span class="block text-xs font-light">2024</span>
        <h1 class="text-[20px] mb-2">This movie has a title in here</h1>
        <span class="block text-[10px] mb-1">Action, Science Fiction, Comedy, Family</span>
        <span class="block text-[10px]">1h 50m</span>
      </div>
    </section>

    <section class="mb-6">
      <SectionTitle title="Overview" class="mb-4" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </section>

    <section class="mb-6">
      <SectionTitle title="Cast" class="mb-4" />
      <section class="overflow-x-auto scrollbar-hide">
        <ul class="flex gap-2 w-full">
          <li v-for="item in 10" :key="item">
            <CardCast />
          </li>
        </ul>
      </section>
    </section>

    <section class="mb-6">
      <SectionTitle title="Recommended" class="mb-4" />
      <section class="overflow-x-auto scrollbar-hide">
        <ul class="flex gap-2 w-full">
          <li v-for="item in 10" :key="item" class="max-w-[160px]">
            <CardMovie />
          </li>
        </ul>
      </section>
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
