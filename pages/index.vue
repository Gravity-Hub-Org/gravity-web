<template>
  <div>
    <Header />
    <header-block />
    <nodes-block />
    <watching-block />
    <reaching-block />
    <gravity-block />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/index/Header.vue";
import HeaderBlock from "~/components/index/HeaderBlock.vue";
import NodesBlock from "~/components/index/NodesBlock.vue";
import WatchingBlock from "~/components/index/WatchingBlock.vue";
import ReachingBlock from "~/components/index/ReachingBlock.vue";
import GravityBlock from "~/components/index/GravityBlock.vue";
import Footer from "~/components/index/Footer.vue";
// import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    Header,
    HeaderBlock,
    NodesBlock,
    WatchingBlock,
    ReachingBlock,
    GravityBlock,
    Footer
  }
};
</script>

<style lang="scss">
@import "../assets/scss/mixins/media.scss";

section.block {
  padding-top: 100px;

  @include bb(endmobile, 0) {
    padding-top: 10px;
  }

  .container-content {
    display: grid;
    width: 100%;
    justify-content: space-between;

    .block {
      &-text {
        position: relative;
        padding-top: 80px;

        @include b(1024) {
          padding-top: 0;
        }

        * {
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .text {
          font-weight: 200;
          font-size: 17px;
          line-height: 26px;
          opacity: 0.74;

          @include b(mobile) {
            font-size: 14px;
            line-height: 24px;
          }

          @include bb(tablet, 0) {
            font-size: 15px;
            line-height: 24px;
          }

          &-title {
            line-height: 1;
            font-size: 48px;
            margin-bottom: 40px;
            font-weight: bold;
            opacity: 0.8 !important;

            @include b(mobile) {
              font-size: 30px;
              margin-bottom: 30px;
            }
          }
        }
      }

      &-image {
        z-index: 1;

        @include bb(endmobile, 0) {
          margin: 0 -15px;
        }

        &-wrap {
          position: relative;
        }

        &-text {
          width: 100%;
          opacity: 0.74;

          &-wrap {
            @include b(mobile) {
              margin-top: 50px;
            }
          }

          .text {
            font-weight: 200;
            font-size: 16px;
            line-height: 26px;
            margin-bottom: 20px;
            z-index: 3;

            @include b(mobile) {
              font-size: 14px;
              line-height: 24px;
            }

            @include bb(tablet, 0) {
              font-size: 15px;
              line-height: 24px;
            }
            @include bb(endmobile, 0) {
              margin: 0 20px;
            }
          }
        }
      }
    }
  }
}
</style>
