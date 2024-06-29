<script setup>
const props = defineProps({
  venlace: {
    type: String,
    required: true,
  },
  vnombre: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <RouterLink :to="props.venlace" class="block">
    <button class="btn btn-md btn-ghost text-lg font-light py-0 rounded-md">
      {{ vnombre }}
    </button>
  </RouterLink>
</template>
<style lang="scss" scoped></style>
