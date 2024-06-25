<script setup>
import { defineProps } from "vue";

const props = defineProps({
  onToggleTheme: Function,
});
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-gray-100"
        >
          <li>
            <RouterLink to="/"><span class="text-lg">Inicio</span></RouterLink>
          </li>
          <li>
            <RouterLink to="/acerca"
              ><span class="text-lg">Acerca</span></RouterLink
            >
          </li>
          <li>
            <RouterLink to="/trabajos"
              ><span class="text-lg">Trabajos</span></RouterLink
            >
          </li>
          <li>
            <RouterLink to="/contacto"
              ><span class="text-lg">Contacto</span></RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center">
      <a class="text-xl">Omar Tejada</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle" @click="props.onToggleTheme">
        MO
      </button>
    </div>
  </div>
</template>
