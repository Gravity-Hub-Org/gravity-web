<template lang="pug">
  div.registration-steps
    div.registration-step(v-if="step === 0")
      div.registration-step-one
        span.registration-step-title Please install Waves Keeper first
        span.registration-step-text It is a browser extension that allows creating your Waves wallet and manages your private keys to interact with our platform.<br><br>Available in Chrome, Firefox, Edge, Opera and Brave:
        div.registration-step-browsers
          span.icon.icon-chrome
          span.icon.icon-firefox
          span.icon.icon-edge
          span.icon.icon-opera
          span.icon.icon-brave
        span.button.button-orange Install Waves Keeper
        div.registration-step-buttons
          div.button.button-watch Watch video instructions
          div.button.button-telegram Ask for help in Telegram group
    div.registration-step(v-if="step === 1")
      div.registration-step-two
        div.registration-step-info
          span.registration-step-title Create a Waves wallet
          span.registration-step-text Click "Add account" in your Waves Keeper browser extension and select "Create a new account", or click "Import Account" below if you already have a Waves wallet. Don't forget to make sure that the extension is in "Mainnet" modelf you've done this, click on "Go it" to proceed!
          div.registration-step-buttons
            span.button.button-watch Watch video instructions
            span.button.button-telegram Ask for help in Telegram group
        div.registration-step-image
          img(src='img/step-1.png', alt='Create a Waves wallet')
    div.registration-step(v-if="step === 2")
      div.registration-step-two
        div.registration-step-info
          span.registration-step-title Chek Waves Keeper permissions
          span.registration-step-text If you haven't yet given Waves Keeper access to Gravity Hub, you will need to do the following steps: Open Waves Keeper. Go to the Settings menu (in the right upper corner). <br><br>Open Permissions Control menu Give access to gravityhub.org by clicking a power button icon on the left
          div.registration-step-buttons
            span.button.button-watch Watch video instructions
            span.button.button-telegram Ask for help in Telegram group
        div.registration-step-image
          img(src='img/step-2.png', alt='Chek Waves Keeper permissions')
    div.registration-step(v-if="step === 3")
      div.registration-step-one-left
        span.registration-step-title Finally, deposit waves to your wallet
        div.registration-step-resources
          span.icon.icon-binance Buy WAVES on Binance
          span.icon.icon-kraken Buy WAVES on Kraken
          span.icon.icon-bittrex Buy WAVES on Bittrex
          span.icon.icon-huobi Buy WAVES on Huobi
          span.icon.icon-changelly Buy WAVES on Changelly
          span.icon.icon-shapeshift Buy WAVES on Shapeshift
          span.icon.icon-exchange Buy WAVES on Exchange
</template>

<script>
export default {
  props: ["step"],
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins/media";

.registration-steps {
  margin: 30px 0 20px 0;

  @include bb(endmobile, 0) {
    height: 65vh;
    margin: 10px 0 10px 0;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}

.registration-step {
  &-one {
    text-align: center;

    &-left {
      text-align: left !important;
    }

    .registration-step-text {
      max-width: 750px;
    }
  }

  &-two {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr minmax(150px, 185px);
    grid-gap: 40px;

    @include bb(endmobile, 0) {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }

    .registration-step-buttons {
      margin: 0px;
    }

    .registration-step-title {
      margin-bottom: 30px;
    }

    .registration-step-text {
      margin-bottom: 30px;
    }
  }

  &-image {
    img {
      max-width: 100%;
    }
  }

  &-title {
    display: block;
    width: 100%;
    color: white;
    font-size: 18px;
    margin-bottom: 15px;

    @include bb(endmobile, 0) {
      font-size: 16px;
    }
  }

  &-text {
    font-size: 15px;
    margin-bottom: 15px;
    color: white;
    opacity: 0.7;
    line-height: 1.7;
    width: 100%;
    display: block;

    @include bb(endmobile, 0) {
      font-size: 14px;
      line-height: 1.5;
    }
  }

  &-browsers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 330px;
    width: 100%;
    margin: 25px auto;
    flex-wrap: wrap;

    @include bb(endmobile, 0) {
      margin: 20px auto;
    }

    * {
      @include b(550) {
        margin: 5px;
      }
    }
  }

  &-buttons {
    display: flex;
    justify-content: space-between;
    max-width: 470px;
    width: 100%;
    margin: 0 auto;

    @include b(750) {
      flex-direction: column;
      align-items: baseline;
    }

    * {
      font-size: 14px;
      color: white;
      margin-bottom: 10px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &-resources {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    * {
      max-width: 200px;
      width: 100%;
      color: rgb(201, 201, 201);
      font-size: 13px;
      margin-bottom: 30px;
    }
  }

  .button-orange {
    max-width: 470px;
    width: 100%;
    font-size: 14px;
    padding: 14px;
    color: white;
    margin: 25px auto;

    @include bb(endmobile, 0) {
      padding: 10px;
      margin: 20px auto;
    }
  }
}
</style>