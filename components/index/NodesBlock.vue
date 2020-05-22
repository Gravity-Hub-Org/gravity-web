<template lang="pug">
  section.block.block-nodes
    div.container-content
      div.block-text
        div.block-text-wrap
          h2.text.text-title Blockchain agnostic
          p.text
            b Gravity Hub’s nodes
            |  is a middleware that establishes communication between blockchains amongst themselves and connects them to external world. GH has no native token, which makes it truly agnostic and reduces the complexity of the system.
          p.text Gravity Hub provides straightforward interoperability at the levels of protocols and decentralized software, allowing dApps to easily exchange data across different blockchains.
          p.text Gravity Hub is an open source software with transparent mechanisms for introducing changes and improvements. Join the open source developers team and contribute to the success of web3.0!
      div.block-image
        img.block-image-wrap(src='img/nodes.svg',alt='nodes')
</template>


<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";
@import "../../assets/scss/mixins/image.scss";

.block {
  &-nodes {
    position: relative;

    @include before-img(block, 250px, 250px, a) {
      background-image: url("~static/img/rm_01.png");
      background-size: 100%;
      background-repeat: no-repeat;
      top: -120px;
      left: 150px;
      z-index: 1;

      @include b(1440) {
        top: -120px;
        left: -130px;
      }

      @include bb(endmobile, 0) {
        display: none;
      }
    }

    .container-content {
      max-width: 1370px;
      grid-gap: 0;
      grid-template-columns: minmax(300px, 580px) minmax(300px, 750px);
      margin-top: 50px;

      @include b(mobile) {
        display: flex !important;
        flex-direction: column;
        padding: 0 20px;
      }

      @include bb(endmobile, 0) {
        margin-top: 20px;
      }

      .block {
        &-text {
          background: url("~static/img/bg-title-watching.svg") no-repeat center -10px/90%;
          padding-right: 70px;
          display: flex;
          justify-content: flex-end;

          @include bb(tablet, 0) {
            background: url("~static/img/bg-title-watching.svg") no-repeat left
              top/90%;
            padding-right: 20px;
          }

          @include b(mobile) {
            background: url("~static/img/bg-title-watching.svg") no-repeat left
              top/contain;
            padding-right: 0px;
          }

          @include bb(endmobile, 0) {
            background: url("~static/img/bg-title-watching.svg") no-repeat -10px -10px/100%;
          }

          &-wrap {
            width: 100%;
            max-width: 370px;

            @include b(mobile) {
              max-width: 100%;
            }
          }

          .text {
            opacity: 0.75;

            &-title {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
}
</style>
