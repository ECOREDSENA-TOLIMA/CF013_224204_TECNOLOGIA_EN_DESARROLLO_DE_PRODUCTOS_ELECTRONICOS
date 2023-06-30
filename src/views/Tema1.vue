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

    AcordionA.mb-5.bgr_7(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Tecnologías de ensamble").p-4
        .col-md-6.mb-4.mb-md-0
          p Se realizan de acuerdo al prediseño, siguiendo el orden de conexiones, utilizando el material previsto, las capas, los componentes y sus calidades y características, el material del conductor, el tipo de placa. El ensamble también incluye en su parte final, los acabados del producto y presentación final.
          p En ocasiones se puede llamar a todo el proceso, la línea de ensamble. 
          p Al finalizar el ensamble ya sea de manera manual o automática, a través de máquinas automáticas, son pasadas a la etapa de montaje, elemento fundamental de la fabricación de placas de circuitos impresos.  Posteriormente el equipo de fabricación utiliza equipos modernos de soldadura, de acuerdo a normatividades RoHS IPC.
          p Dentro de la fase de montaje de equipos, los productos ensamblados y soldados se convierten en unidades finalizadas, utilizando atornillado fino y/o de precisión, sellado y pintado, según el caso.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/imagen-2.svg', alt='Texto que describa la imagen')
      .row(titulo="Procesos de fabricación").p-4
        .col-md-6.mb-4.mb-md-0
          p Los procesos de fabricación para las tarjetas de circuitos impresos se realizan de acuerdo a las normas de fabricación y deben cumplir con normas ambientales y de salud y seguridad en el trabajo.  
          p El proceso de fabricación comienza con la planeación del circuito, el primer paso es la selección de la placa, un cliente puede solo requerir la placa con el trazado o esquemático del circuito o la tarjeta completa con los componentes montados.  Siempre es el cliente quien en cierta forma dirige la operación de acuerdo a sus requerimientos. 
          p Es de mucha utilidad conocer los detalles de los procesos que serán usados en la fabricación y el ensamble de los circuitos impresos, además de cómo son implementados y/o controlados, ya que nos aporta una ventaja en la etapa de diseño, saber con anticipación cómo va a ser tratada nuestra tarjeta durante los procesos a los que va a ser sometida. Por lo anterior, cobra vital importancia una buena comunicación entre el fabricante y el usuario, que brinde el soporte adecuado durante la etapa de desarrollo del proyecto.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/imagen-3.svg', alt='Texto que describa la imagen')
      .row(titulo="Equipos y herramientas").p-4
        .col-md-6.mb-4.mb-md-0
          p Para la fabricación de las tarjetas de circuitos impresos se requieren una serie de equipos y herramientas clasificadas. 
          ul.lista-ul--color.ps-3
            li.mb-0 
              i.fas.fa-circle.pst_3
              | Taladros.
            li.mb-0
              i.fas.fa-circle.pst_3
              | Máquinas fresadoras o fresas.
            li.mb-0
              i.fas.fa-circle.pst_3
              | Máquinas de perforación (brocas o láser)
            li.mb-0
              i.fas.fa-circle.pst_3
              | Equipos de soldadura electrónica.
            li.mb-0
              i.fas.fa-circle.pst_3
              | Disipadores térmicos.
            li.mb-0
              i.fas.fa-circle.pst_3
              | Programas de diseño electrónico automatizado (EDA, por sus siglas en inglés), equipos de impresión serigráfica, fotograbado.
          p En fabricación industrial se requieren máquinas con transporte de rodillos y cámaras de aspersión de los líquidos de ataque, con control de temperatura, control de presión y de velocidad de transporte. Adicionalmente, deben contar con extracción y lavado de gases.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/imagen-4.svg', alt='Texto que describa la imagen')
      .row(titulo="Documentos de fabricación").p-4
        .col-md-6.mb-4.mb-md-0 
          p Contienen los detalles del proceso, y dentro de ellos, una parte muy importante, está la planeación, la cual se puede considerar como el plan de trabajo o plan de operación. Entre sus partes, se deben considerar los siguientes puntos:  número de operación, nombre de la operación, herramientas a utilizar, velocidad a utilizar, número de revoluciones, longitud de trabajo, tiempo principal y suplementarios, número de vueltas, tiempo total y observaciones, entre otros.
          p Los documentos de fabricación son importantes para la comunicación entre cliente, proveedor y fabricante a través de los programas de fabricación para ser entendidos por las máquinas CAD/CAM. 
          p Como parte de la documentación se incluyen los documentos digitales, entre ellos los archivos GERBER, utilizados por los fabricantes de circuitos impresos, ya que contienen la información de estos con sus respectivas capas, superior, inferior, intermedias, de máscara, de leyenda, de cortes; el formato GERBER más utilizado es el formato RS-274X
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/imagen-5.svg', alt='Texto que describa la imagen')
      .row(titulo="Panelizado (proceso de multicapas)").p-4
        .col-md-6.mb-4.mb-md-0
          p En la fabricación de tarjetas de circuitos impresos es común utilizar placas multicapas, las cuales pueden llevar el mismo circuito o diferentes circuitos. 
          p Se utilizan para aprovechamiento de espacio, conexiones y mejor conducción, en donde se tienen en cuenta  las normas de fabricación de los estándares.
          p Otra razón para su uso es aumentar la productividad, especialmente con el uso de máquinas robotizadas de tomar y colocar (pick and place). 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/imagen-6.svg', alt='Texto que describa la imagen')
     
    p.mt-4(data-aos="fade-up") Conozca las consideraciones más importantes que se deben tener en cuenta para la factibilidad de fabricación.

    .titulo-sexto.color-acento-contenido.mb-5(data-aos="fade-down-right")
        h5 Figura 2.
        span <em>Consideraciones para la factibilidad de fabricación</em>
    
    figure.mb-5(data-aos="flip-left")
      img(src='@/assets/curso/temas/tema1/imagen-7.svg', alt='Texto que describa la imagen')

    p.mt-4 El proceso de ensamble de los circuitos impresos (PCBs) puede ser manual o en forma automatizada, como se dijo anteriormente, siendo importante tener en cuenta las recomendaciones de la IPC, para ensamblar varios circuitos en un solo panel, así:

    .row.justify-content-center.align-items-center.tarjeta--azul-custom.mb-0.p-4.pt-5
      .col-md-10.col-lg-12.col-12
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/imagen-8.svg', alt='')

          .tarjeta.color-custom--borde-1.p-3(x="30%" y="25%" numero="1")
            .h5.mb-2.text-center.mt-4 Cantidad de tarjetas
            p.text-center.mt-4 Para el ensamble de componentes convencionales en las tarjetas de circuitos impresos de forma manual o automatizada, permiten incrementar la eficiencia al realizar la inserción de un mismo componente a varias tarjetas compiladas en un solo panel. Evitando pérdida de tiempo al hacerlo en forma individual. Al utilizar máquinas <em>pick and place,</em> la máquina realizará el ensamble de componentes de montaje superficial en forma mecanizada sobre la pasta de soldar, estando listo para la soldadura y revisión de calidad.

          .tarjeta.color-custom--borde-2.p-3(x="50%" y="55%" numero="2")
            .h5.mb-2.text-center.mt-4 Bordes de sujeción
            p.text-center.mt-4 Los bordes de sujeción facilitan que los bordes del panel sean instalados para manejo y transporte en el procedimiento de ensamble, al igual que para la soldadura y revisión; cuando los circuitos son pequeños no tienen bordes y dificultan el manejo de los mismos.  Estos permiten el trabajo en las placas multicapas presentando ayudas tales como guías de dirección de desplazamiento y posicionamiento de las máquinas automáticas.  Además intervienen en la situación de referencia, serialización y otros.

          .tarjeta.color-custom--borde-3.p-3(x="70%" y="-3%" numero="3")
            .h5.mb-2.text-center.mt-4 Aplicación de la soldadura en pasta
            p.text-center.mt-4 Para la aplicación de la soldadura se utilizan jeringas para inyectar manual o automáticamente en los circuitos agrupados. El panel ayuda a que un solo proceso se pueden soldar a un grupo de tarjetas en una sola acción.

          .tarjeta.color-custom--borde-4.p-3(x="74%" y="62%" numero="4")
            .h5.mb-2.text-center.mt-4 Proceso de soldadura
            p.text-center.mt-4 En estos procesos manuales se facilita operar los circuitos mediante paneles en forma individual. Si se utilizan hornos para la soldadura, se observa ahorro de energía y tiempo.

          .tarjeta.color-custom--borde-5.p-3(x="94.5%" y="92%" numero="5")
            .h5.mb-2.text-center.mt-4 Proceso de inspección  
            p.text-center.mt-4 En este proceso se verifica la búsqueda de errores de manera visual: el ensamble de los componentes en el panel de los circuitos, soldaduras y conexiones. En los casos automatizados, el tiempo de inspección mejora considerablemente, lo mismo que en la calidad del producto, registro y localización de errores de los circuitos impresos y mantenimiento correctivo. 

    p.mt-4 Y el siguiente es el listado de máquinas industriales que intervienen en la fabricación de PCB:

    figure.mb-5.mt-5
      img(src='@/assets/curso/temas/tema1/imagen-9.svg', alt='Texto que describa la imagen')
    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="fade-right")
      h2 1.2 Manejo de inglés técnico

    .row.mb-3.mt-4
      .col-12.col-md-5.mb-3.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema1/imagen-10.png', alt='Texto que describa la imagen')
      .col-12.col-md-7
        p El idioma inglés es muy importante en diferentes actividades. Es una lengua globalizada, utilizada para el comercio, la investigación, las publicaciones y por supuesto para la tecnología; muchos de los avances electrónicos en los últimos dos siglos han venido en gran porcentaje de los Estados Unidos de América y los otros inventos son traducidos a este idioma.
        br
        br
        .cajon.color-primario.p-3.d-flex.flex-wrap(style="background-color: #D9F8F2" data-aos="fade-right")
          img.mb-4.mb-lg-5.col-lg-1.mx-auto(src="@/assets/curso/temas/tema1/decorador-2.svg" style="max-width: 70px")
          .col-md-11.ps-lg-4
            p A pesar de que algunos términos han sido aceptados por la Real Academia de la Lengua Española como anglicismos, es de alta importancia el conocimiento de la lengua inglesa porque un gran porcentaje de los manuales de equipos y componentes, se encuentran editados en dicho idioma y pocas veces son traducidos

    .row.justify-content-center.align-items-center.mb-4.mt-5
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/imagen-11.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Por otro lado, las empresas fabricantes, sean americanas, europeas o chinas o japonesas, realizan capacitaciones en lengua inglesa y el futuro técnico, tecnólogo o ingeniero debe estar preparado, y poseer esas competencias, por tanto, se puede afirmar que el conocimiento del idioma inglés abre muchas puertas.

    p.mt-4 En el diseño, fabricación y ensamble electrónico se utilizan los términos relacionados a este y los correspondientes a la producción de tarjetas de circuitos impresos, los cuales se han venido encontrando en este proceso de aprendizaje.
    p.mt-4 Por lo regular, se utilizan los términos en español, pero es muy común mezclar el lenguaje con términos en inglés en especial las siglas, por ejemplo, CAD/CAM, PCB, ICP, RoHS, etc. Los términos más comunes son componentes, conexiones, placas, integrados, circuitos, archivos, esquemas, ensamble, montaje, producción, dibujos, etc.
    p.mt-4 Ahora bien, como se indicó previamente, las hojas de datos y el manejo de proveedores son los factores donde más se requiere el uso de este idioma.

    TabsB.color-primario.mt-5
      .py-4.py-md-5(titulo="Hojas de datos" :icono="require('@/assets/curso/temas/tema1/decorador-3.svg')")
        .row
          .col-12.col-lg-7(data-aos="fade-down-right")
            p Las hojas de datos son la expresión de las diferentes características de un producto, sea un componente, una tarjeta de circuito impreso de uso regular o un dispositivo. En el caso de los componentes permiten seleccionar el tipo de componentes a utilizar en la tarjeta, según las características o propiedades que ofrece y las dimensiones, para poder ensamblarlo en la placa del circuito. Los programas de diseño utilizan estas hojas de datos u hojas técnicas para incorporarlos a sus bibliotecas o librerías y poder realizar las simulaciones o archivos de diseño.
            p.mt-3 Las hojas de datos u hojas técnicas de los fabricantes ,sean de país de origen inglés o de otro país, son por lo general en idioma inglés, por lo cual es importante el aprendizaje del idioma, principalmente en su aspecto técnico para ser un eficiente desarrollador de tarjetas de circuitos impresos, las hojas de datos de resistencias, transistores, diodos, bobinas y condensadores así como tiristores están en lengua inglesa.
          .col-4.col-lg-5.offset-4.offset-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/imagen-12.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Manejo de proveedores" :icono="require('@/assets/curso/temas/tema1/decorador-4.svg')")
        .row
          .col-4.col-lg-5.offset-4.offset-lg-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/imagen-13.png', alt='Texto que describa la imagen')
          .col-12.col-lg-7(data-aos="fade-down-right")
            p Los proveedores de un cliente que requiere una tarjeta de circuitos impresos es el fabricante de estas, quien a su vez sus proveedores son los fabricantes o distribuidores de las placas, de los componentes, de las líneas de cobre u otro material conductor, de todas las materias primas y/o sustancias utilizadas para la preparación, producción, ensamble y montaje de las PBCs.
            p.mt-3 Es posible que varios de los proveedores de componentes o de placas para fabricar y/o desarrollar las tarjetas de circuitos impresos, sean de origen americano, chino, japonés o europeo, entre algunos. Sin embargo el lenguaje comercial es el idioma ingles, afirmando la importancia de que el futuro tecnólogo tenga las competencias para leer, escribir y comprender en dicho idioma, y así asegurar que las órdenes y recepción de pedidos sean las correctas, que la aclaración de dudas, en caso de presentarse, sean eficaces y adecuadas, y que incluso para dar las gracias o para solicitar algún tipo de garantía sea precisa.
          
    p.mt-4 Se había expresado previamente en la documentación, que los archivos digitales hacían parte de esta, desde los archivos físicos que se digitalicen como los circuitos básicos y las posteriores simulaciones o modelos, hasta los archivos que se producen para llevar a las máquinas CAD/CAM o a las máquinas de tomar y colocar. Los archivos más importantes y también los más utilizados entre los fabricantes son los archivos GERBER.

    .row.justify-content-center.align-items-center.mb-4.mt-5
      .col-md-10.col-12(data-aos="fade-right")
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/imagen-14.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los diseñadores de programas de fabricación de tarjetas de circuitos impresos, desarrollan opciones para leer archivos de fabricación de otros programas y convertirlos en archivos estándar para la respectiva fabricación. Tener estas opciones hace a su empresa en un proveedor adecuado para atender las necesidades de sus clientes potenciales.

    p.mt-4 Dentro de la generación de archivos de fabricación, para productos electrónicos, se encuentran los siguientes procesos como los principales.

    TabsA.color-acento-botones.mb-5.mt-5(data-aos="fade-down")
      .tarjeta.color-tabs2-1-bg.p-4(titulo="Reconocimiento de <br>extensiones Gerber")
        .row
          .col-md-12
            p Las extensiones gbr o “Gerber files” son los archivos en los cuales se puede traducir o transformar los documentos de las máquinas CAD/CAM, para que sean entendidos por una máquina de fabricación de tarjetas de circuitos impresos. Estos archivos, con la extensión gbr, son el medio de comunicación entre la información de una máquina a la otra y estos archivos son de alto uso entre los fabricantes de PCBs.
            p(style="background-color: #FFEA99") Es importante recordar que los archivos Gerber son del tipo ASCII y están compuestos por cuatro elementos así:  información o parámetros de configuración, las definiciones de apertura, la ubicación de las coordenadas para los comandos de dibujo y los códigos de comando para los mismos.
            p Actualmente, la mayoría de las máquinas CAD, traen la opción de convertir la información a archivos gbr.  La primera versión de archivos Gerber eran los RS 274 D. Hoy en día se producen los RS 274 X y viene en desarrollo la versión de archivos Gerber x2., que permiten la función de capas y de objetos.
      .tarjeta.color-tabs2-1-bg.p-4(titulo="Lista de materiales")
        .row
          .col-md-12
            p Los envíos serán embalados, transportados y asegurados exclusivamente por instrucción del comprador y a su cargo. Los materiales de embalaje se devolverá sin demora cuando se solicite, con el flete y los gastos pagados.
            p En caso de que se haya acordado un plazo de entrega superior a 4 meses, el proveedor tendrá derecho a repercutir en el comprador cualquier aumento de los costes que se hayan producido (materiales, fabricación, montaje, personal, envío y similares). En este caso, los precios fijados por el proveedor en la fecha se considerarán acordados.
            p En todos los casos en los que, por ejemplo, el material / diseño / experiencia de mano de obra cambia porque los documentos / muestras de los documentos/muestras facilitadas por el comprador no se ajustan a la realidad o son incompletos, el proveedor podrá modificar razonablemente los precios, incluso después de la celebración del contrato, en función de los costes incurridos.  Todo lo anterior queda plasmado en documentos que a su vez serán soporte en el proceso de gestión y suministro de tarjetas.


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
