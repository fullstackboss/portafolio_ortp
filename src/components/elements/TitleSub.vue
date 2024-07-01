<script setup>
const props = defineProps({
  vtitle: {
    type: String,
  },
  subtitle: {
    type: String,
  },
});
</script>
<template>
  <div class="mx-auto w-full text-start">
    <h2 class="text-3xl font-bold sm:text-4xl">
      {{ vtitle }}
    </h2>

    <p class="mt-2 text-secondary sm:text-xl">
      {{ subtitle }}
    </p>
  </div>
</template>
