<script setup lang="ts">
interface Props {
  title: string;
}

const { title } = defineProps<Props>();
</script>

<template>
  <header class="flex justify-between">
    <h2>{{ title }}</h2>
    <a href="#"><i class="fa-solid fa-circle-user"></i></a>
  </header>
</template>
