export default {
  global: {
    componenteFormativo:
      'Gestión y suministro de tarjetas para productos electrónicos.',
    descripcionCurso:
      'Dentro de los aspectos contemplados en el desarrollo de productos electrónicos, se encuentra la gestión y suministro de tarjetas, en los cuales se administra y se revisa la producción, la atención al cliente y el suministro final. Por lo tanto, la manufacturación, el ensamble, las herramientas y la documentación del proceso, son fases importantes; en las que además se utiliza mucho el idioma inglés.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/correcto.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/nota.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Manufactura de productos electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos en manufactura de productos electrónico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo de inglés técnico',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Archivos de fabricación de productos electrónicos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Proceso de compras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cadena de suministro',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Modelos de aprovisionamiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Variables de producción',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Escala de producción',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción',
      referencia:
        'TV Azteca Deportes. (2021). <em>¿De qué están hechas las medallas olímpicas de Tokyo 2020?</em> (Video). YouTube. https://www.youtube.com/watch?v=BG57cs78JxA',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BG57cs78JxA',
    },
    {
      tema: 'Documentación de fabricación',
      referencia:
        'ALTIUM DESIGNER. (2017). <em>Documentación de fabricación.</em> https://resources.altium.com/es/p/manufacturing-outputs-datasheet',
      tipo: 'PDF',
      link: 'https://resources.altium.com/es/p/manufacturing-outputs-datasheet',
    },
    {
      tema: 'Diseño y fabricación de PCBs',
      referencia:
        'Bellidoz, M. (2019). <em>Diseño y fabricación de PCBs.</em> https://www.dte.us.es/docencia/etsii/gii-ic/laboratorio-de-desarrollo-hardware/temas/Tema5NormasPCB/at_download/file',
      tipo: 'Presentación',
      link:
        'https://www.dte.us.es/docencia/etsii/gii-ic/laboratorio-de-desarrollo-hardware/temas/Tema5NormasPCB/at_download/file',
    },
    {
      tema: 'Normas básicas y recomendaciones en el diseño de PCBs.',
      referencia:
        'Bellidoz, M. (2015). <em>Normas básicas y recomendaciones en el diseño de PCBs.</em> https://www.dte.us.es/docencia/etsii/gii-ic/laboratorio-de-desarrollo-hardware/temas/Tema5NormasPCB/at_download/file',
      tipo: 'Presentación',
      link:
        'https://www.dte.us.es/docencia/etsii/gii-ic/laboratorio-de-desarrollo-hardware/temas/Tema5NormasPCB/at_download/file',
    },
  ],
  glosario: [
    {
      termino: 'Circuito impreso',
      significado:
        'Circuito con diversos componentes que se obtienen por impresión sobre un soporte aislante. Conjunto formado por un circuito impreso y la base que lo soporta.',
    },
    {
      termino: 'Datos',
      significado:
        'Información sobre algo concreto que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho. Es la información dispuesta de manera adecuada para su tratamiento por una computadora. (RAE, 2021)',
    },
    {
      termino: 'Ensamble',
      significado: 'Unión de partes dentro de una placa.',
    },
    {
      termino: 'Equipos',
      significado: 'Dispositivos utilizados para realizar tareas específicas.',
    },
    {
      termino: 'Fabricación',
      significado:
        'Proceso de creación de un elemento, generalmente llamado producto, puede ser para integrarlo a otro o como un todo.',
    },
    {
      termino: 'Herramientas',
      significado:
        'Elementos utilizados para manipular otros elementos o artefactos, preferencialmente en electrónica para trabajar con los componentes o equipos.',
    },
    {
      termino: 'Manuales',
      significado:
        'Libros técnicos relacionados con la operación y/o mantenimiento de un equipo.',
    },
    {
      termino: 'Manufactura',
      significado: 'Trabajo manual o mecanizado para desarrollar un producto.',
    },
    {
      termino: 'Pista',
      significado:
        'Camino de rodadura para señales eléctricas en un dispositivo eléctrico electrónico.',
    },
    {
      termino: 'Placa',
      significado:
        'Lámina, plancha o película que se forma o está superpuesta en un objeto.',
    },
    {
      termino: 'Proveedores',
      significado:
        'Empresas o personas que proveen de un servicio o producto a otra.',
    },
    {
      termino: 'Tarjeta',
      significado:
        'Placa de circuito impreso que, como parte del equipo de una computadora u otro dispositivo electrónico, permite la realización de ciertas funciones, como audio, video, edición de gráficos, etc.',
    },
    {
      termino: 'Terminología',
      significado:
        'Términos utilizados frecuentemente en una actividad, generalmente especializada.',
    },
  ],
  referencias: [
    {
      referencia:
        'INEAF. (2021). <em>Nuevos métodos de aprovisionamiento para mejorar la productividad en la empresa.</em>',
      link:
        'https://www.ineaf.es/tribuna/gestion-y-metodos-de-aprovisionamiento/',
    },
    {
      referencia:
        'Microensamble (2016). <em>¿Qué es diseño para manufacturabilidad (DFM) en circuitos impresos?</em>',
      link: 'https://microensamble.com/diseno-manufacturabilidad-dfm/',
    },
    {
      referencia:
        'Microensamble (2016). <em>¿Cómo ordenar y diseñar circuitos impresos en formato panel para ensamble?</em>',
      link:
        'http://microensamble.com/ordenar-disenar-circuitos-impresos-formato-panel-ensamble/',
    },
    {
      referencia:
        'Real Academia de la Lengua Español (2021). <em>Diccionario.</em> RAE.',
      link: 'https://dle.rae.es/documentaci%C3%B3n?m=form',
    },
    {
      referencia: 'Wikipedia (2021). <em>Circutio impreso.</em>',
      link: 'https://es.wikipedia.org/wiki/Circuito_impreso',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Rocío Sánchez Ruiz',
          cargo: 'Experto Temático',
          centro: 'Centro de Electricidad, Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Miroslava González H.',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: '',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Gestión Industrial',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñones',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Comercio y Servicios',
        },
        {
          nombre: 'Rafael Neftalí Lizcano',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Revisión y Corrección de Estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
