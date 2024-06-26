<script setup>
import "boxicons";
import { defineProps } from "vue";

const props = defineProps({
  onToggleTheme: Function,
  vestadoico: "String",
});
</script>

<template>
  <div class="grid grid-cols-12 gap-0 mb-5">
    <!-- menu movil -->
    <div
      class="col-span-12 block p-4 sm:block md:hidden lg:hidden border-b border-gray-300"
    >
      <div class="grid grid-cols-12 gap-1">
        <div class="col-span-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <div class="col-span-8 text-center text-2xl font-bold uppercase">
          Omar Tejada
        </div>
        <div
          class="col-span-2 flex items-center justify-end"
          @click="props.onToggleTheme"
        >
          <box-icon
            :name="vestadoico === 'dark' ? 'sun' : 'sun'"
            :color="vestadoico === 'dark' ? 'white' : 'black'"
            :type="vestadoico === 'dark' ? '' : ''"
            :size="'1.5rem'"
            class="p-1 cursor-pointer"
          ></box-icon>
        </div>
      </div>
    </div>
    <!-- fin menu movil -->

    <!-- Column izquierda -->
    <div
      class="col-span-12 h-full content-center sm:col-span-12 md:col-span-9 px-6"
    >
      <div class="hidden py-2 text-lg sm:hidden md:block lg:block">
        Diseñador UX/UI / Motion Designer
      </div>
      <div
        class="hidden text-7xl sm:hidden md:block lg:block py-2 pb-5 helvetica-bold"
      >
        Omar Tejada P.
      </div>
      <div class="hidden h-px bg-gray-500 sm:hidden md:block lg:block"></div>
      <div class="flex flex-row justify-between py-3">
        <div class="text-dark hidden sm:hidden md:block lg:block">
          <ul class="flex gap-4">
            <li class="relative">
              <RouterLink to="/">
                <span class="text-md">Inicio</span>
              </RouterLink>
            </li>
            <li class="flex self-center border-l border-gray-500 h-3"></li>
            <li class="relative">
              <RouterLink to="/acerca">
                <span class="text-md">Acerca</span>
              </RouterLink>
            </li>
            <li class="flex self-center border-l border-gray-500 h-3"></li>
            <li class="relative">
              <RouterLink to="/trabajos">
                <span class="text-md">Trabajos</span>
              </RouterLink>
            </li>
            <li class="flex self-center border-l border-gray-500 h-3"></li>
            <li class="relative">
              <RouterLink to="/contacto">
                <span class="text-md">Contacto</span>
              </RouterLink>
            </li>
          </ul>
        </div>
        <div
          class="hidden items-center sm:hidden md:block lg:block"
          @click="props.onToggleTheme"
        >
          <box-icon
            :name="vestadoico === 'dark' ? 'sun' : 'sun'"
            :color="vestadoico === 'dark' ? 'white' : 'black'"
            :type="vestadoico === 'dark' ? '' : ''"
            :size="'1.5rem'"
            class="p-1 cursor-pointer"
          ></box-icon>
        </div>
      </div>
    </div>

    <!-- Column derecha -->
    <div class="col-span-12 px-3 sm:col-span-12 sm:px-3 md:col-span-3 md:p-0">
      <div class="grid grid-cols-12">
        <div
          class="col-span-4 flex sm:col-span-4 md:col-span-12 lg:justify-center md:justify-center"
        >
          <div class="h-80 bg-neo-fondo-dark flex items-end p-4">
            <img
              class="w-60 h-60 object-cover"
              src="https://shorturl.at/Fokd1"
              alt=""
            />
          </div>
        </div>
        <div
          class="col-span-8 block h-full content-center p-5 sm:block md:hidden lg:hidden"
        >
          <div class="text-2xl font-semibold leading-6">
            Lorem ipsum facto meruem
          </div>
          <div
            class="block h-px bg-gray-400 lg:hidden md:hidden sm:block mt-3 mb-2 w-1/6"
          ></div>
          <div class="text-base font-light leading-5">
            Factoe is abvots meruem
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
