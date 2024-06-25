<script setup>
import myHeader from "./components/Header.vue";
import { ref } from "vue";

const currentTheme = ref("light");

function toggleTheme() {
  currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
}
</script>

<template>
  <main :data-theme="currentTheme">
    <div class="max-w-custom mx-auto h-screen">
      <myHeader :onToggleTheme="toggleTheme" :vestadoico="currentTheme" />
      <RouterView />
    </div>
  </main>
</template>

<style>
/* html,
body {
  background-color: #ededed;
} */
</style>
