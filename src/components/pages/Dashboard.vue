<script setup>
import Header from "components/Header.vue";
import Card from "components/ui/Card.vue";
</script>

<template>
  <Header title="Dashboard" />
  <div class="grid gap-4 grid-cols-12">
    <Card col-span="1" />
    <Card col-span="2" />
    <Card col-span="3" />
    <Card col-span="4" />
  </div>
</template>
