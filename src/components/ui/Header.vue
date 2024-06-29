<script setup>
import ItemMenu from "../elements/ItemMenu.vue";
import ModeButton from "../elements/Mode.vue";

const props = defineProps({
  vEventMode: {
    type: String,
  },
});
</script>
<template>
  <div class="grid grid-cols-12 gap-0 mb-5">
    <!-- menu movil -->
    <div
      class="col-span-12 block p-4 sm:block md:hidden lg:hidden border-b border-gray-500 menu-container"
    >
      <div class="grid grid-cols-12 gap-1">
        <div class="col-span-2 flex items-center cursor-pointer">
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
        <div class="col-span-8 text-center text-2xl helvetica-bold leading-10">
          Omar Tejada P.
        </div>
        <div
          class="col-span-2 flex items-center justify-end"
          @click="props.onToggleTheme"
        >
          <ModeButton />
        </div>
      </div>
    </div>
    <!-- fin menu movil -->

    <!-- Desktop -->
    <!-- Column izquierda -->
    <div
      class="col-span-12 h-full content-center sm:col-span-12 md:col-span-9 px-0"
    >
      <div class="flex flex-col">
        <div class="hidden py-2 px-2 text-lg sm:hidden md:block lg:block">
          Diseñador UX/UI / Motion Designer
        </div>
        <div
          class="hidden text-7xl sm:hidden md:block lg:block py-2 pb-5 helvetica-bold px-1"
        >
          Omar Tejada P.
        </div>
        <div
          class="hidden h-px bg-gray-500 sm:hidden md:block lg:block divider divider-neutral"
        ></div>

        <div class="flex flex-row px-2 justify-between">
          <div class="text-dark hidden sm:hidden md:block lg:block">
            <ul class="flex gap-2">
              <li>
                <ItemMenu :venlace="'/'" :vnombre="'Inicio'" />
              </li>
              <li class="flex self-center border-l border-gray-500 h-3"></li>
              <li>
                <ItemMenu :venlace="'/acerca'" :vnombre="'Acerca'" />
              </li>
              <li class="flex self-center border-l border-gray-500 h-3"></li>
              <li>
                <ItemMenu :venlace="'/trabajos'" :vnombre="'Trabajos'" />
              </li>
              <li class="flex self-center border-l border-gray-500 h-3"></li>
              <li>
                <ItemMenu :venlace="'/contacto'" :vnombre="'Contacto'" />
              </li>
            </ul>
          </div>
          <div class="hidden sm:hidden md:block lg:block px-0">
            <div class="flex items-center h-full">
              <ModeButton :vEventMode2="vEventMode" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Column derecha -->
    <div
      class="col-span-12 sm:col-span-12 md:col-span-3 md:p-0 px-0 lg:px-3 sm:px-0"
    >
      <div class="grid grid-cols-12 lg:justify-center md:justify-center">
        <div
          class="col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-5 flex lg:justify-end md:justify-center bg-black lg:bg-transparent md:bg-black sm:bg-black"
        >
          <!-- fotografia -->
          <div class="h-64 lg:h-80 md:h-72 sm:h-64 bg-black flex items-end p-4">
            <img
              class="h-64 w-64 lg:h-72 md:h-68 sm:h-64 lg:w-68 md:w-68 sm:w-64 object-cover relative lg:static md:static sm:relative top-10"
              src="@/assets/images/ortp.jpg"
              alt=""
            />
          </div>
        </div>
        <!-- texto -->
        <div
          class="col-span-6 lg:col-span-8 md:col-span-6 sm:col-span-7 block h-full content-center p-5 sm:block md:hidden lg:hidden sm:bg-black bg-black text-white"
        >
          <div class="text-2xl font-semibold leading-6">
            Lorem ipsum facto meruem
          </div>
          <div class="divider divider-neutral w-1/6"></div>
          <div class="text-base font-light leading-5">
            Factoe is abvots meruem
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
