<template lang="pug">
  div
    section.hero.is-link.is-fullheight.has-bg-img
      .hero-body
        .container.heroContainer
          .columns
            .column.is-full-touch.is-two-thirds-tablet.is-three-fifths-desktop
              p.title.is-size-1-desktop(v-if='data.heroText !== null')
                //
                  优先级：1.data.heroText：显示docs/README.md的heroText字段。
                  2.$title：显示.vuepresss/config.js内的title字段。
                  3.显示'Hello'
                | {{ data.heroText || $title || &apos;Hello&apos; }}
              p.subtitle.is-size-2-desktop
                //
                  优先级：1.data.tagline：显示docs/README.md的tagline字段。
                  2.$title：显示.vuepresss/config.js内的description字段。
                  3.显示'Welcome to your VuePress site'
                | {{ data.tagline || $description || &apos;Welcome to your VuePress site&apos; }}
    section.section.has-background-black
      .container
        div(v-if='data.storyline && data.storyline.length')
          div(:key='lineIndex', v-for='(lineItem, lineIndex) in data.storyline')
            #lever.level
              .level-item.is-divider
              .storyline.has-text-centered
                figure.image.is-96x96.has-text-centered.container
                  img(v-if='lineItem.storylineLogo', :src='$withBase(lineItem.storylineLogo)')
                .title.has-text-white.is-center.storylineName {{lineItem.storylineName}}
              .level-item.is-divider
            .columns.is-multiline.is-mobile.is-variable.is-8-desktop(v-if='lineItem.map && lineItem.map.length')
              .column.is-half-desktop.is-half-tablet.is-full-touch(:key='mapIndex', v-for='(mapItem, mapIndex) in lineItem.map')
                page-link(:action-link='mapItem.actionLink')
                  .card
                    .card-image
                      figure.image.container.is-3by1
                        img.loadingScreen(v-if='mapItem.mapImage', :src='$withBase(mapItem.mapImage)')
                    .card-content
                      .content
                        .title.is-size-4-desktop.is-size-4-tablet.is-size-5-touch {{mapItem.title}}
    footer.footer.has-background-black
      .content.has-text-centered
        a(href='https://bulma.io')
          img(src='../image/made-with-bulma.png', alt='Made with Bulma', width='128', height='24')
        br
        span.has-text-grey-light Front-end Developer :
        a.has-text-grey-light(href='https://github.com/NeroBlackstone') GitHub_NeroBlackstone
        br
        span.has-text-grey-light Front-end Designer :
        a.has-text-grey-light(href='https://space.bilibili.com/317536') Bilibili_DragonGJY

</template>

<script>
  import NavLink from '@theme/components/NavLink.vue'
  import PageLink from "./PageLink";

  export default {
  components: {PageLink, NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="scss">
  .card{
    border-radius:10px;
  }
  .has-bg-img {
    background: url('../image/background.jpg')center center;
    background-size:cover;
  }
  .card-image{
    padding: 1px;
  }
  .loadingScreen{
    border-radius:10px 10px 0 0;
  }
  .heroContainer{
    margin-top: auto;
  }
  .storyline{
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .storylineName{
    letter-spacing:5pt;
    margin-top: 12px;
  }
  #lever{
    margin-top: 24px;
  }
</style>
