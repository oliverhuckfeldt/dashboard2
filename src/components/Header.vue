<script setup lang="ts">
interface Props {
  title: string;
}

const { title } = defineProps<Props>();
</script>

<template>
  <header class="flex justify-between">
    <h2 class="text-2xl font-medium">{{ title }}</h2>
    <a href="#">
      <img width="46" src="/img/portrait.jpg" class="inline rounded-full" />
      <i class="ml-2 fa-solid text-xs fa-angle-down"></i>
    </a>
  </header>
</template>
