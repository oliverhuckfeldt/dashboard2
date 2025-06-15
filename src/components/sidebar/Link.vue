<script setup lang="ts">
import { RouterLink } from "vue-router";

interface LinkProps {
  to: string;
  name?: string;
}

const { to, name } = defineProps<LinkProps>();
</script>

<template>
  <li>
    <RouterLink :to="to" class="block hover:bg-amber-600 px-6 py-2">
      {{ name }}
    </RouterLink>
  </li>
</template>
