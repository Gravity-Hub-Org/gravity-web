<template lang="pug">
  section.block.block-watching
    div.container-content
      div.block-image
        img.block-image-wrap(src='img/watching.png', alt='watching data')
        div.block-image-text
          div.block-image-text-wrap
            p.text Gravity is easy to set up: in order to start monetising your infrastructure via the Gravity network, you can simply pay a deposit in any of the supported native tokens and run a Gravity node on your server.
      div.block-text
        h2.text.text-title Monetisation opportunities
        p.text Gravity offers new monetisation models to node maintainers, as a flexible alternative to mining. Providers of Gravity services can monetise their data processing capabilities and get paid in the native tokens of platforms connected by Gravity.
        p.text Consumers of data or event triggers from Gravity nodes can pay for services by maintaining a stable balance on the payment accounts of providers.
</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";

.block {
  &-watching {
    background: url("~static/img/rm_01.png") no-repeat 92vw 100px/280px;

    @include b(1024) {
      background: none;
    }

    .container-content {
      grid-template-columns: minmax(300px, 800px) minmax(300px, 440px);
      max-width: 1310px;

      @include b(mobile) {
        display: flex !important;
        flex-direction: column-reverse;
        padding: 0 20px;
      }

      .block {
        &-image {
          z-index: 1;

          &-text {
            margin-top: -10px;
            display: flex;
            justify-content: center;
            width: 100%;

            &-wrap {
              width: 100%;
              max-width: 660px;
              padding-right: 55px;

              @include b(tablet) {
                max-width: 400px;
                padding-right: 0px;
              }

              @include b(mobile) {
                margin-top: 0;
                max-width: 100%;
              }
            }
          }
        }

        &-text {
          background: url("~static/img/bg-title-watching.svg") no-repeat -50px -100px/100%
            100%;
          padding-right: 90px;

          @include b(mobile) {
            padding-right: 0px;
            background: url("~static/img/bg-title-watching.svg") no-repeat
              left/100% 100%;
          }

          @include bb(endmobile, 0) {
            padding-right: 0px;
            background: url("~static/img/bg-title-watching.svg") no-repeat left -80px/100%
              100%;
          }
        }
      }
    }
  }
}
</style>
