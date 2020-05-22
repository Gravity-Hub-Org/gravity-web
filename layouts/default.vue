<template>
  <nuxt />
</template>

<script>
export default {
  data() {
    return {};
  }
  // mounted() {
  //   this.$root.$on("modalOpen", function(state) {
  //     console.log("open m", state);
  //     this.modalOpen = true;
  //   });
  // }
};
</script>

<style lang="scss">
@import "../assets/scss/mixins/media.scss";
@import "../assets/scss/mixins/image.scss";

:root {
  --bg-color: #181a29;
  --overlay-color: #181a29;
  --text-color: #ffffff;
  --title-color: #fafafa;
  --bold-color: #fafafa;
  --accent-color: #ff8e1e;
  --like-color: #ff0000;
  --color-orange: #ff8e1e;
  --color-orange-accent: #e17f1d;
  --container-width: 1250px;
  --container-content-width: 1100px;
  --container-paddings-desctop: 10px 50px;
  --container-paddings-tablet: 10px 40px;
  --container-paddings-mobile: 10px 10px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

.overlay {
  position: relative;

  &-bg {
    position: absolute;
    top: 0;
    z-index: -1;
    left: 0;
    width: 100%;
    background: var(--overlay-color);
    height: 100%;
    display: block;
  }
}

body {
  margin: 0;
  background-color: var(--bg-color);
  font-family: "Poppins", sans-serif;
  cursor: default;
}

.container {
  max-width: var(--container-width);
  padding: var(--container-paddings-desctop);
  margin: 0 auto;

  @include b(1024) {
    padding: var(--container-paddings-tablet);
  }

  @include b(750) {
    padding: var(--container-paddings-mobile);
  }
}

.container-content {
  max-width: var(--container-content-width);
  padding: var(--container-paddings);
  margin: 0 auto;
  padding: 0 40px;
}

p {
  padding: 0;
  margin: 0;
  line-height: 1;
  color: var(--text-color);
  font-weight: normal;
}

b {
  color: var(--bold-color);
}

.modal-open {
  overflow: hidden !important;
}

.close-section {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 20px;
  cursor: pointer;

  &:hover {
    * {
      background-color: var(--color-orange-accent);
    }
  }

  &-item {
    width: 100%;
    display: block;
    height: 2px;
    border-radius: 10px;
    background-color: var(--text-color);
    margin-bottom: 5px;
    transition: 0.4s ease;

    &:nth-child(1) {
      transform: rotate(-45deg);
      margin: 0;
      margin-bottom: -2px;
    }

    &:nth-child(2) {
      transform: rotate(45deg);
      margin: 0;
      max-width: 100%;
    }
  }
}
.text {
  display: inline-block;
  font-weight: 300;

  &-accent {
    color: var(--accent-color);
  }

  &-title {
    color: var(--title-color);
    font-weight: bold;
    font-family: Orbitron;
    letter-spacing: 2px;
  }
}

.icon-like {
  color: red;
  font-size: 17px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background-position: center;
    background-repeat: no-repeat;
  }

  &-binance {
    flex-direction: column;

    @include before-img(block, 150px, 30px, r) {
      background-image: url("~static/img/icons/binance.svg");
      background-size: cover;
      margin-bottom: 10px;
    }
  }

  &-kraken {
    flex-direction: column;

    @include before-img(block, 45px, 35px, r) {
      background-image: url("~static/img/icons/kraken.svg");
      background-size: cover;
      margin-bottom: 10px;
    }
  }

  &-bittrex {
    flex-direction: column;

    @include before-img(block, 35px, 38px, r) {
      background-image: url("~static/img/icons/bittrex.svg");
      background-size: cover;
      margin-bottom: 10px;
    }
  }

  &-huobi {
    flex-direction: column;

    @include before-img(block, 120px, 36px, r) {
      background-image: url("~static/img/icons/huobi.svg");
      background-size: cover;
      margin-bottom: 10px;
    }
  }

  &-changelly {
    flex-direction: column;

    @include before-img(block, 150px, 35px, r) {
      background-image: url("~static/img/icons/changelly.svg");
      background-size: cover;
      margin-bottom: 10px;
    }
  }

  &-shapeshift {
    flex-direction: column;

    @include before-img(block, 145px, 30px, r) {
      background-image: url("~static/img/icons/shapeshift.svg");
      background-size: cover;
      margin-bottom: 10px;
    }
  }

  &-exchange {
    flex-direction: column;

    @include before-img(block, 145px, 25px, r) {
      background-image: url("~static/img/icons/exchange.svg");
      background-size: cover;
      margin-bottom: 10px;
    }
  }

  &-chrome {
    @include before-img(block, 30px, 31px, r) {
      background-image: url("~static/img/icons/chrome.svg");
      background-size: cover;
      margin-right: 10px;
    }
  }

  &-firefox {
    @include before-img(block, 30px, 30px, r) {
      background-image: url("~static/img/icons/firefox.svg");
      background-size: cover;
      margin-right: 10px;
    }
  }

  &-edge {
    @include before-img(block, 30px, 32px, r) {
      background-image: url("~static/img/icons/edge.svg");
      background-size: cover;
      margin-right: 10px;
    }
  }

  &-opera {
    @include before-img(block, 30px, 31px, r) {
      background-image: url("~static/img/icons/opera.svg");
      background-size: cover;
      margin-right: 10px;
    }
  }

  &-brave {
    @include before-img(block, 30px, 32px, r) {
      background-image: url("~static/img/icons/brave.svg");
      background-size: cover;
      margin-right: 10px;
    }
  }
}

.button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &-watch {
    @include before-img(block, 15px, 15px, r) {
      background-image: url("~static/img/icons/watch.svg");
      background-size: cover;
      margin-right: 10px;
    }
  }

  &-telegram-2 {
    flex-direction: column;

    @include before-img(block, 74px, 74px, r) {
      background-image: url("~static/img/icons/telegram-2.svg");
      background-size: cover;
      margin-bottom: 10px;
    }
  }

  &-discord {
    flex-direction: column;

    @include before-img(block, 78px, 78px, r) {
      background-image: url("~static/img/icons/discord.svg");
      background-size: cover;
      margin-bottom: 1px;
    }
  }

  &-telegram {
    @include before-img(block, 18px, 15px, r) {
      background-image: url("~static/img/icons/telegram.svg");
      background-size: cover;
      margin-right: 10px;
    }
  }

  &-waves-signer {
    background-color: #1c1e2b;

    @include before-img(block, 25px, 25px, r) {
      background-image: url("~static/img/icons/waves-signer.svg");
      background-size: cover;
      margin-right: 10px;
    }
  }

  &-waves-keeper {
    border: 1px solid #82868f;

    @include before-img(block, 30px, 30px, r) {
      background-image: url("~static/img/icons/waves-keeper.svg");
      background-size: cover;
      margin-right: 10px;
    }
  }

  &-orange {
    background-color: var(--color-orange);

    &:hover {
      background-color: var(--color-orange-accent);
    }
  }

  &-login {
    color: var(--text-color);
    font-size: 15px;

    &:hover {
      color: var(--color-orange-accent);
    }

    @include before-img(block, 18px, 18px, r) {
      background-image: url("~static/img/icons/login.svg");
      background-size: cover;
      margin-right: 10px;
    }
  }
}

.logo {
  background-image: url("~static/img/logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 133px;
  height: 60px;

  @include b(550) {
    width: 120px;
    height: 55px;
  }
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
}

a,
p,
.button,
span {
  transition: 0.4s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>