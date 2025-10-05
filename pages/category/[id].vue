<template>
  <main class="site-main container">
    <section class="flex items-center justify-between mb-6">
      <button class="text-white text-[32px]" @click.prevent="router.back()">
        <NuxtIcon name="arrow-left" />
      </button>
      <SectionTitle :title="categoryData?.name" :is-right-align="true" class="section-title" />
    </section>

    <ul v-if="movieData.length" class="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-6 gap-y-4">
      <li v-for="item in movieData" :key="item.id">
        <CardMovie :data="item" />
      </li>
    </ul>

    <section v-if="pageNumber < totalPages" class="flex justify-center mt-6">
      <button
        class="flex items-center justify-center min-w-28 px-6 py-2 rounded-md bg-primaryaccent text-white text-xs font-medium"
        @click.prevent="getMovies"
      >
        <span v-if="isLoadingMovie" class="spinner"></span>
        <span v-else>Load More</span>
      </button>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const categoryId = ref(Number(route.params.id));

const { data: category } = await useFetch('/api/tmdb/genre/movie/list', {
  default: () => [],
  transform: (res) => res.genres
});

const categoryData = computed(() => category.value?.find((item) => item.id === categoryId.value) || null);

const movieData = ref([]);
const pageNumber = ref(1);
const totalPages = ref(1);
const isLoadingMovie = ref(true);

const getMovies = async () => {
  isLoadingMovie.value = true;

  try {
    const res = await $fetch('/api/tmdb/discover/movie', {
      query: {
        with_genres: categoryId.value,
        page: pageNumber.value
      }
    });

    const movies = res.results.map((item) => ({
      id: item.id,
      title: item.title,
      releaseDate: item.release_date,
      voteAverage: item.vote_average,
      image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
    }));

    movieData.value = [...movieData.value, ...movies];
    totalPages.value = res.total_pages;
  } catch (error) {
    console.error(error);
  } finally {
    isLoadingMovie.value = false;
  }
};

watch(
  categoryData,
  (val) => {
    if (val) getMovies();
  },
  { immediate: true }
);
</script>

<style scoped>
:deep(.section-title) {
  h1 {
    @apply text-2xl;
  }
}
</style>
