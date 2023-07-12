<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Proceso de compras

    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0(data-aos="fade-right")
        span Para todos los contratos de compra, de obra y de suministro de materiales o de servicios, se aplicarán las Condiciones Generales de Contratación del sistema gubernamental, en el caso de una contratación con una entidad pública, para contratación privada, rigen las normas del Código de Comercio. Para contratos de servicios, así como otros contratos, en la medida en que no se opongan a las disposiciones legales obligatorias o se determinen de otro modo en la orden escrita del contratista. Estas condiciones de compra se aplicarán también a todos los contratos complementarios y sucesivos.
        .col-12.col-md-12
          .cajon.bgr.mb-3.mt-5.p-3.d-flex.flex-wrap
            img.mb-4.mb-lg-4.col-lg-1.mx-auto(src="@/assets/curso/temas/tema2/decorador-5.svg" style="max-width: 70px")
            .col-md-11.ps-lg-4
              p.mb-0 El contrato de compras especifica los materiales, sus características, tiempos de entrega y garantías, entre algunas características del contrato. Las compras deben ser validadas inicialmente con una orden de compra y finalmente con la respectiva factura.
      .col-12.col-md-4
        figure
          img(src="@/assets/curso/temas/tema1/imagen-15.svg", alt="Texto que describa la imagen")

    .row.justify-content-center.align-items-center.mb-5
      .col-md-9.col-12
        figure
          img(src='@/assets/curso/temas/tema2/imagen-16.svg', alt='Texto que describa la imagen')

    p.mt-4(data-aos="fade-up") La siguiente figura expone las características de un buen proveedor de fabricantes de tarjetas de circuitos impresos.

    .titulo-sexto.color-acento-contenido.mb-5.mt-5(data-aos="fade-down-right")
        h5 Figura 3.
        span <em>Características de un proveedor</em>

    figure.mb-5(data-aos="flip-left")
      img(src='@/assets/curso/temas/tema2/imagen-17.svg', alt='Texto que describa la imagen')

    .row.justify-content-around.align-items-center
      .col-12.col-md-10
        .tarjeta.color-acento-contenido.mt-5.p-4.mb-5(data-aos="fade-down")
          .row.justify-content-around.align-items-center
            .col-2.col.col-lg-2.px-5
              img(src="@/assets/curso/temas/tema2/imagen-18.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.lg-4.mb-3.mb-sm-0.p-4
                  p.text-bold El nivel de inventarios debe estar referenciado con:
                .col-lg-4
                  ul.lista-ul--color.text-bold
                    li 
                    i.lista-ul__vineta
                    | El flujo de producción. 
                    li
                    i.lista-ul__vineta
                    | Los pedidos de los clientes.  
                    li
                    i.lista-ul__vineta
                    | La producción interna. 
                        
    .row.mb-2
      .col-12.col-md-5(data-aos="fade-left")
        p Una buena medida para una apropiada gestión de los inventarios es utilizar la metodología Lean #[i manufacturing], que le permite el control de inventarios en producción, almacenamiento y compras.
      .col-12.col-md-7.mb-3.mb-md-0(data-aos="fade-right")
        .cajon.bgr.p-4.mb-1
          p.mb-0 Actualmente no se utiliza la metodología de grandes almacenamientos de inventarios, sino una compra controlada de los elementos de uso cotidiano al igual que con los inventarios de componentes y elementos auxiliares de menor consumo para fabricación de las tarjetas de circuitos impresos.




</template>

<script>
export default {
  name: 'Tema2',
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
