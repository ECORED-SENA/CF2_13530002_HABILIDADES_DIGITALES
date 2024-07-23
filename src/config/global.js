export default {
  global: {
    componenteFormativo: 'Navegadores y buscadores',
    descripcionCurso:
      'En el presente componente formativo exploraremos los conceptos fundamentales y herramientas esenciales para el uso efectivo de la tecnología y el Internet. Este módulo está diseñado para proporcionar una base sólida en el conocimiento de las tecnologías de la información y la comunicación (TIC), con un enfoque práctico y accesible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Internet',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Navegadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Cuáles son los navegadores más utilizados en Internet?',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buscadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '¿Cuáles son los buscadores más utilizados?',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Truncamientos y operadores booleanos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Recomendaciones para la búsqueda de recursos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Tipos de licencia, referencias y recomendaciones para el uso de recursos',
            hash: 't_3_4',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/13530002_CF02_DU.pdf',
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
      tema: 'Internet',
      referencia:
        'Educar Portal. (2019). <em>Microaprendizaje: ¿Qué es internet?</em> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-JVdH8ne-2s',
    },
    {
      tema: 'Buscadores',
      referencia:
        'Ministerio TIC Colombia (2014). <em>¿Cómo realizar una búsqueda exitosa en Gooble?</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zWM2HoncrVk',
    },
  ],
  glosario: [
    {
      termino: 'Android',
      significado:
        'sistema operativo que usan los teléfonos móviles y está basado en Linux.',
    },
    {
      termino: 'Raspberry',
      significado:
        'dispositivo embebido con una placa base emulando un computador de bajo costo para aplicaciones específicas. ',
    },
    {
      termino: 'TIC',
      significado: 'acrónimo de Tecnologías de la Información y Comunicación.',
    },
    {
      termino: 'Wifi',
      significado:
        'es una marca comercial que también es usada para designar a las tecnologías de red sin cable (Moreira, 2011). ',
    },
  ],
  referencias: [
    {
      referencia:
        'Atzori, L., Iera, A. y Morabito, G., (2017) Understanding the internet of things: Definition, Potentials, And Societal Role of a Fast-Evolving Paradigm Ad Hoc Networks, 56, 122-140. ',
      link: '',
    },
    {
      referencia:
        'Castro, S., Medina, B. y Camargo, L., (2016) Supervisión y Control Industrial a través de Teléfonos Inteligentes Usando un Computador de Placa Única Raspberry Pi Inf. Tecnol. 27(2), 121-130.',
      link: '',
    },
    {
      referencia:
        'Eines, Mónica E.; Aranda, Nélida Inés y Amilivia, Luis Alberto. (2018) Las Píldoras de Contenidos. Rev. iberoam. tecnol. educ. educ. tecnol, n.21, pp.15-23. ISSN 1851-0086.',
      link: '',
    },
    {
      referencia:
        'Moreira, Gislene (2011). Democracia WiFi: Dinámicas de la política y la comunicación en la era digital. Quórum Académico, 8(2),183-208ISSN: 1690-7582',
      link:
        'https://biblat.unam.mx/es/revista/quorum-academico/articulo/democracia-wifi-dinamicas-de-la-politica-y-la-comunicacion-en-la-era-digital',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhonaimer Díaz Cerquera',
          cargo: 'Experto Temático',
          centro:
            'Centro de Desarrollo Agroempresarial y Turístico - Regional Huila',
        },
        {
          nombre: 'Miguel Ricardo Rivera Lizcano',
          cargo: 'Experto Temático',
          centro: 'Dirección General',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
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
