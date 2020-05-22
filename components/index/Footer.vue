<template lang="pug">
  footer
    .container
        div.footer-info
            span.logo
            div.footer-info-bottom
                img.image(src='img/gravity-footer-text.svg', alt='waves')
                a(href='mailto:info@gravityhub.org').link info@gravityhub.org
                span.copyrights © 2020 Gravity Hub. Made with <span class="icon-like">❤︎</span> in Saint Petersburg
        div.footer-menu
            div.footer-menu-block
                span.footer-menu-block-title Product
                a(href='/').footer-menu-block-link Get started
                a(href='/').footer-menu-block-link Swap
            div.footer-menu-block
                span.footer-menu-block-title Company
                a(href='/').footer-menu-block-link About
                a(href='/').footer-menu-block-link FAQ
                a(href='https://blog.wavesplatform.com/gravity-hub').footer-menu-block-link Blog
                a(href='/').footer-menu-block-link Contact us
            div.footer-menu-block
                span.footer-menu-block-title Community
                a(href='https://twitter.com/gravity_hub').footer-menu-block-link Twitter
                a(href='https://www.linkedin.com/company/gravity-hub/?viewAsMember=true').footer-menu-block-link LinkedIn
                a(href='https://www.facebook.com/GravityHubOrg').footer-menu-block-link Facebook
                a(href='https://medium.com/@gravity_hub').footer-menu-block-link Medium
                a(href='https://t.me/gravityhuborg').footer-menu-block-link Telegram
                a(href='https://www.reddit.com/user/GravityHubOrg').footer-menu-block-link Reddit
            div.footer-menu-block
                span.footer-menu-block-title Resourses
                a(href='/').footer-menu-block-link Whitepaper
                a(href='/').footer-menu-block-link GitHub
                a(href='/').footer-menu-block-link Security audit
                a(href='/').footer-menu-block-link Privacy policy
                a(href='/').footer-menu-block-link Terms of Use
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media";

footer {
  z-index: 1;
  margin-top: -100px;
  position: relative;

  @include b(tablet) {
    margin-top: 0px;
  }

  .container {
    max-width: 1300px;
    display: grid;
    grid-template-columns: minmax(300px, 370px) minmax(300px, 750px);
    grid-gap: 30px;
    justify-content: space-between;
    background: url("~static/img/bg-footer.png") no-repeat left -60px / contain;
    padding: 50px 10px;

    @include bb(tablet, 0) {
      grid-template-columns: repeat(2, 1fr);
      padding: 50px 100px;
    }

    @include b(mobile) {
      display: flex !important;
      flex-direction: column;
      background: none;
      padding: 50px 20px;
    }

    @include bb(endmobile, 0) {
      padding: 10px 20px 50px 20px;
    }

    .footer {
      &-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .logo {
          @include bb(endmobile, 0) {
            width: 150px;
            height: 70px;
          }
        }

        &-bottom {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .image {
            max-width: max-content;
            margin-bottom: 20px;
            margin-top: 20px;

            @include b(mobile) {
              margin: 20px 0 10px 0;
            }
          }

          .link {
            font-weight: 200;
            font-size: 23px;
            line-height: 22px;
            opacity: 0.8;
            color: white;
            margin-bottom: 15px;

            @include b(mobile) {
              margin: 20px 0;
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

        @include bb(tablet, 0) {
          justify-content: center;
        }

        &-block {
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(4) {
            @include b(tablet) {
              display: none;
            }
          }

          &:nth-child(3) {
            @include b(tablet) {
              .footer-menu-block-title {
                display: none;
              }
            }

            @include b(mobile) {
              display: none;
            }
          }

          * {
            line-height: 22px;
            margin-bottom: 15px;
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
            font-size: 16px;
            opacity: 0.8;

            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
