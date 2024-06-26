<script setup>
import "boxicons";
import { defineProps } from "vue";

const props = defineProps({
  onToggleTheme: Function,
  vestadoico: "String",
});
</script>

<template>
  <div class="navbar bg-base-100 border-b">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
      <a class="px-4 text-3xl fontlogo">Omar Tejada</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
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
    <div class="navbar-end">
      <div class="btn btn-ghost btn-circle" @click="props.onToggleTheme">
        <box-icon
          :name="vestadoico === 'dark' ? 'sun' : 'moon'"
          :color="vestadoico === 'dark' ? 'white' : 'black'"
          :size="'1.5rem'"
        ></box-icon>
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
