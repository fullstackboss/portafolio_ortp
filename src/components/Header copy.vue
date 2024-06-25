<script setup>
import "boxicons";
import { defineProps } from "vue";

const props = defineProps({
  onToggleTheme: Function,
  vestadoico: "String",
});
</script>

<template>
  <div class="container-fluid bg-gray-400">
    <div
      class="container-fluid xl:container lg:container-fluid md:container-fluid sm:container-fluid mx-auto h-80 flex-row bg-blue-900 sm:flex sm:h-44 md:flex md:h-80 lg:h-80 lg:flex-row"
    >
      <div
        class="w-4/4 flex flex-col-reverse justify-end bg-green-200 sm:w-3/4 sm:flex-col-reverse md:w-2/3 md:flex-col lg:w-3/4 lg:flex-col"
      >
        <div class="">
          <div class="w-1/1 bg-pink-200 py-2">lorem</div>
          <div
            class="hidden lg:block md:block sm:hidden w-1/1 bg-pink-400 py-12"
          >
            <div class="text-5xl font-bold">LOREM IPSUM</div>
          </div>
          <div class="border border-black bg-black"></div>
        </div>

        <div
          class="w-1/1 text-center bg-pink-600 py-0 flex lg:flex-col md:flex sm:flex"
        >
          <div class="w-16 lg:w-full md:w-full sm:w-16 bg-green-500">
            <ul class="hidden gap-10 md:flex">
              <li>Inicio</li>
              <li>Acerca de</li>
              <li>Trabajos</li>
              <li>Contacto</li>
            </ul>
            <!-- Botón Hamburger para pantallas móviles -->
            <button
              @click="toggleMenu"
              class="rounded p-2 hover:bg-gray-200 md:hidden"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <!-- Botón Hamburger Fin -->
            <!-- Menu desplegable para pantallas móviles -->
            <!--<div v-if="isMenuOpen" class="bg-white shadow-md lg:hidden">
            <ul class="flex flex-col gap-4 p-4">
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">opcion 1</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">opcion 2</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">opcion 3</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-200">opcion 4</a></li>
            </ul>
          </div>-->
            <!-- Menu fin -->
          </div>
          <div class="block lg:hidden md:hidden sm:block w-3/4">
            <div class="text-2xl font-bold">LOREM IPSUM</div>
          </div>
        </div>
      </div>
      <div
        class="w-4/4 flex h-80 flex-col justify-end bg-blue-400 p-2 pt-0 sm:h-44 sm:w-1/4 md:h-80 md:w-1/3 lg:h-80 lg:w-1/4"
      >
        <div
          class="mx-auto flex h-full flex-col bg-orange-500 xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-full w-full"
        >
          sss
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.fontlogo > {
  font-family: "Comfortaa", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
</style>
