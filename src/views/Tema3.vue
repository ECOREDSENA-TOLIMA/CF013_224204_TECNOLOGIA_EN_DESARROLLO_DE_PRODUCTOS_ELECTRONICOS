<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cadena de suministro

    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0(data-aos="fade-right")
        .col-12.col-md-12
          .cajon.bgr.mb-3.p-3.d-flex.flex-wrap
            img.mb-4.mb-lg-4.col-lg-1.mx-auto(src="@/assets/curso/temas/tema3/decorador-6.svg" style="max-width: 70px")
            .col-md-11.ps-lg-4
              p.mb-0 Las entregas de mercancías y la prestación de servicios se realizarán exclusivamente con base en las condiciones del contrato suscrito entre las partes. En el caso de relaciones comerciales se utilizarán los acuerdos comerciales permanentes, que se aplicarán también a los contratos futuros. En caso de que la parte contratante no esté de acuerdo, es imperativo que el cliente sea informado inmediatamente por escrito.
          span La empresa se reserva la posibilidad de retirar sus ofertas sin que puedan surgir reclamaciones de cualquier naturaleza, contra la empresa o proveedor.
      .col-12.col-md-4
        figure
          img(src="@/assets/curso/temas/tema3/imagen-18.png", alt="Texto que describa la imagen")

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imagen-19.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la medida que las entregas están sujetas a obligaciones relacionadas con el comercio exterior y pagos, se hace necesario la aplicación de la Ley de Comercio Exterior de la OMC, o las leyes de control de las exportaciones/embargos (de EE. UU. o normativas similares como la Unión europea).

        figure.mb-5(data-aos="flip-left")
          img(src='@/assets/curso/temas/tema3/cita-2.svg', alt='Texto que describa la imagen')

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 3.1 Modelos de aprovisionamiento

    p.mt-4(data-aos="fade-up") Los modelos en que se basa la planificación de aprovisionamiento se agrupan en dos categorías principales, dependiendo de si la demanda es dependiente o independiente. A continuación, se presenta una breve explicación de cada uno de ellos, según INEAF (2021).
    
    .row.justify-content-center.align-items-center.mb-4.color-tabs2-2(data-aos="fade-left")
      .col-md-6.col-12.px-5
        .h4.mb-4.mt-4.text-white Modelos para reaprovisionamiento NO programado
        p.text-white Este modelo se presenta cuando la demanda es de tipo independiente, generada como consecuencia de las decisiones de muchos actores ajenos a la cadena logística, como lo son los clientes o consumidores.  A su vez los modelos no programados se clasifican en otras dos categorías.
      .col-md-6.col-12
        .row
          .col.mb-2
            a.boton.color-acento-botones.indicador__container.me-md-3(@click="modal2 = true")
              p.mb-0.text-center Modelos de reaprovisionamiento periódico, SRP
              .indicador--click(v-if="mostrarIndicador")
          .col.mb-2
            a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
              p.mb-0.text-center Modelos de reaprovisionamiento continuo, SRC
    
    .row.justify-content-center.align-items-center.mb-4.color-tabs2-2(data-aos="fade-left")
      .col-md-6.col-12.px-5
        .h4.mb-4.mt-4.text-white Modelos para reaprovisionamiento programado
        p.text-white Modelos que son generados por un software informático de control de producción y/o ventas en atención a que se revisan con una demanda de tipo dependiente. Los requerimientos de reaprovisionamiento se establecen por MRP o DRP que utilizan técnicas de optimización o simulación.
      .col-md-6.col-12
        .row
          .col.mb-2
            a.boton.color-acento-botones.indicador__container.me-md-3.d-grid.gap-2(@click="modal4 = true")
              p.mb-0.text-center MRP
              .indicador--click(v-if="mostrarIndicador")
          .col.mb-2
            a.boton.color-acento-botones.indicador__container.d-grid.gap-2(@click="modal5 = true")
              p.mb-0.text-center DRP

    p.mt-5(data-aos="fade-up") Las estrategias de aprovisionamiento son importantes en la cadena de una empresa para su organización, desempeño y atención a la operación en redundancia del servicio al cliente; con mejor atención, rápida respuesta y mantenimiento preventivo o correctivo. Dentro de las metodologías en aplicación se usa mucha la R3 alemana y las empresas de vehículos están utilizando metodologías con Internet.

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 3.2 Variables de producción

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imagen-21.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El modelo de gestión #[i Just InTime] (justo a tiempo en español), es un método o forma de complementar los tipos de aprovisionamiento, que se ha convertido en el utilizado por un alto número de empresas, contribuyendo a su desarrollo. Han propiciado que muchos se interesen por conocer esta técnica y ponerla en práctica.

    .row.mb-5
      .col-12.col-md-8.mb-3.mb-md-0(data-aos="fade-right")
        span El modelo «justo a tiempo» se comporta más como un sistema de inventarios que como un sistema de producción, mediante el cual, el objetivo es eliminar todo desperdicio, definido, como todo lo que no sea el mínimo absoluto de recursos de materiales, máquinas y mano de obra requeridos para añadir un valor al producto en desarrollo.
        .col-12.col-md-12
          .cajon.bgr.mb-3.mt-4.p-3.d-flex.flex-wrap
            img.mb-4.mb-lg-4.col-lg-1.mx-auto(src="@/assets/curso/temas/tema2/decorador-5.svg" style="max-width: 70px")
            .col-md-11.ps-lg-4
              p.mb-0 Las ventajas del modelo #[i Just InTime] son sus resultados en las reducciones de todas las formas de inventario, las cuales se obtienen por medio de métodos mejorados, no solo de compras sino también de programación de la producción.
      .col-12.col-md-4
        figure
          img(src="@/assets/curso/temas/tema3/imagen-22.png", alt="Texto que describa la imagen")

    p.mt-4(data-aos="fade-up") Consiste en ajustes a los métodos tradicionales, estructuración de pedidos en cantidad y tiempo de entrega, destinados para mejorar el programa de producción del usuario y en pequeñas cantidades que satisfagan periodos muy cortos.
    p.mt-4(data-aos="fade-up") Las variables de producción, como su nombre lo indica, son los cambios que se pueden presentar en la producción, las cuales son asociados a los factores de producción como son el trabajo, el capital, los recursos naturales y la tecnología, por ejemplo, en esta época la pandemia ha afectado la producción de todos los sectores convirtiéndose en una variable temporal pero severa.

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 3.3 Escala de producción

    .row.justify-content-center.align-items-center.mb-4
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imagen-23.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Las escalas de producción se dan por el tamaño de la empresa, en referencia a la producción relacionada con sus ventas. Una empresa pequeña en ventas va a tener una escala mínima de producción, la mediana, un valor medio y una empresa de un número alto de ventas tendrá una producción alta.

    p.mt-4(data-aos="fade-up") Sin embargo, últimamente se utiliza el término, economía de escala el cual está relacionado con los costos de producción y representa que a mayor fabricación se puede tener menor costo para fabricar un producto. De cierta forma, esta técnica es utilizada para las compras con gran número de elementos; a mayor cantidad menor es el valor del producto.
    p.mt-4(data-aos="fade-up") Se basa en que el beneficio que tiene el fabricante, se lo traslada también al comprador, quien para convertirse en gran comprador se une con empresas del sector es decir para formar un clúster o realizar compras nacionales en vez de hacerlas regionales o individuales. 

    .row.mb-2.mt-5
      .col-12.col-md-6.mb-3.mb-md-0(data-aos="fade-left")
        .cajon.bgr.p-4.mb-1
          p.mb-0 Para la evaluación económica de las escalas de producción se emplea el algoritmo Milawa del #[i software] Whittle, extrayendo archivos necesarios para comenzar la implementación del modelo en Isight, programa que analiza las capacidades de operación, producción y otras.
      .col-12.col-md-6(data-aos="fade-right")
        p Finalmente, la incerteza es el término económico que ayuda a la clasificación de las escalas de producción de un sector o de una empresa.
      

    ModalA(:abrir-modal.sync="modal2").bgr_9
      p <strong>Modelos de reaprovisionamiento periódico, SRP,</strong> se caracteriza porque la solicitud o pedido se origina por períodos previamente determinados. La cantidad a requerir, será la que restablece el nivel máximo de inventarios o nivel objetivo. 

    ModalA(:abrir-modal.sync="modal3").bgr_9
      p <strong>Modelos de reaprovisionamiento continuo, SRC,</strong> se caracterizan por el lanzamiento de una orden de pedido cuando los inventarios decrecen hasta una cierta medida o "punto de pedido". El volumen a solicitar es el "lote económico de compra".

    ModalA(:abrir-modal.sync="modal4").bgr_9
      p.text-bold La planificación de los materiales o MRP utiliza un Sistema de Planificación y Administración, usualmente asociada, con un programa basado en la planeación de la producción y el sistema de control de inventarios.

    ModalA(:abrir-modal.sync="modal5").bgr_9
      p.text-bold Planificación de los Recursos de Distribución o Distribution Resource Planning (DRP) es un método usado en la administración de negocios para planificar la emisión de órdenes de productos dentro de la cadena de suministro. 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    mostrarIndicador: true,
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

<style lang="sass">

.bgr_9 .modal-a__content
  background-color: #FFEA99

.modal-a__close-btn
  color: #FFFF
  background-color: #3C0060
</style>
