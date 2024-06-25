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
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="text-3xl">Omar Tejada</a>
      </div>
      <div class="flex-none">
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
          <li>
            <div class="btn btn-ghost btn-circle" @click="props.onToggleTheme">
              <box-icon
                :name="vestadoico === 'dark' ? 'sun' : 'moon'"
                :color="vestadoico === 'dark' ? 'white' : 'black'"
                :size="'1.5rem'"
              ></box-icon>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
