<script setup lang="ts">
interface Props {
  title: string;
}

const { title } = defineProps<Props>();
</script>

<template>
  <header>
    <h2>{{ title }}</h2>
  </header>
</template>
