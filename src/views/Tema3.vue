<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Buscadores
    
    .cont_3_1
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p Siempre estamos buscando diferentes tipos de información por Internet, como por ejemplo: textos, audios, videos o imágenes, entre muchos otros; para llevar a cabo esta búsqueda, vamos a necesitar un buscador de Internet el cual es un mecanismo que permite acceder a distintos tipos de información a partir de palabras clave.
          .p-3(style="background-color:#DEBEFB;border-radius:12px;")
            .row
              .col-auto.d-none.d-md-block
                figure
                  img(src="@/assets/curso/tema3/2.svg")
              .col(style="place-self:center;")
                p.mb-0 De acuerdo con lo descrito por Simone Catania (2019), el trabajo de los motores de búsqueda se puede dividir en tres fases:
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema3/3.svg")
      
      .row.mt-5
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema3/4.svg")
        .col-lg-9(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Análisis")
              p La primera fase es realizada por programas llamados #[em Spider], Robot o #[em Crawler]. Escanean la web de forma metódica y automatizada. Sus resultados crean el índice general de Internet.
            .row.col-xl-11.m-auto(titulo="Catalogación")
              p Las páginas seleccionadas por los rastreadores se guardan, y se analiza la parte textual, que se toma como base para proporcionar la respuesta a los usuarios. Este último paso requiere la capacidad de los motores de búsqueda, para ordenar los sitios, con base en los datos por relevancia.
            .row.col-xl-11.m-auto(titulo="Respuesta")
              p Aquí entra en juego la palabra clave, utilizada por el usuario, junto con los criterios únicos para cada motor de búsqueda, tales como: cuántas veces se repite la palabra clave, la cantidad y la calidad de los enlaces entrantes y también el número de usuarios que visitan la página. Comprender cómo funcionan los motores de búsqueda y mejorar el posicionamiento en la SERP (página de resultados de motores de búsqueda), es uno de los objetivos del SEO, uno de los principales métodos de medición del #[em marketing] en línea.
      
      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_3_1 3.1  ¿Cuáles son los buscadores más utilizados?
      
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p En Internet se puede encontrar una gran variedad de buscadores pero, para ser más puntuales, se mencionan algunos de los más usados en Colombia para el año 2020, donde, según el portal web NETMARKETSHARE, el servicio online de estadísticas sobre la distribución y el reparto del mercado de navegadores, sistemas operativos y buscadores, en ordenadores personales, tabletas y teléfonos móviles, Google es el navegador más utilizado por los colombianos, seguido de Baidu, DuckDuckGo, AOL, Bing, Ask, Yahoo!, Yandex, Qwant, Ecosia.
          .p-3(style="background-color:#D6E1FD;border-radius:12px;")
            .row
              .col-auto.d-none.d-md-block
                figure
                  img(src="@/assets/curso/tema3/5.svg")
              .col(style="place-self:center;")
                p.mb-0 De acuerdo con lo anterior, existen varias opciones de motores de búsqueda, y cada una de ellas cuenta con características y opciones que permiten acceder, a la información solicitada, de manera efectiva. Elija el buscador que mejor se adapte al contenido que desea encontrar.
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema3/6.svg")
      
      p.mt-4(data-aos="fade-right") Para aprender cómo se realiza una búsqueda exitosa a través de uno de los navegadores estudiados anteriormente, lo invitamos a consultar el video #[strong(style="color:#A854F3;") ¿Cómo realizar una búsqueda exitosa en Google?], el cual se encuentra en el material complementario.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2  Truncamientos y operadores booleanos
    
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Todos, en algún momento hemos deseado saber cómo llevar a cabo búsquedas más eficientes o cómo filtrar la información en las búsquedas que realizamos.
        .p-4(style="background-color:#DEBEFB;border-radius:12px;")
          p.mb-0 Cuando se utilizan motores de búsqueda para lo que sea que se necesite buscar (investigación, curiosidades, elaborar un documento, encontrar una herramienta digital para satisfacer una necesidad), siempre, en los resultados de la búsqueda, se encontrará información extra; por ejemplo, si se busca la palabra gatos, en menos de 1 segundo pueden aparecer cerca de 412.000.000 resultados; entonces, existe la posibilidad de utilizar una técnica para encontrar la información correcta, en bases de datos y en sitios web, obteniendo resultados que sean más exactos, y es aquí donde entran a cooperar, el truncamiento y los operadores booleanos.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/6.svg")
    
    .cont_decorativo.mt-5(data-aos="flip-up" style="max-width:fit-content;")
      .row
        .col-auto.ps-3.pe-0
          figure
            img(src="@/assets/curso/tema3/8.svg")
        .col.pe-4(style="place-self:end;")
          h3.text-white.mb-0.pb-2 ¿Qué es el truncamiento?
    
    p.mt-4(data-aos="fade-right") Son operadores que, al hacer uso de ellos, permiten ampliar una búsqueda; se ubican a la derecha o a la izquierda de un término, sustituyendo uno o varios caracteres; se utilizan cuando sea necesario localizar los términos derivados de la palabra a buscar: prefijos, sufijos, variantes léxicas, etc. Estos operadores son:

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.p-lg-5.cont_figura1(style="background-color:#0B47DB;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema3/9.svg" style="max-width:120px;display:inline;")
          p.mt-4.mb-0.text-center.text-white El asterisco (*) representa a cualquier grupo de caracteres, incluida la ausencia de caracteres.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.p-lg-5.cont_figura1(style="background-color:#0B47DB;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema3/10.svg" style="max-width:120px;display:inline;")
          p.mt-4.mb-0.text-center.text-white El signo de interrogación (?) representa a cualquier caracter único.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.p-lg-5.cont_figura1(style="background-color:#0B47DB;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema3/11.svg" style="max-width:120px;display:inline;")
          p.mt-4.mb-0.text-center.text-white El signo ($) representa la presencia de un caracter o la ausencia de caracteres.
    
    .cont_3_2.mt-5
      .col-xl-10.m-auto
        .p-2.mb-4(style="background-color:#D6E1FD;border-radius:7px;" data-aos="zoom-in")
          .row
            .col-auto.ps-4.pe-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/13.svg")
            .col
              .p-2.bg-white(style="border-radius:9px;")
                h5.mb-0 Truncamiento derecho (fortalece*) le permite recuperar variaciones a la derecha de un término.
            .col-auto.pe-4.ps-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/14.svg")
        .p-2.mb-4(style="background-color:#D6E1FD;border-radius:7px;" data-aos="zoom-in")
          .row
            .col-auto.ps-4.pe-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/13.svg")
            .col
              .p-2.bg-white(style="border-radius:9px;")
                h5.mb-0 Truncamiento izquierdo (*fortalece) le permite recuperar variaciones a la izquierda de un término.
            .col-auto.pe-4.ps-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/14.svg")
        .p-2(style="background-color:#D6E1FD;border-radius:7px;" data-aos="zoom-in")
          .row
            .col-auto.ps-4.pe-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/13.svg")
            .col
              .p-2.bg-white(style="border-radius:9px;")
                h5.mb-0 “?” representa un solo carácter en una palabra, con el objetivo de obtener varias formas de esta.
            .col-auto.pe-4.ps-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/14.svg")
      
      .cont_decorativo.mt-5(data-aos="flip-up" style="max-width:fit-content;")
        .row
          .col-auto.ps-3.pe-0
            figure
              img(src="@/assets/curso/tema3/8.svg")
          .col.pe-4(style="place-self:end;")
            h3.text-white.mb-0.pb-2 ¿Qué son los operadores booleanos?
    
    p.mt-4(data-aos="fade-right") Los operadores booleanos (también conocidos como operadores lógicos), son palabras o símbolos que se utilizan para crear estrategias de búsqueda en bases de datos y buscadores; permiten ser eficientes y filtrar los resultados de búsqueda solamente a la información relevante, bajo el contexto de la búsqueda. Sus estrategias sirven para conectar palabras o frases dentro de un contexto.
    p.fw-bold(data-aos="fade-left" style="color:#8722E2;") Como ejemplo, vamos a ver lo que se obtiene en una búsqueda con operadores booleanos como AND, OR o NOT. 

    .row.mt-4.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.p-lg-5(style="background-color:#3A1D71;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema3/15.svg" style="max-width:120px;display:inline;")
          p.mt-4.mb-0.text-center.text-white AND (Y)
          p.mb-0.text-center.text-white TEXTO1 #[strong(style="color: #00FFDF !important;") AND] TEXTO2
          p.mb-0.text-center.text-white Quiere decir que incluya amobos términos.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.p-lg-5(style="background-color:#3A1D71;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema3/16.svg" style="max-width:120px;display:inline;")
          p.mt-4.mb-0.text-center.text-white OR (O)
          p.mb-0.text-center.text-white TEXTO1 #[strong(style="color: #00FFDF !important;") OR] TEXTO2
          p.mb-0.text-center.text-white Esta estrategia muestra los resultados que incluyan cualquiera de los dos términos o los dos a la vez.

      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.p-lg-5(style="background-color:#3A1D71;border-radius:15px;")
          figure.text-center
            img(src="@/assets/curso/tema3/17.svg" style="max-width:120px;display:inline;")
          p.mt-4.mb-0.text-center.text-white NOT (NO)
          p.mb-0.text-center.text-white TEXTO1 #[strong(style="color: #00FFDF !important;") NOT] TEXTO2
          p.mb-0.text-center.text-white Esta estrategia excluye el segundo término y muestra resultados del primero.
    
    p.mt-4(data-aos="fade-right") Se puede utilizar #[strong(style="color:#8722E2;") AND] para buscar varios términos y que el resultado de la búsqueda, incluya ambos términos así:

    .cont_3_3.mt-4
      .col-xl-10.m-auto
        .p-2.mb-4(style="background-color:#D6E1FD;border-radius:7px;" data-aos="zoom-in")
          .row
            .col-auto.ps-4.pe-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/13.svg")
            .col
              .p-2.bg-white(style="border-radius:9px;")
                h5.mb-0 Arquitectura AND diseño
            .col-auto.pe-4.ps-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/14.svg")
      p.mb-4(data-aos="fade-right") El operador #[strong(style="color:#8722E2;") OR] se puede utilizar si se quiere encontrar relación entre varios términos que se desconocen, como por ejemplo:

      .col-xl-10.m-auto
        .p-2.mb-4(style="background-color:#D6E1FD;border-radius:7px;" data-aos="zoom-in")
          .row
            .col-auto.ps-4.pe-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/13.svg")
            .col
              .p-2.bg-white(style="border-radius:9px;")
                h5.mb-0 Café OR salud
            .col-auto.pe-4.ps-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/14.svg")
      p.mb-4(data-aos="fade-right") El operador #[strong(style="color:#8722E2;") NOT] reduce considerablemente los resultados de la búsqueda, porque excluye un término, como por ejemplo:

      .col-xl-10.m-auto
        .p-2(style="background-color:#D6E1FD;border-radius:7px;" data-aos="zoom-in")
          .row
            .col-auto.ps-4.pe-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/13.svg")
            .col
              .p-2.bg-white(style="border-radius:9px;")
                h5.mb-0 América NOT fútbol
            .col-auto.pe-4.ps-2(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema3/14.svg")

      .row.mt-5.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="fade-right")
          .h-100.p-4(style="background-color:#3A1D71;border-radius:10px;")
            .row
              .col-auto.d-none.d-md-block
                figure
                  img(src="@/assets/curso/tema3/19.svg")
              .col(style="place-self:center;")
                p.fw-bold.mb-1(style="color:#00FFDF;") Nota:
                p.mb-0.text-white Se debe tener presente que, los anteriores, no son los únicos operadores y que también se utilizan símbolos para mejorar la búsqueda.
        .col-lg.col-md-9(data-aos="fade-left")
          .h-100.p-4(style="background-color:#D6E1FD;border-radius:10px;")
            p.mb-0 Ahora ya conoce algunos de los operadores, recuerde que tiene a la mano unos operadores muy sencillos que le permitirán realizar consultas más precisas. Ya no tendrá que hacerlo como antes, escribir la consulta y filtrar entre los millones de páginas, la información que necesitaba.
    
    p.mt-5(data-aos="fade-right") El siguiente video le va a despejar las dudas que le hayan quedado durante el estudio de la temática sobre los buscadores.

    figure.mt-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_3 3.3 Recomendaciones para la búsqueda de recursos
    
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p ¿Alguna vez le ha sucedido que ha intentado buscar una información muy específica, pero los resultados obtenidos son muy diferentes a lo que realmente esperaba encontrar?
        .p-3(style="background-color:#AEC4FA;border-radius:12px;")
          .row
            .col-auto.d-none.d-md-block
              figure
                img(src="@/assets/curso/tema3/20.svg")
            .col(style="place-self:center;")
              p.mb-0 Cuando se realizan búsquedas por Internet, es importante tomar en cuenta algunas recomendaciones que permitan obtener el resultado esperado y que sean realmente exitosas.
        p.mt-4.fw-bold(style="color:#8722E2;") ¿Cuáles son estas recomendaciones que se deben tener en cuenta? Se pueden resumir en pocos pasos:
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-8.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/21.svg")
    
    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/22.svg")
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.col-xl-11.m-auto(titulo="Paso 1")
            p Definir y acortar lo que necesitamos consultar.
          .row.col-xl-11.m-auto(titulo="Paso 2")
            p Elegir el (los) recurso(s), es decir, la plataforma que se va a utilizar en la búsqueda, teniendo en cuenta el tipo de contenido que se desea obtener como respuesta.
            p Si busco un contenido multimedia, como una imagen o video, podría utilizar Pixabay (https://pixabay.com/es/), donde puedo encontrar millones de imágenes gratuitas y videos con licencia CC. Pero, si lo que quiero consultar es algo académico, utilizo Google Académico o Google Scholar, como se le conoce en inglés, que es una base de datos de búsqueda de noticias, revistas académicas, ensayos, etc.
            p Se pueden tener a la mano algunas bases de datos, según el tipo de consulta que se va a realizar. 
          .row.col-xl-11.m-auto(titulo="Paso 3")
            p Para que la consulta sea más eficiente, se debe analizar la plataforma que se va a utilizar para la búsqueda y reconocer los botones, entre ellos el de filtrado.
          .row.col-xl-11.m-auto(titulo="Paso 4")
            p Utilizar una estrategia de búsqueda, como operadores booleanos o truncamiento, combinarlos con las palabras clave y obtener mayor precisión a la hora de realizar una búsqueda.
    
    p.mt-4.fw-bold(style="color:#8722E2;") Si no encuentra lo que se quiere buscar. ¡Realice el procedimiento nuevamente!

    .p-5.p-lg-0.cont_fondo1(style="background-color:#3A1D71;border-radius:12px;")
      .row
        .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-up")
          figure.m-auto.col-10.col-md-7.col-lg-12
            img(src="@/assets/curso/tema3/23.svg")
        .col-lg.p-0.pe-lg-5.ps-lg-3(style="place-self:center;" data-aos="fade-down")
          p.text-white.mb-0 Lo invitamos a conocer el Sistema de Bibliotecas SENA, un sitio muy completo donde se pueden encontrar recursos digitales en línea suscritos por el SENA, de libre acceso, en diferentes disciplinas (salud, agricultura, biología, legislatura, administración, emprendimiento, entre otros) y en diferentes formatos (texto, audio, video, imagen).
    
    .row.mt-5
      .col(data-aos="fade-right")
        p Recuerde que las consultas solo estarán disponibles para la comunidad SENA y que, para ingresar, se debe incluir su usuario y su contraseña. Si lo desea, también puede consultarlos a través de la plataforma de descubrimiento IRIS, donde, de manera centralizada, encontrará infinidad de recursos con información que le será útil y podrá practicar las estrategias de búsqueda que quiera.
        a.anexo(href="https://biblioteca.sena.edu.co/paginas/bases.html" target="_blank" style="max-width:fit-content;")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web.] https://biblioteca.sena.edu.co/paginas/bases.html
      .col-auto.d-none.d-md-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/25.svg")
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_4 3.4 Tipos de licencia, referencias y recomendaciones para el uso de recursos
    
    .cont_3_4
      .row
        .col(style="place-self:center;")
          p.mb-0 Las páginas web que encontramos alojadas en Internet, están compuestas por imágenes, texto, animaciones, videos, sonidos, entre otros formatos. Todos estos contenidos digitales son creaciones de terceras personas y están sujetos a unas condiciones o limitaciones de uso, las que son definidas, por su autor, con la licencia elegida para ser publicada posteriormente. Esta licencia, en su expresión básica la conocemos como:
        .col-auto.d-none.d-md-block
          figure
            img(src="@/assets/curso/tema3/27.svg")
      
      .row.mt-4
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema3/28.svg")
        .col-lg-9(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Copyright")
              p Este tipo de licencia limita la utilización del contenido digital, como también su modificación y distribución. Es una licencia restringida; si un tercero desea utilizar el contenido, requiere de la autorización del autor y, en la mayoría de los casos, se paga por su uso.
            .row.col-xl-11.m-auto(titulo="Copyleft")
              p Los contenidos digitales que tienen este tipo de licencia, permiten usar, copiar y redistribuir una obra y sus versiones derivadas simplemente reconociendo su autoría. En esencia, es el sistema opuesto al Copyright y no exige autorización del autor para su uso.
      
      .p-3.mt-4(style="background-color:#FFEFAF;border-radius:12px;" data-aos="zoom-in")
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema3/29.svg")
          .col(style="place-self:center;")
            p.mb-0 Una de las licencias derivadas de Copyleft es la conocida como #[em Creative Commons], se utiliza en todo tipo de contenidos en internet y la podemos identificar con el símbolo CC dentro de un círculo.
    
    .row.mt-4
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/30.svg")
      .col(style="place-self:center;" data-aos="fade-left")
        p.fw-bold(style="color:#8722E2;") Realicemos un ejemplo en el que se aplique lo estudiado:
        p.mb-0 Supongamos que se necesita un video sobre salud mental en tiempos de Covid-19 y que sea de distribución gratuita. Para obtenerlo, se accede a YouTube y se realizan los siguientes pasos:
    
    .cont_3_5.mt-5.pt-4.pb-4.pt-lg-5.pb-lg-5
      .tarjeta.p-4.p-lg-5.pb-lg-4.bg-white
        SlyderA(tipo="b")
          .row
            .col-lg-7.mb-4.mb-lg-0
              h5(style="color:#8722E2;") Paso 1
              ul.lista-ul.mt-4
                li.d-flex
                  i.fas.fa-code(style="color:#8722E2;")
                  div Lo primero que se hace es escribir en la caja de búsqueda lo que se desea encontrar; en este caso se trata de salud mental en tiempos de Covid-19.
                li.d-flex
                  i.fas.fa-code(style="color:#8722E2;")
                  div Aparecen unos resultados que coinciden con lo introducido en la búsqueda.
            .col-lg-5
              figure.m-auto.col-12.col-md-9.col-lg-12
                img(src='@/assets/curso/tema3/32.svg')
          .row
            .col-lg-7.mb-4.mb-lg-0
              h5(style="color:#8722E2;") Paso 2
              p.mt-4 Lo segundo que se hace es presionar la opción de filtrar.
              p En esta ventana de opciones, se elige, en la categoría de características, la opción #[em Creative Commons].
            .col-lg-5
              figure.m-auto.col-12.col-md-9.col-lg-12
                img(src='@/assets/curso/tema3/33.svg')
          .row
            .col-lg-7.mb-4.mb-lg-0
              h5(style="color:#8722E2;") Paso 3
              p.mt-4 Como tercer paso, se elige el video que se quiere dentro de los que se filtraron en la búsqueda, y que cumpla con la característica CC.
            .col-lg-5
              figure.m-auto.col-12.col-md-9.col-lg-12
                img(src='@/assets/curso/tema3/34.png')

    .p-3.mt-4(style="background-color:#AEC4FA;border-radius:12px;" data-aos="zoom-in")
      .row
        .col-auto.d-none.d-md-block
          figure
            img(src="@/assets/curso/tema3/35.svg")
        .col(style="place-self:center;")
          p.mb-0 Es importante hacer el reconocimiento de la autoría del video y de cualquier contenido que se encuentre ligado a la licencia CC; si es posible, se puede hacer una donación a los creadores del contenido y agradecer por los recursos digitales que aportan.


      
</template>

<script>
export default {
  name: 'Tema3',
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
<style lang="sass">
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: -30px
  background: url(../assets/curso/tema3/1.png)
  background-size: 100% 100%
  background-position: center bottom
.acordion__accion__btn--a
  background-color: #FCA651
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,.3)
.acordion .tarjeta--azul
  background-color: #3A1D71
.acordion .tarjeta--azul h3
  color: #fff
.acordion .tarjeta.tarjeta--azul.acordion__activo
  background-color: #EAD6FC
.acordion .tarjeta.tarjeta--azul.acordion__activo h3
  color: #12263F
.cont_decorativo, .cont_decorativo *
  position: relative
.cont_decorativo:before
  content: ''
  width: 100%
  height: 80%
  bottom: 0
  position: absolute
  border-radius: 6px
  background: rgb(119,55,240)
  background: linear-gradient(180deg, rgba(119,55,240,1) 0%, rgba(41,17,85,1) 100%)
.cont_figura1
  transition: all .5s ease-in-out
  cursor: pointer
.cont_figura1:hover
  background-color: #3A1D71 !important
.cont_3_2, .cont_3_2 *
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 85%
  bottom: 15px
  background: url(../assets/curso/tema3/12.png)
  background-size: 100% 100%
  background-position: center bottom
.cont_3_3, .cont_3_3 *
  position: relative
.cont_3_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 65%
  bottom: 70px
  background: url(../assets/curso/tema3/18.png)
  background-size: 100% 100%
  background-position: center bottom
.cont_fondo1
  background: url(../assets/curso/tema3/24.png)
  background-size: 100% 100%
.cont_3_4, .cont_3_4 *
  position: relative
.cont_3_4:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 90%
  bottom: 40px
  background: url(../assets/curso/tema3/26.png)
  background-size: 100% 100%
  background-position: center bottom
.cont_3_5, .cont_3_5 *
  position: relative
.cont_3_5:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/31.png)
  background-size: 100% 100%
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #F0C518
  opacity: 1
.slyder-a__bullets__item--active
  background-color: #A854F3 !important
  border-color: #A854F3 !important
.slyder-a__bullets__item
  background-color: #E1C3FB
  border-color: #E1C3FB
@media screen and (max-width: 992px)
  .cont_3_1:before, .cont_3_2:before, .cont_3_3:before, .cont_3_4:before, .cont_3_5:before
    background-size: cover
  .cont_fondo1
    background-size: cover
</style>
