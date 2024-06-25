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
      class="container-fluid xl:container lg:container-fluid md:container-fluid sm:container-fluid mx-auto lg-80 bg-blue-900 flex-col sm:flex md:flex md:h-80 sm:h-60 lg:h-80 lg:flex-row"
    >
      <div
        class="w-4/4 flex flex-col-reverse justify-end bg-green-200 sm:w-full sm:flex-col-reverse md:w-full md:flex-col-reverse lg:w-3/4 lg:flex-col"
      >
        <div class="">
          <div
            class="hidden xl:block lg:block md:hidden sm:hidden w-1/1 bg-pink-200 py-2"
          >
            Subtitulo
          </div>
          <div
            class="hidden lg:block md:hidden sm:hidden w-1/1 bg-pink-400 py-12"
          >
            <div class="text-5xl font-bold">LOREM IPSUM</div>
          </div>
          <div class="border border-black bg-black"><hr /></div>
        </div>

        <div
          class="w-full text-center bg-pink-600 py-0 flex lg:flex-col md:flex sm:flex"
        >
          <div class="w-16 lg:w-full md:w-1/8 sm:w-16 bg-green-500 py-4">
            <ul class="hidden gap-10 lg:flex">
              <li>Inicio</li>
              <li>Acerca de</li>
              <li>Trabajos</li>
              <li>Contacto</li>
            </ul>
            <!-- Botón Hamburger para pantallas móviles -->
            <button
              @click="toggleMenu"
              class="rounded p-2 hover:bg-gray-200 lg:hidden"
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
            <div v-if="isMenuOpen" class="bg-white shadow-md lg:hidden">
              <ul class="flex flex-col gap-4 p-4">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-200"
                    >opcion 1</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-200"
                    >opcion 2</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-200"
                    >opcion 3</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-200"
                    >opcion 4</a
                  >
                </li>
              </ul>
            </div>
            <!-- Menu fin -->
          </div>
          <div class="block lg:hidden md:block sm:block w-full bg-yellow-600">
            <div class="text-2xl font-bold flex justify-end px-4">
              LOREM IPSUM MV
            </div>
          </div>
        </div>
      </div>

      <!-- Foto -->
      <div
        class="w-full lg:w-1/4 md:w-full sm:w-full flex h-60 flex-row justify-around bg-black sm:h-80 md:h-80 lg:h-80 gap-6 px-5 pt-0"
      >
        <div
          class="flex flex-col justify-center items-center h-full bg-orange-500 w-full lg:w-full md:w-1/3 sm:w-1/3"
        >
          sss
        </div>
        <div
          class="w-full lg:w-full md:w-2/3 sm:w-2/3 block lg:hidden md:block sm:block flex-col content-center bg-green-300"
        >
          Mi subtitulo
        </div>
      </div>
      <!-- Fin Foto -->
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
