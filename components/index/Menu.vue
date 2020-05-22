<template lang="pug">
  section.header-menu-section(v-if="openMenu")
    div.container
      div.content
        div.header-menu
            div.header-menu-block
                span.header-menu-block-title Product
                a(href='/').header-menu-block-link Get started
                a(href='/').header-menu-block-link Swap
            div.header-menu-block
                span.header-menu-block-title Company
                a(href='/').header-menu-block-link About
                a(href='/').header-menu-block-link FAQ
                a(href='https://blog.wavesplatform.com/gravity-hub').header-menu-block-link Blog
                a(href='/').header-menu-block-link Contact us
            div.header-menu-block
                span.header-menu-block-title Community
                a(href='https://twitter.com/gravity_hub').header-menu-block-link Twitter
                a(href='https://www.linkedin.com/company/gravity-hub/?viewAsMember=true').header-menu-block-link LinkedIn
                a(href='https://www.facebook.com/GravityHubOrg').header-menu-block-link Facebook
                a(href='https://medium.com/@gravity_hub').header-menu-block-link Medium
                a(href='https://t.me/gravityhuborg').header-menu-block-link Telegram
                a(href='https://www.reddit.com/user/GravityHubOrg').header-menu-block-link Reddit
            div.header-menu-block
                span.header-menu-block-title Resourses
                a(href='/').header-menu-block-link Whitepaper
                a(href='/').header-menu-block-link GitHub
                a(href='/').header-menu-block-link Security audit
                a(href='/').header-menu-block-link Privacy policy
                a(href='/').header-menu-block-link Terms of Use
        div.header-info
            div.header-info-bottom
                img.image(src='img/gravity-footer-text.svg', alt='waves')
                a(href='mailto:info@gravityhub.org').link info@gravityhub.org

</template>


<script>
import Menu from "./Menu.vue";

export default {
  props: ["openMenu"]
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media";

.header-menu-section {
  z-index: 99;
  position: absolute;
  top: 80px;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 10px;

  @include bb(endmobile, 0) {
    top: 70px;
  }

  .container {
    max-width: 1150px;
    background-color: rgba(18, 18, 25, 0.98);
    position: relative;
    padding: 80px 100px;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      border-radius: inherit;
      background: linear-gradient(to right top, #82868f, #775338, #0b2591);
      margin: -1px;
    }

    @include bb(tablet, 0) {
      padding: 40px 20px;
    }

    @include b(mobile) {
      padding: 20px 20px;
    }

    @include bb(endmobile, 0) {
      height: 83vh;
    }

    .content {
      display: grid;
      grid-template-columns: minmax(300px, 580px) minmax(280px, 280px);
      grid-gap: 30px;
      justify-content: space-between;
      height: 100%;
      width: 100%;

      @include b(mobile) {
        display: flex !important;
        flex-direction: column;
        overflow-y: scroll;
        overflow-x: hidden;
      }
    }

    .header {
      &-info {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        &-bottom {
          img {
            max-width: 210px;
            margin-bottom: 10px;

            @include bb(endmobile, 0) {
              margin-bottom: 0px;
              margin-top: 30px;
            }
          }

          .link {
            font-weight: 200;
            font-size: 23px;
            line-height: 22px;
            opacity: 0.8;
            color: white;
            margin-bottom: 15px;
            width: 100%;
            display: block;

            @include bb(endmobile, 0) {
              margin: 10px 0;
            }

            @include bb(endmobile, 0) {
              font-size: 20px;
            }

            &:hover {
              opacity: 1;
            }
          }

          .copyrights {
            font-weight: 200;
            font-size: 14px;
            line-height: 22px;
            color: white;
            opacity: 0.5;
          }
        }
      }

      &-menu {
        display: flex;
        justify-content: space-between;

        @include b(550) {
          flex-direction: column;
        }

        &-block {
          * {
            line-height: 22px;
            margin-bottom: 10px;
            display: block;
            width: max-content;
            color: white;
          }

          &-title {
            font-weight: bold;
            font-size: 14px;
          }

          &-link {
            font-weight: 200;
            font-size: 14px;
            opacity: 0.8;

            &:hover {
              color: #ff8d1f;
            }
          }
        }
      }
    }
  }
}
</style>
