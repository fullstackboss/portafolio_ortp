<script setup>
import CardServices from "../elements/CardServices.vue";
import TitleSection from "../elements/TitleSection.vue";
</script>

<template>
  <!-- Presentacion -->
  <!--   <div class="pb-20">
    <h2 class="text-3xl font-bold sm:text-4xl">Bienvenidos</h2>
    <p class="mt-4 text-xl leading-8">
      Soy un diseñador UX/UI y desarrollador frontend, especializado en crear
      experiencias digitales innovadoras y atractivas. Utilizo tecnologías
      modernas como Vue.js y motion graphics para mejorar la interacción del
      usuario. Mi enfoque es transformar ideas en productos excepcionales,
      superando expectativas con soluciones creativas y efectivas. ¡Explora mi
      portafolio y descubre cómo puedo hacer realidad tus ideas!
    </p>
  </div> 
  <TitleSection />
  <!-- Servicios -->
  <div class="grid grid-cols-12 gap-8">
    <div class="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-12">
      <CardServices
        :vtitulo="'Diseño UX/UI'"
        :vdescripcion="'Lorem ipsum facto meruem is abasollsuti denmer koretpod is alimoi perfectus'"
      />
    </div>
    <div class="col-span-12 lg:col-span-4 md:col-span-6 sm:col-span-12">
      <CardServices
        :vtitulo="'Desarrollo Front End'"
        :vdescripcion="'Lorem ipsum facto meruem is abasollsuti denmer koretpod is alimoi perfectus'"
      />
    </div>
    <div class="col-span-12 lg:col-span-4 md:col-span-12 sm:col-span-12">
      <CardServices
        :vtitulo="'Motion Graphics'"
        :vdescripcion="'Lorem ipsum facto meruem is abasollsuti denmer koretpod is alimoi perfectus'"
      />
    </div>
  </div>

  <!--   <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="">
      <CardServices />
    </div>
    <div class="">
      <CardServices />
    </div>
    <div class="">
      <CardServices />
    </div>
  </div> -->

  <section class="">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
          Trusted by eCommerce Businesses
        </h2>

        <p class="mt-4 text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolores laborum labore provident impedit esse recusandae facere libero
          harum sequi.
        </p>
      </div>

      <div class="mt-8 sm:mt-12">
        <dl
          class="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:divide-x sm:divide-gray-100"
        >
          <div class="flex flex-col px-4 py-8 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">
              Total Sales
            </dt>

            <dd class="text-4xl font-extrabold text-gray-600 md:text-5xl">
              $4.8m
            </dd>
          </div>

          <div class="flex flex-col px-4 py-8 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">
              Official Addons
            </dt>

            <dd class="text-4xl font-extrabold text-gray-600 md:text-5xl">
              24
            </dd>
          </div>

          <div class="flex flex-col px-4 py-8 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">
              Total Addons
            </dt>

            <dd class="text-4xl font-extrabold text-gray-600 md:text-5xl">
              86
            </dd>
          </div>
          <div class="flex flex-col px-4 py-8 text-center">
            <dt class="order-last text-lg font-medium text-gray-500">
              Total Addons
            </dt>

            <dd class="text-4xl font-extrabold text-gray-600 md:text-5xl">
              86
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
