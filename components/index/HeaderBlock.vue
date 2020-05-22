<template lang="pug">
  section.header
    div.container
      div.header-wrap
        div.header-block-text
          h1.text.text-title
            | Gravity
            |
            | Hub
          span.text.text-accent Blockchain communication net Oracles and Inter-Chain.
          p.text All-encompassing, blockchain-agnostic oracle system that supports the communication of blockchains with the outside world, cross-chain communication, and integration of sidechains, within a single unified structure.
        div.header-block-gravity

</template>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media.scss";
@import "../../assets/scss/mixins/image.scss";

section.header {
  background-image: url("~static/img/header.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 860px;
  position: relative;
  overflow: hidden;

  @include bb(tablet, 0) {
    padding-top: 40px;
    height: 650px;
  }

  @include b(mobile) {
    padding-top: 50px;
    height: 550px;
  }

  @include bb(endmobile, 0) {
    padding-top: 100px;
    height: auto;
  }

  .container {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    z-index: 1;
    max-width: 1300px;

    @include bb(endmobile, 0) {
      padding: 10px 20px;
      position: relative;
    }

    @include after-img(block, 100%, 100%, a) {
      background-image: url("~static/img/cosmos.svg");
      background-size: 80%;
      background-repeat: no-repeat;
      left: 0px;
      top: 40px;

      @include b(mobile) {
        background-size: 100%;
      }

      @include bb(endmobile, 0) {
        display: none;
      }
    }

    .header {
      &-wrap {
        display: grid;
        grid-template-columns: minmax(300px, 600px) minmax(300px, 550px);
        justify-content: space-between;
        align-items: center;
        width: 100%;
        grid-gap: 20px;
        z-index: 1;

        @include bb(tablet, 0) {
          grid-template-columns: minmax(300px, 1fr) minmax(300px, 350px);
        }

        @include bb(mobile, 0) {
          grid-template-columns: repeat(2, 1fr);
        }

        @include bb(endmobile, 0) {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 0;
          grid-template-rows: 300px 300px;
        }
      }

      &-block {
        &-text {
          position: relative;
          z-index: 1;

          @include before-img(block, 350px, 350px, a) {
            background-image: url("~static/img/triangle.svg");
            background-position: left;
            background-size: cover;
            background-repeat: no-repeat;
            top: -100px;
            z-index: -1;
            left: 0px;

            @include bb(tablet, 0) {
              width: 280px;
              height: 280px;
              top: -50px;
            }

            @include bb(mobile, 0) {
              width: 200px;
              height: 200px;
              top: -50px;
            }

            @include bb(endmobile, 0) {
              display: none;
            }
          }

          * {
            margin: 12px 0;

            @include bb(endmobile, 0) {
              margin: 10px 0;
            }
          }

          h1 {
            font-size: 100px;
            line-height: 110px;
            text-transform: uppercase;

            @include bb(tablet, 0) {
              font-size: 80px;
              line-height: 80px;
            }

            @include bb(mobile, 0) {
              font-size: 8vw;
              line-height: 55px;
            }

            @include bb(endmobile, 0) {
              font-size: 45px;
              line-height: 45px;
            }
          }

          span {
            font-size: 28px;
            line-height: 40px;

            @include bb(tablet, 0) {
              font-size: 28px;
              line-height: 30px;
            }

            @include bb(mobile, 0) {
              font-size: 2.7vw;
              line-height: 22px;
            }

            @include bb(endmobile, 0) {
              font-size: 16px;
              line-height: 23px;
            }
          }

          p {
            font-weight: 200;
            font-size: 17px;
            line-height: 27px;
            opacity: 0.75;

            @include bb(tablet, 0) {
              font-size: 15px;
              line-height: 25px;
            }

            @include bb(mobile, 0) {
              font-size: 1.8vw;
              line-height: 18px;
            }

            @include bb(endmobile, 0) {
              font-size: 14px;
              line-height: 20px;
            }
          }
        }

        &-gravity {
          background-image: url("~static/img/gravity-header.svg");
          background-position: left;
          background-size: 86%;
          background-repeat: no-repeat;
          height: 500px;
          position: relative;

          @include bb(tablet, 0) {
            height: 300px;
          }

          @include b(mobile) {
            background-size: 90%;
          }

          @include bb(endmobile, 0) {
            height: 250px !important;
            width: 280px;
            margin: 0 auto;
          }

          @include after-img(block, 15px, 190px, a) {
            background-image: url("~static/img/gravity-header-text.svg");
            background-size: cover;
            background-repeat: no-repeat;
            top: 31%;
            z-index: 1;
            right: 0;

            @include b(tablet) {
              top: 20%;
            }

            @include b(mobile) {
              top: 30%;
            }

            @include b(550) {
              top: 25px;
            }
          }
        }
      }
    }
  }
}
</style>
