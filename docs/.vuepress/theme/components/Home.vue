<template>
  <div>
    <section class="hero is-link is-fullheight has-bg-img">
      <div class="hero-body">
        <div id="heroTitle" class="container">
          <div class="columns">
            <div class="column is-full-touch is-two-thirds-table is-two-thirds-desktop">
              <p v-if="data.heroText !== null" class="title is-size-1">
                <!-- 优先级：1.data.heroText：显示docs/README.md的heroText字段。
                2.$title：显示.vuepresss/config.js内的title字段。
                3.显示'Hello' -->
                {{ data.heroText || $title || 'Hello' }}
              </p>
              <p class="subtitle is-size-2">
                <!-- 优先级：1.data.tagline：显示docs/README.md的tagline字段。
                2.$title：显示.vuepresss/config.js内的description字段。
                3.显示'Welcome to your VuePress site' -->
                {{ data.tagline || $description || 'Welcome to your VuePress site' }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-background-grey">
      <div class="container">
        <div v-if="data.storyline && data.storyline.length">
          <div :key="lineIndex" v-for="(line, lineIndex) in data.storyline">
            <div v-if="line.map && line.map.length" class="columns is-multiline is-mobile">
              <div :key="mapIndex" v-for="(mapItem, mapIndex) in line.map" class="column is-half-desktop is-half-tablet is-full-touch">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-3by1">
                      <img v-if="mapItem.mapImage" :src="$withBase(mapItem.mapImage)">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      <div class="title is-size-4">{{mapItem.title}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer has-background-grey">
      <div class="content has-text-centered">
        <img src="../image/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
      </div>
    </footer>
  </div>
  <!--<main class="home" aria-labelledby="main-title">
    <header class="hero">
      &lt;!&ndash;首页图片&ndash;&gt;
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >
      &lt;!&ndash;   标题   &ndash;&gt;
      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>
      &lt;!&ndash;   解释   &ndash;&gt;
      <p class="description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      &lt;!&ndash;首页链接   &ndash;&gt;
      <p
        class="action"
        v-if="data.actionText && data.actionLink"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>
    &lt;!&ndash; 下方三个文字   &ndash;&gt;
    <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="theme-default-content custom"/>

    &lt;!&ndash;  页脚  &ndash;&gt;
    <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div>
  </main>-->
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="scss">
  .has-bg-img {
    background: url('../image/background.jpg')center center;
    background-size:cover;
  }
  .card-image{
    padding: 1px;
  }
/*.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem*/
</style>
