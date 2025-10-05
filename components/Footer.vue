<template>
  <footer class="bg-dark p-6">
    <section class="flex justify-end mb-11">
      <NuxtLink class="flex w-fit" to="/">
        <NuxtImg src="/assets/img/logo.png" alt="goodmoov" width="89" height="24" />
      </NuxtLink>
    </section>
    <section class="flex items-end justify-between">
      <p class="text-white text-xs">&copy; 2025 goodmoov<br />All right reserved</p>
      <ul class="flex flex-col gap-1 items-end">
        <li class="text-xs text-white">
          <NuxtLink to="/">Privacy Policy</NuxtLink>
        </li>
        <li class="text-xs text-white">
          <NuxtLink to="/">Legal Information</NuxtLink>
        </li>
        <li class="text-xs text-white">
          <NuxtLink to="/">About</NuxtLink>
        </li>
      </ul>
    </section>
  </footer>
</template>
