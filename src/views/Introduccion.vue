<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mt-4(data-aos="fade-up") La fabricación de las tarjetas para circuitos impresos es una importante actividad en la electrónica, constituyéndose en el puente entre los circuitos electrónicos y los dispositivos electrónicos, que hacen parte de la vida diaria en el hogar o de muchos equipos en la industria y/o el comercio. Son piezas indispensables del aporte que la electrónica, como integrante de la tecnología, hace para tener una mejor calidad de vida, tratando de realizarlo de una manera sostenible y aportando con el aprovechamiento de los equipos inservibles.
    
    .row.mb-3.mt-4
      .col-12.col-md-5.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/temas/introduccion/intro.svg', alt='Texto que describa la imagen')
      .col-12.col-md-7
        p Un ejemplo de este último fue la elaboración de las medallas de oro, plata y bronce utilizadas en los pasados juegos olímpicos realizados en Tokio, Japón. Utilizaron las tarjetas de circuitos impresos de miles de equipos electrónicos, en especial teléfonos móviles inteligentes, cámaras y otros dispositivos .
        br
        br
        .cajon.color-primario.p-4.d-flex.flex-wrap(style="background-color: #D9F8F2" data-aos="fade-right")
          img.mb-4.mb-lg-5.col-lg-1.mx-auto(src="@/assets/curso/temas/introduccion/1.svg" style="max-width: 70px")
          .col-md-11.ps-lg-4
            p El ensamblaje, la manufactura, la gestión de proveedores de materia prima, la logística y la posterior distribución a los clientes finales, le dan el toque administrativo al desarrollo de productos electrónicos.
            p Conozca y reflexione sobre cómo un proceso de fabricación inicial puede transformarse en otro producto al tener en cuenta la sostenibilidad, observando el video “¿De qué están hechas las medallas olímpicas de Tokio 2020?”, el cual se encuentra en el material complementario.

      




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
