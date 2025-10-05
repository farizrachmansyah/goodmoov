<template>
  <main class="site-main">
    <HomeBanner class="mb-6" />

    <section class="container pe-0">
      <HomeCategories class="mb-6" />
      <HomeSection title="Popular" :data="popular" :is-loading="popularStatus === 'pending'" class="mb-6" />
      <HomeSection title="Latest" :data="latest" :is-loading="latestStatus === 'pending'" class="mb-6" />
    </section>
  </main>
</template>

<script setup>
const { data: popular, status: popularStatus } = await useFetch('/api/tmdb/movie/popular', {
  query: { page: 1 },
  default: () => [],
  transform: (res) =>
    res.results.map((item) => ({
      id: item.id,
      title: item.title,
      releaseDate: item.release_date,
      voteAverage: item.vote_average,
      image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
    }))
});

const { data: latest, status: latestStatus } = await useFetch('/api/tmdb/movie/now_playing', {
  query: { page: 1 },
  default: () => [],
  transform: (res) =>
    res.results.map((item) => ({
      id: item.id,
      title: item.title,
      releaseDate: item.release_date,
      voteAverage: item.vote_average,
      image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
    }))
});
</script>

<style scoped></style>
