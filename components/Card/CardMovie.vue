<template>
  <nuxt-link
    to="/category/detail"
    class="group flex flex-col gap-1 cursor-pointer"
    title="This movie has a title in here"
  >
    <div class="relative aspect-[160/220] overflow-hidden">
      <NuxtImg
        src="https://placehold.co/1080x1920"
        alt="goodmoov"
        width="160"
        height="220"
        class="w-full h-full object-cover group-hover:scale-110 transition-all"
        loading="lazy"
      />

      <div class="absolute bottom-0 right-0 px-2 py-1 bg-[#00000080]">
        <span class="text-white text-xs">7.8</span>
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <h2 class="text-sm text-white truncate">This movie has a title in here</h2>
      <h3 class="text-sm text-white">2024</h3>
    </div>
  </nuxt-link>
</template>
