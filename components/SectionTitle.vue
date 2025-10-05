<template>
  <div
    :class="[
      'relative w-fit min-w-10 mb-2 pt-[2px] before:content-[\'\'] before:absolute before:top-0 before:w-full before:max-w-10 before:h-[2px] before:bg-primary',
      props.isRightAlign ? 'before:right-0' : 'before:left-0'
    ]"
  >
    <h1 :class="`font-semibold text-white text-${props.titleSize}`">{{ props.title }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  titleSize: {
    type: String,
    default: 'base'
  },
  isRightAlign: {
    type: Boolean,
    default: false
  }
});
</script>
