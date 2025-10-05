<template>
  <main class="site-main container">
    <section class="flex items-center justify-between mb-6">
      <button class="text-white text-[32px]" @click.prevent="router.back()">
        <NuxtIcon name="arrow-left" />
      </button>
    </section>

    <section class="flex gap-4 mb-6">
      <div class="aspect-[160/224] max-w-[160px] overflow-hidden">
        <NuxtImg
          :src="movie?.image || 'https://placehold.co/1080x1920'"
          :alt="movie?.title || 'Movie Poster'"
          width="160"
          height="220"
          class="w-full h-full object-cover group-hover:scale-110 transition-all"
          loading="lazy"
        />
      </div>

      <div>
        <span class="block text-xs font-light">{{ movieYear }}</span>
        <h1 class="text-[20px] mb-2">{{ movie?.title }}</h1>
        <span class="block text-[10px] mb-1">{{ movieCategories }}</span>
        <span class="block text-[10px]">{{ movieDuration }}</span>
      </div>
    </section>

    <section class="mb-6">
      <SectionTitle title="Overview" class="mb-4" />
      <p>
        {{ movie?.overview }}
      </p>
    </section>

    <section class="mb-6">
      <SectionTitle title="Cast" class="mb-4" />
      <section class="overflow-x-auto scrollbar-hide">
        <ul v-if="movieCast.length" class="flex gap-2 w-full">
          <li v-for="item in movieCast" :key="item.id">
            <CardCast :data="item" />
          </li>
        </ul>
      </section>
    </section>

    <section class="mb-6">
      <SectionTitle title="Recommended" class="mb-4" />
      <section class="overflow-x-auto scrollbar-hide">
        <ul v-if="movieRecommendation.length" class="flex gap-2 w-full">
          <li v-for="item in movieRecommendation" :key="item.id" class="max-w-[160px]">
            <CardMovie :data="item" />
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const movieId = ref(Number(route.params.id));

const { data: movie } = await useFetch(`/api/tmdb/movie/${movieId.value}`, {
  default: () => null,
  transform: (res) => ({
    id: res.id,
    title: res.title,
    releaseDate: res.release_date,
    voteAverage: res.vote_average,
    categories: res.genres,
    runtime: res.runtime,
    overview: res.overview,
    image: `https://image.tmdb.org/t/p/w500${res.poster_path}`
  })
});

const useFormatRuntime = (minutes) => {
  if (!minutes || isNaN(minutes)) return '-';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

const movieYear = useDateFormat(movie.value?.releaseDate, 'YYYY') || null;
const movieCategories = computed(() => movie.value?.categories.map((item) => item.name)?.join(', ') || '');
const movieDuration = computed(() => useFormatRuntime(movie.value?.runtime) || '');

const movieCast = ref([]);

const getCast = async () => {
  try {
    const res = await $fetch(`/api/tmdb/movie/${movieId.value}/credits`);

    movieCast.value = res.cast.map((item) => ({
      id: item.cast_id,
      name: item.name,
      image: `https://image.tmdb.org/t/p/w500${item.profile_path}`
    }));
  } catch (error) {
    console.error(error);
  }
};

const movieRecommendation = ref([]);

const getRecommendation = async () => {
  try {
    const res = await $fetch(`/api/tmdb/movie/${movieId.value}/recommendations`);

    movieRecommendation.value = res.results.map((item) => ({
      id: item.id,
      title: item.title,
      releaseDate: item.release_date,
      voteAverage: item.vote_average,
      image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
    }));
  } catch (error) {
    console.error(error);
  }
};

watch(
  movie,
  (val) => {
    if (val) {
      getCast();
      getRecommendation();
    }
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
