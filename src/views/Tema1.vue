<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Internet
    
    .cont_1_1
      .p-5.p-lg-0(style="background-color:#3A1D71;border-radius:12px;")
        .row
          .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-up")
            figure.m-auto.col-10.col-md-7.col-lg-12
              img(src="@/assets/curso/tema1/2.svg")
          .col-lg.p-0.pe-lg-5.ps-lg-3(style="place-self:center;" data-aos="fade-down")
            p.text-white.mb-0.mt-lg-5 En la era digital, Internet se ha convertido en una herramienta esencial para la vida cotidiana, permitiendo a las personas conectarse, informarse y realizar una variedad de tareas de manera eficiente. Los navegadores, como Google Chrome y Mozilla Firefox, actúan como portales que facilitan el acceso a esta vasta red de información, presentando contenido de manera intuitiva y accesible. Complementando esta experiencia, los motores de búsqueda, como Google y Bing, permiten a los usuarios localizar información específica a través de algoritmos avanzados y palabras clave. Juntos, Internet, navegadores y buscadores forman un ecosistema interconectado que potencia el flujo de información y el conocimiento global. Conozcamos cada uno de ellos.
            .text-end
              figure
                img(src="@/assets/curso/tema1/3.svg" style="max-width:40px;display:inline;")

      p.mt-4(data-aos="fade-right") En la actualidad, Internet es una herramienta fundamental para que las personas realicen diversas tareas, las cuales pueden ir desde consultar una receta, hasta acceder a una reunión de trabajo. Sin embargo, muchos desconocen la evolución que ha tenido, su origen y la forma en que se utilizó desde su inicio.

      .row.mt-4
        .col(style="place-self:center;" data-aos="fade-right")
          .p-3(style="background-color:#FFEFAF;border-radius:12px;")
            p.mb-0 Para ampliar la información, lo invitamos a ver el video #[strong(style="color:#A854F3;") Microaprendizaje: ¿Qué es Internet?], el cual se encuentra en el material complementario.
          p.mb-0.mt-3 Ahora, vamos a llevar a cabo un breve recorrido, para conocer algunos datos importantes sobre la historia de la Internet, a través del siguiente video.
        .col-auto.d-none.d-md-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/4.svg")

      figure.mt-5(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/DmVZWhSxxAk?si=JICx7EjnW8ZqPnkr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    

          
    
 

      
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
<style lang="sass">
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 70%
  top: 15%
  background: url(../assets/curso/tema1/1.png)
  background-size: cover
  background-position: center
</style>
