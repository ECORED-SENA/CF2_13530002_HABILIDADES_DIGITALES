<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Navegadores
    
    .cont_2_1
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p Internet aporta un amplio mundo de conocimiento y de entretenimiento debido a que, en 1 (un) minuto, se crean más de 600 páginas web, lo que hace que este universo sea cada vez más y más vasto. 
          p Para poder acceder a estas páginas web y ver la información que contienen, es necesario hacerse de una herramienta digital llamada navegador, que interpreta el código de la página que se visita y lo trae a la pantalla para poder navegar e interactuar.
          .p-3(style="background-color:#AEC4FA;border-radius:12px;")
            .row
              .col-auto.d-none.d-md-block
                figure
                  img(src="@/assets/curso/tema2/2.svg")
              .col(style="place-self:center;")
                p.mb-0 Un navegador es una herramienta que permite a los usuarios de Internet, encontrar lo que desean con facilidad y realizar diferentes tareas como ver documentos, videos o el correo electrónico, entre otros.
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/3.svg")
      p.mt-4(data-aos="fade-right") Es una interfaz gráfica que permite a los internautas visualizar cualquier tipo de archivo multimedia, sin importar su localización o formato. Un navegador se encuentra en todo tipo de sistemas operativos, lo que permite que, sin ser expertos, podamos navegar por el interesante mundo de la Internet.

      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_2_1 2.1  ¿Cuáles son los navegadores más utilizados en Internet?
      
      p(data-aos="fade-right") Las personas utilizan diferentes navegadores, de acuerdo con sus características.

      .row.mt-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-9.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/4.svg")
        .col-lg-8(data-aos="fade-left")
          .p-3(style="background-color:#DEBEFB;border-radius:12px;")
            p.mb-0 Recuerde que un navegador es una herramienta que permite acceder a la información alojada en Internet, y con el cual se puede agregar, intercambiar y distribuir información. Esta data se puede manejar a través de multimedia, textos, imágenes, videos y música.
          ol.lista-ol--cuadro.mt-4
            li.d-flex 
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span.fw-bold(style="color:#12263F;") 1
              div ¿Cuáles son los más utilizados? 
            li.d-flex 
              .lista-ol--cuadro__vineta(style="background-color:#00FFDF;")
                span.fw-bold(style="color:#12263F;") 2
              div ¿Por qué los usuarios los eligen?
      
      p.mt-4.fw-bold(style="color:#8722E2;" data-aos="fade-right") Los navegadores más conocidos para realizar estas acciones son:

      .tarjeta.mt-4.cont_slyder_1(style="border-radius:0px;")
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/6.svg")
          .col-lg-8.p-0.pe-lg-4(data-aos="fade-down" style="place-self:center;")
            SlyderF(columnas="col-lg-6")
              .tarjeta.p-4.bg-white
                .row.justify-content-center
                  .col-8
                    img(src='@/assets/curso/tema2/7.svg')
                p.text-center.fw-bold.mb-0 Google Chrome
                p.text-center.fw-bold 1997
              .tarjeta.p-4.bg-white
                .row.justify-content-center
                  .col-8
                    img(src='@/assets/curso/tema2/8.svg')
                p.text-center.fw-bold.mb-0 Mozilla Firefox
                p.text-center.fw-bold 2002
              .tarjeta.p-4.bg-white
                .row.justify-content-center
                  .col-8
                    img(src='@/assets/curso/tema2/9.svg')
                p.text-center.fw-bold.mb-0 Microsoft Edge
                p.text-center.fw-bold 2015
              .tarjeta.p-4.bg-white
                .row.justify-content-center
                  .col-8
                    img(src='@/assets/curso/tema2/10.svg')
                p.text-center.fw-bold.mb-0 Safari
                p.text-center.fw-bold 2015
              .tarjeta.p-4.bg-white
                .row.justify-content-center
                  .col-8
                    img(src='@/assets/curso/tema2/11.svg')
                p.text-center.fw-bold.mb-0 Opera
                p.text-center.fw-bold 1995
    
    p.mt-4.fw-bold(style="color:#8722E2;" data-aos="fade-right") Algunos de estos navegadores vienen instalados con el sistema operativo del computador, puesto que son herramientas esenciales para el acceso a Internet. Cada usuario puede sentirse libre de utilizar el que más le guste.
    p(data-aos="fade-left") El siguiente video nos presenta un instructivo sobre cómo se trabaja en un navegador.

    figure.mt-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mt-5.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .p-4.h-100.align-content-center(style="background-color:#D6E1FD;border-radius:12px;")
          p.fw-bold(style="color:#A854F3;") Cuando se estudia sobre el navegador, es indispensable tener en cuenta las siguientes variables: seguridad, rapidez, funcionalidad y consumo.
          p.mb-0 Otro aspecto importante que se debe conocer es que, para poder utilizar motores de búsqueda y tener acceso a las direcciones URL, los navegadores se comunican con servidores web a través de un protocolo de transferencia de hipertextos.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        figure.col-9.m-auto.col-md-12
          img(src="@/assets/curso/tema2/12.svg")
      .col-lg.col-md-9(data-aos="zoom-in")
        .p-4.h-100.align-content-center(style="background-color:#FFEFAF;border-radius:12px;")
          p.mb-0 El #[strong #[em https://]] es un protocolo seguro para transferir hipertexto y viene de las siglas #[strong #[em Hypertext Transfer Protocol Secure]] (en español, Protocolo Seguro de Transferencia de Hipertexto); es un sistema de organización de datos basado en la vinculación de fragmentos textuales o gráficos de estos fragmentos, y todos ellos incluyen, en mayor parte, las siguientes características:
    
    .mt-5.cont_2_2.pb-4
      figure.pt-5(data-aos="zoom-in-up")
        img(src="@/assets/curso/tema2/13.svg" alt="Esquema general del componente formativo, que enuncia las temáticas desarrolladas y destaca aspectos clave estudiados. Tema central: navegadores y buscadores. Temas integradores: Internet, navegadores y buscadores.")
    
    p.mt-4(data-aos="fade-right") Un factor importante para conocer es que, para mantener la privacidad, por lo general los navegadores tienen formas precisas de almacenar: cookies, enlaces web y el historial, que son los datos que, para optimizar el funcionamiento de los equipos, se pueden eliminar. 
  
    .cont_2_3.mt-4
      .row
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-10.col-md-9.col-lg-12
            img(src="@/assets/curso/tema2/15.svg")
        .col-lg-7(data-aos="fade-left")
          .p-4(style="background-color:#3A1D71;border-radius:7px;")
            p.text-white También se cuenta con un tipo de navegación privada, conocida como modo incógnito, que es una función de privacidad que se encuentra en algunos navegadores. Cuando se navega en este modo, se crea una sesión provisional que no se vincula a la sesión principal del navegador, ni a los datos del usuario.
            p.mb-0.text-white Cuando se tengan claros los aspectos anteriores, se cuenta con la capacidad para seleccionar qué navegador es el que se va a utilizar para cumplir con sus necesidades.
      p.mt-4(data-aos="fade-up") Para aprender a configurar su navegador, lo invitamos a consultar el siguiente video.
    
    figure.mt-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    



    

          
    
 

      
</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: -30px
  background: url(../assets/curso/tema2/1.png)
  background-size: 100% 100%
  background-position: center bottom
.cont_slyder_1
  background: url(../assets/curso/tema2/5.png)
  background-size: 100% 100%
.slyder-f__btn i
  font-size: 2rem
  background-color: #FFCE00
  border-radius: 50%
  padding: .45rem .8rem
.cont_2_2,.cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #EDF0FC
  border-top: 40px #3A1D71 solid
.cont_2_3, .cont_2_3 *
  position: relative
.cont_2_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 90%
  bottom: 0
  background: url(../assets/curso/tema2/14.png)
  background-size: 100% 100%
  background-position: bottom
@media screen and (max-width: 992px)
  .cont_slyder_1, .cont_2_1:before,.cont_2_2:before,.cont_2_3:before
    background-size: cover
</style>
