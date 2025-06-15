<script setup lang="ts">
import Link from "components/sidebar/Link.vue";

const navLinks = [
  { to: "/", name: "Dashboard" },
  { to: "/foo", name: "Foo" },
  { to: "/bar", name: "Bar" },
];
</script>

<template>
  <div class="fixed top-8 left-8 bottom-8 w-72 bg-[darksalmon] rounded-lg">
    <h1 class="text-2xl font-bold px-6 py-4">Template 2</h1>
    <ul class="pt-5">
      <Link
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :name="link.name"
      />
    </ul>
  </div>
</template>
