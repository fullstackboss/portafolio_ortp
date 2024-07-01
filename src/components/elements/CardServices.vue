<script setup>
import IconEcosystem from "../icons/IconEcosystem.vue";
import Icono from "../icons/icono.vue";
import IconCommunity from "../icons/IconCommunity.vue";

const props = defineProps({
  vicon: {
    type: String,
    required: true,
  },
  vtitulo: {
    type: String,
    required: true,
  },
  vdescripcion: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <a href="#" class="group relative block h-48 lg:h-60 md:h-56 sm:h-48">
    <span
      class="absolute inset-0 border-2 border-dashed border-secondary rounded-xl"
    ></span>

    <div
      class="relative bg-primary border-secondary flex h-full transform items-center border-2 bg-blanco_gris_1-light transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 rounded-xl"
    >
      <div
        class="px-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:px-6 lg:px-8"
      >
        <div v-if="vicon === '1'">
          <IconEcosystem />
        </div>
        <div v-else-if="vicon === '2'">
          <Icono />
        </div>
        <div v-else>
          <IconCommunity />
        </div>
        <h2 class="mt-4 text-xl helvetica-bold sm:text-2xl">
          {{ vtitulo }}
        </h2>
        <div class="my-2 text-base">
          {{ vdescripcion }}
        </div>
      </div>

      <div
        class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8"
      >
        <h3 class="mt-4 text-xl font-medium sm:text-2xl">
          Go around the world
        </h3>

        <p class="my-2 mb-4 text-base">
          Lorem ipsum dolor sit amet consecing elit. Cupiditate, praesentium
          voluellendus.
        </p>
        <p>
          <button class="btn btn-md text-lg btn-outline">Ver Proyectos</button>
        </p>
      </div>
    </div>
  </a>
</template>
