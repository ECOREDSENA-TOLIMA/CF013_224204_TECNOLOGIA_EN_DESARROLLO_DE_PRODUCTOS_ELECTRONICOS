(function(e){function o(o){for(var n,i,c=o[0],s=o[1],u=o[2],d=0,l=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(o);while(l.length)l.shift()();return t.push.apply(t,u||[]),a()}function a(){for(var e,o=0;o<t.length;o++){for(var a=t[o],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(t.splice(o--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"dc8bedd2","chunk-0206bfa0":"9d64e2cb","chunk-0c047e41":"c1b5f948","chunk-13a6037e":"b6cc52b1","chunk-18f95272":"c2a5eee4","chunk-25b302c8":"26cfb7b2","chunk-26fc7596":"286ada91","chunk-2c06842c":"44a60f75","chunk-2d0c5615":"ebc1981a","chunk-2d0e96ec":"7b8875b5","chunk-2d208d90":"9c6a4a0e","chunk-2d21d0e2":"320e0a0d","chunk-2d22c123":"474e9714","chunk-2d2747e2":"55b9a2a1","chunk-2e80bb9a":"818f9add","chunk-319206de":"2b0a71fd","chunk-32334cb6":"4e06baf7","chunk-36769079":"f509823e","chunk-3c57cd7b":"d8fd3cb3","chunk-4cdd78c0":"21552dad","chunk-4f2d402a":"f52de32d","chunk-515a8379":"ad4b0488","chunk-53ccb27e":"e4c9c4d9","chunk-55d286b8":"984d19df","chunk-59974754":"4b536167","chunk-60cbc06b":"17f2bb4a","chunk-659152b8":"4c724f06","chunk-6e1e538a":"1656d117","chunk-766a929b":"4fd76fb0","chunk-c796899c":"b404a9ce","chunk-e8a7823a":"9ff4a1e8","chunk-f2df7d2c":"d2fe56d5","chunk-fde47172":"6ef31f8b",comple:"b4c3e453",creditos:"e0a862ca",glosario:"df954b33",intro:"7972ed0a",referencias:"8404b9c6",sintesis:"adac31ef",tema1:"ac78c0e7",tema2:"2781b70d",tema3:"58943be6"}[e]+".js"}function s(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var o=[],a={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1,tema3:1};i[e]?o.push(i[e]):0!==i[e]&&a[e]&&o.push(i[e]=new Promise((function(o,a){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"a6819f37","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"c821cdd6","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"8024496b","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"3d54ae59",creditos:"7a6703d5",glosario:"7948f788",intro:"31d6cfe0",referencias:"9ede62c3",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"9802a5a1"}[e]+".css",r=s.p+n,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var u=t[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===r))return o()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===n||d===r)return o()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=o,m.onerror=function(o){var n=o&&o.target&&o.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=n,delete i[e],m.parentNode.removeChild(m),a(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)o.push(n[2]);else{var t=new Promise((function(o,a){n=r[e]=[o,a]}));o.push(n[2]=t);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var l=new Error;u=function(o){d.onerror=d.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}r[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(o)},s.m=e,s.c=n,s.d=function(e,o,a){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)s.d(a,n,function(o){return e[o]}.bind(null,n));return a},s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=o,u=u.slice();for(var l=0;l<u.length;l++)o(u[l]);var m=d;t.push([0,"chunk-vendors"]),a()})({0:function(e,o,a){e.exports=a("56d7")},"12fe":function(e,o,a){e.exports=a.p+"img/nota.a9f3f626.svg"},"131c":function(e,o,a){e.exports=a.p+"img/correcto.971397c2.svg"},"417a":function(e,o,a){e.exports=a.p+"img/fondo-banner-principal.ae401f12.svg"},"52e5":function(e,o,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,o,a){"use strict";a.r(o);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("68f3"),i=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=a("2877"),u=Object(s["a"])(c,i,r,!1,null,null,null),d=u.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),m=a("8c4f"),p=a("ae58"),f=a("7e58");l["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,o){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===o.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Gestión y suministro de tarjetas para productos electrónicos",descripcionCurso:"Dentro de los aspectos contemplados en el desarrollo de productos electrónicos, se encuentra la gestión y suministro de tarjetas, en los cuales se administra y se revisa la producción, la atención al cliente y el suministro final. Por lo tanto, la manufacturación, el ensamble, las herramientas y la documentación del proceso, son fases importantes; en las que además se utiliza mucho el idioma inglés.",imagenBannerPrincipal:a("9128"),fondoBannerPrincipal:a("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-2"],imagen:a("12fe")},{clases:["banner-principal-decorativo-3"],imagen:a("afd0")},{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("131c")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Manufactura de productos electrónicos",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Conceptos básicos en manufactura de productos electrónico",hash:"t_1_1"},{numero:"1.2",titulo:"Manejo de inglés técnico",hash:"t_1_2"},{numero:"1.3",titulo:"Archivos de fabricación de productos electrónicos",hash:"t_1_3"}]},{nombreRuta:"tema2",numero:"2",titulo:"Proceso de compras",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Cadena de suministro",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Modelos de aprovisionamiento",hash:"t_3_1"},{numero:"3.2",titulo:"Variables de producción",hash:"t_3_2"},{numero:"3.3",titulo:"Escala de producción",hash:"t_3_3"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/CFA_13_224204.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Introducción",referencia:"TV Azteca Deportes. (2021). <em>¿De qué están hechas las medallas olímpicas de Tokyo 2020?</em> (Video).",tipo:"Video",link:"https://www.youtube.com/watch?v=BG57cs78JxA"},{tema:"Documentación de fabricación",referencia:"ALTIUM DESIGNER. (2017). <em>Documentación de salida para la fabricación de circuitos impresos.</em>",tipo:"PDF",link:"https://resources.altium.com/es/p/manufacturing-outputs-datasheet"},{tema:"Diseño y fabricación de PCBs",referencia:"Bellidoz, M. (2019). <em>Normas Básicas y Recomendaciones en el Diseño de PCBs.</em>",tipo:"Presentación",link:"https://www.dte.us.es/docencia/etsii/gii-ic/laboratorio-de-desarrollo-hardware/temas/Tema5NormasPCB/at_download/file"}],glosario:[{termino:"Circuito impreso",significado:"Circuito con diversos componentes que se obtienen por impresión sobre un soporte aislante. Conjunto formado por un circuito impreso y la base que lo soporta."},{termino:"Datos",significado:"Información sobre algo concreto que permite su conocimiento exacto o sirve para deducir las consecuencias derivadas de un hecho. Es la información dispuesta de manera adecuada para su tratamiento por una computadora. (RAE, 2021)"},{termino:"Ensamble",significado:"Unión de partes dentro de una placa."},{termino:"Equipos",significado:"Dispositivos utilizados para realizar tareas específicas."},{termino:"Fabricación",significado:"Proceso de creación de un elemento, generalmente llamado producto, puede ser para integrarlo a otro o como un todo."},{termino:"Herramientas",significado:"Elementos utilizados para manipular otros elementos o artefactos, preferencialmente en electrónica para trabajar con los componentes o equipos."},{termino:"Manuales",significado:"Libros técnicos relacionados con la operación y/o mantenimiento de un equipo."},{termino:"Manufactura",significado:"Trabajo manual o mecanizado para desarrollar un producto."},{termino:"Pista",significado:"Camino de rodadura para señales eléctricas en un dispositivo eléctrico electrónico."},{termino:"Placa",significado:"Lámina, plancha o película que se forma o está superpuesta en un objeto."},{termino:"Proveedores",significado:"Empresas o personas que proveen de un servicio o producto a otra."},{termino:"Tarjeta",significado:"Placa de circuito impreso que, como parte del equipo de una computadora u otro dispositivo electrónico, permite la realización de ciertas funciones, como audio, video, edición de gráficos, etc."},{termino:"Terminología",significado:"Términos utilizados frecuentemente en una actividad, generalmente especializada."}],referencias:[{referencia:"INEAF. (2021). <em>Nuevos métodos de aprovisionamiento para mejorar la productividad en la empresa.</em>",link:"https://www.ineaf.es/tribuna/gestion-y-metodos-de-aprovisionamiento/"},{referencia:"Microensamble (2016). <em>¿Qué es diseño para manufacturabilidad (DFM) en circuitos impresos?</em>",link:"https://microensamble.com/diseno-manufacturabilidad-dfm/"},{referencia:"Microensamble (2016). <em>¿Cómo ordenar y diseñar circuitos impresos en formato panel para ensamble?</em>",link:"http://microensamble.com/ordenar-disenar-circuitos-impresos-formato-panel-ensamble/"},{referencia:"Real Academia de la Lengua Español (2021). <em>Diccionario.</em> RAE.",link:"https://dle.rae.es/documentaci%C3%B3n?m=form"},{referencia:"Wikipedia (2021). <em>Circuito impreso.</em>",link:"https://es.wikipedia.org/wiki/Circuito_impreso"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del Equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales Cruz",cargo:"Responsable de Línea de Producción",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Andrés Aurelio Alarcón Tique ",cargo:"Experto Técnico ",centro:"Regional Distrito Capital Centro de Electricidad,  Electrónica y Telecomunicaciones."},{nombre:"Miroslava González Hernández ",cargo:"Diseñador y Evaluador Instruccional ",centro:"Regional Distrito Capital Centro de Gestión Industrial."},{nombre:"Sergio Augusto Ardila Córtes",cargo:"Diseñador Instruccional",centro:"Regional Tolima Centro de Comercio y Servicios"},{nombre:"Ana Catalina Córdoba Sus ",cargo:"Revisora Metodológica y Pedagógica ",centro:"Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica."},{nombre:"Rafael Neftalí Lizcano Reyes ",cargo:"Asesor Pedagógico ",centro:"Regional Santander Centro Industrial del Diseño y la Manufactura."},{nombre:"Sandra Patricia Hoyos Sepúlveda ",cargo:"Corrección de Estilo ",centro:"Regional Distrito Capital Centro de Diseño y Metrología"},{nombre:"Jhon Jairo Rodríguez Pérez ",cargo:"Diseñador y Evaluador Instruccional ",centro:"Regional Distrito Capital Centro de Diseño y Metrología."},{nombre:"Viviana Esperanza Herrera Quiñonez",cargo:"Asesora Metodológica",centro:"Regional Tolima Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"José Jaime Luis Tang Pinzón",cargo:"Diseñador Web",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Francisco Javier Vásquez Suárez",cargo:"Desarrollador Fullstack",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Storyboard e Ilustración",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oleg Litvin",cargo:"Animador ",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Cristian Mauricio Otálora Clavijo",cargo:"Actividad Didáctica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Javier Mauricio Oviedo",cargo:"Validación y Vinculación en Plataforma LMS",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Naranjo Farfán",cargo:"Validación de Contenidos Accesibles",centro:"Regional Tolima - Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});n["a"].prototype.$config=v;var k=a("9224");n["a"].prototype.$package=k,new n["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},9128:function(e,o,a){e.exports=a.p+"img/banner-princiapal.841853cb.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,o,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,o,a){},afd0:function(e,o,a){e.exports=a.p+"img/florero.70111d8c.svg"}});
//# sourceMappingURL=app.efe23760.js.map