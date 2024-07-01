<script setup>
import CardServices from "../elements/CardServices.vue";

import TitleSub from "../elements/TitleSub.vue";
import MyProcess from "../ui/MyProcess.vue";
</script>

<template>
  <div class="my-8 sm:mt-12">
    <TitleSub
      :vtitle="'Mis Servicios'"
      :subtitle="'Lorem ipsumet consectetur umsequi.'"
    />
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:divide-x sm:divide-gray-100"
    ></div>
  </div>

  <div class="grid grid-cols-12 gap-8">
    <div class="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-12">
      <CardServices
        :vicon="'1'"
        :vtitulo="'Diseño UX/UI'"
        :vdescripcion="'Lorem ipsum facto meruem is abasollsuti denmer koretpod is alimoi perfectus'"
      />
    </div>
    <div class="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-12">
      <CardServices
        :vicon="'2'"
        :vtitulo="'Desarrollo Front End'"
        :vdescripcion="'Lorem ipsum facto meruem is abasollsuti denmer koretpod is alimoi perfectus'"
      />
    </div>
    <div class="col-span-12 lg:col-span-4 md:col-span-12 sm:col-span-12">
      <CardServices
        :vicon="'3'"
        :vtitulo="'Motion Graphics'"
        :vdescripcion="'Lorem ipsum facto meruem is abasollsuti denmer koretpod is alimoi perfectus'"
      />
    </div>
  </div>

  <div class="my-8 sm:mt-12">
    <TitleSub
      :vtitle="'Mi Proceso de Diseño'"
      :subtitle="'Lorem ipsumet consectetur umsequi.'"
    />
    <MyProcess />
  </div>
</template>

<style lang="scss" scoped></style>
