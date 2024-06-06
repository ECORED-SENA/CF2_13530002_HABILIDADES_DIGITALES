<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.col-9.col-md-8.col-lg-12.m-auto
            img(src="@/assets/curso/intro2.svg")
        .col-lg-7(data-aos="fade-left")
          .p-3(style="background-color:#D6E1FD;border-radius:12px;")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/intro3.svg")
              .col(style="place-self:center;")
                p.mb-0 Bienvenido al presente componente formativo, donde:
          ul.lista-ul.mt-4
            li.d-flex
              i.fas.fa-code(style="color:#8722E2;")
              div Exploraremos qué es Internet, su origen, evolución y cómo ha transformado la forma en que vivimos y trabajamos.
            li.d-flex
              i.fas.fa-code(style="color:#8722E2;")
              div Definiremos qué es un navegador, su importancia y cómo nos permite acceder a la vasta información disponible en la web.
            li.d-flex
              i.fas.fa-code(style="color:#8722E2;")
              div Conoceremos los navegadores más utilizados en Internet, sus características y por qué los usuarios los prefieren.
            li.d-flex
              i.fas.fa-code(style="color:#8722E2;")
              div Abordaremos qué son los motores de búsqueda, cómo funcionan y cuáles son los más populares en el contexto actual.
            li.d-flex
              i.fas.fa-code(style="color:#8722E2;")
              div Aprenderemos técnicas avanzadas de búsqueda, como el uso de truncamientos y operadores booleanos, para mejorar la precisión y eficiencia de nuestras consultas en línea.
            li.d-flex
              i.fas.fa-code(style="color:#8722E2;")
              div Proporcionaremos consejos y estrategias para realizar búsquedas efectivas y obtener resultados relevantes.
            li.d-flex
              i.fas.fa-code(style="color:#8722E2;")
              div Discutiremos las diferentes licencias de uso de contenido digital y ofreceremos recomendaciones para el uso ético y legal de recursos en línea.

      .p-4.mt-4(style="background-color:#FFEFAF;border-radius:12px;" data-aos="zoom-in")
        p Este recorrido a través de los temas clave, le permitirá adquirir las habilidades y el conocimiento necesarios para navegar y utilizar Internet de manera segura y eficiente, optimizando así su experiencia digital.
        p.fw-bold.mb-0 Muchos éxitos en este proceso de aprendizaje.


    


    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro, .cont_intro *
  position: relative
.cont_intro:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 90%
  bottom: -10%
  background: url(../assets/curso/intro1.png)
  background-size: cover
  background-position: center
</style>
