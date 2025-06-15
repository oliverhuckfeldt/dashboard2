<script setup lang="ts">
interface Props {
  colSpan?: string;
}

const { colSpan = "" } = defineProps<Props>();
let _colSpan = parseInt(colSpan);
_colSpan = isNaN(_colSpan) || _colSpan < 1 || _colSpan > 12 ? 3 : _colSpan;
</script>

<template>
  <div :style="`grid-column: span ${_colSpan}`" class="bg-white">
    Lorem ipsum
  </div>
</template>
