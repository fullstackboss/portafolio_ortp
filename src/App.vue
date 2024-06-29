<script setup>
import { RouterView } from "vue-router";
import MyHeader from "./components/ui/Header.vue";
import MyFooter from "./components/ui/Footer.vue";
import { ref, watchEffect } from "vue";
//activa el modo oscuro
const currentTheme = ref("light");
function toggleTheme() {
  currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
}
// Actualiza la clase del documento según el tema actual
watchEffect(() => {
  document.documentElement.classList.toggle(
    "dark",
    currentTheme.value === "dark"
  );
});
</script>

<template>
  <div :data-theme="currentTheme">
    <div class="max-w-custom mx-auto h-screen">
      <MyHeader :vEventMode="toggleTheme" />
      <RouterView />
      <MyFooter />
    </div>
  </div>
</template>
