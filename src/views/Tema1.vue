<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Manufactura de productos electrónicos

    p.mt-4(data-aos="fade-up") Después de haber concluido las etapas de concepción y diseño de las tarjetas de circuitos impresos, se llegan a las etapas de fabricación, producción y distribución. Para el futuro tecnólogo en desarrollo de productos electrónicos, esta es una faceta importante de su aprendizaje, por lo que comprenderá la gestión que deberá aplicar en el desarrollo de las tarjetas de circuitos impresos.
    p.mt-4(data-aos="fade-up") Por ello, se hace fundamental el comprender la aplicación de conceptos de calidad para la aseguranza de productos con estándares calificados, considerando las necesidades del cliente. Así mismo, la aplicación de los principios de administración es de alta incidencia, los cuales se pueden apreciar en la siguiente figura.

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.pt-5
      .col-md-10.col-lg-8.col-12(data-aos="fade-down")
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/1.svg', alt='')

          .tarjeta.color-custom--borde.p-3(x="57%" y="10%" numero="1")
            .h5.mb-2 1. Planear
            p Consiste en todas aquellas actividades que se realizan previo al proyecto y diseño de la tarjeta.

          .tarjeta.color-custom--borde.p-3(x="81%" y="41.5%" numero="2")
            .h5.mb-2 2. Hacer
            p Hace referencia al proceso de supervisar la fabricación de la tarjeta.

          .tarjeta.color-custom--borde.p-3(x="60%" y="76%" numero="3")
            .h5.mb-2 3. Organizar
            p Estructurar todos los aspectos necesarios con el fin de minimizar reprocesos.

          .tarjeta.color-custom--borde.p-3(x="22%" y="63%" numero="4")
            .h5.mb-2 4. Dirigir
            p Liderar cada uno de los procesos de la fabricación y del proyecto como tal.

          .tarjeta.color-custom--borde.p-3(x="22.5%" y="24%" numero="5")
            .h5.mb-2 5. Controlar
            p Realizar el control de calidad, en cada una de las áreas del proyecto (compras, fabricación, suministro y entrega).

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 1.1 Conceptos básicos en manufactura de productos electrónicos
    .p-3.mb-4.d-flex.flex-wrap.align-items-center
      img.mb-4.mb-lg-0.col-lg-1.mx-auto(src="@/assets/curso/temas/tema1/decorador-1.svg" data-aos="fade-right" style="max-width: 85px")
      .col-md-11.ps-lg-4(data-aos="fade-left")
        p.mb-0 La manufactura, como su palabra lo expresa, es un procedimiento que se realiza para fabricar un elemento utilizando las manos o con la ayuda de máquinas, situación que efectivamente sucede en la producción de tarjetas de circuitos impresos, debido a que se trabaja con las manos, pero se tiene la ayuda del programa de diseño y de las máquinas de computarizadas CAD/CAM.

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/imagen-1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es claro tener en cuenta que algunas tarjetas de circuitos impresos de tipo sencillo se pueden elaborar en casa siguiendo las instrucciones de la concepción y prediseño.

    p.mt-4(data-aos="fade-up") De esta manera se confirma que la fabricación de tarjetas de circuitos impresos se puede realizar en empresas preparadas para este desarrollo, siguiendo los detalles del cliente, las necesidades y objetivos de la tarjeta.
    p.mt-4(data-aos="fade-up") En los procesos de manufactura, no se debe dejar desapercibido el factor humano, debido a que es una columna muy importante, porque puede realizar las tareas básicas, alimentar la máquina o controlar el proceso.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7.col-12.mt-4(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema1/cita-1.svg', alt='Texto que describa la imagen' style="max-width: 850px")

    p.mt-4(data-aos="fade-up") Para la manufactura de productos electrónicos se cumplen las consideraciones generales de su fabricación, pero teniendo en cuenta el producto final: tarjetas de circuito impreso, las cuales van a hacer parte de diferentes dispositivos electrónicos como teléfonos, televisores, tabletas, especialmente del área de informática y comunicaciones.
    p.mt-4(data-aos="fade-up") A continuación, se explica cada uno de los aspectos a tener en cuenta en este proceso.





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
