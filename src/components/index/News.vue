<template lang="pug">
section.news-wrap 
  h2.title-text News
    a.link-news(href='https://medium.com/gravity-protocol', target='_blank') 
      <img class="arrow" src="/img/icons/arrow-circle.svg">
  .news-container
    .top-row-news
      .main-news
        <img class='main'src='/img/gravity-main.svg'>
        .info-about-main
          .data 14.11.2020
          a.text-main(target='_blank', href='https://medium.com/gravity-protocol/gravity-mainnet-alpha-launch-with-waves-bsc-as-target-chains-e110b59a01b8') The first application on top of Gravity network — cross-chain gateways between Waves (origin) and BSC (destination) — is now live!
          <br/>
          a.news-info(target='_blank', href='https://medium.com/gravity-protocol/gravity-mainnet-alpha-launch-with-waves-bsc-as-target-chains-e110b59a01b8') See more
      //.main-news
        <img class='main'src='/img/gravity-demo.png'>
        .info-about-main
          .data 19.10.2020
          a.text-main(
            target='_blank',
            href='This video is a brief demo of Gravity SuSy, a crosschain token gateway service based on Gravity Protocol.'
          ) This video is a brief demo of Gravity SuSy, a crosschain token gateway service based on Gravity Protocol.
          a.news-info(
            target='_blank',
            href='This video is a brief demo of Gravity SuSy, a crosschain token gateway service based on Gravity Protocol.'
          ) See more
    .bottom-row-news
      .minor-news
        a.news-info(target='_blank', href='https://www.youtube.com/watch?v=fRaS9oYFfbM') See more
        <img class='minor'src='/img/gravity-demo.png'>
        .info-about
          .data 23.11.2020
          <hr class='line' />
          a.text-minor(target='_blank', href='https://www.youtube.com/watch?v=fRaS9oYFfbM') This video is a brief demo of Gravity SuSy, a crosschain token gateway service based on Gravity Protocol.
      .minor-news
        a.news-info(
          target='_blank',
          href='https://medium.com/gravity-protocol/gravity-test-framework-adds-binance-smart-chain-via-ankr-4ab96661ce7b'
        ) See more
        <img class='minor'src='/img/bsc.png'>
        .info-about
          .data 19.10.2020
          <hr class='line' />
          a.text-minor(
            target='_blank',
            href='https://medium.com/gravity-protocol/gravity-test-framework-adds-binance-smart-chain-via-ankr-4ab96661ce7b'
          ) Gravity test framework adds Binance Smart Chain via Ankr
          <br />
          <br/>
      .minor-news
        a.news-info(
          target='_blank',
          href='https://medium.com/gravity-protocol/1inch-joins-gravity-network-as-interchain-transfer-provider-for-ethereum-ecosystem-386bd80e746b'
        ) See more
        <img class='minor'src='/img/news-1inch.svg'>
        .info-about
          .data 14.08.2020
          <hr class='line' />
          a.text-minor(
            target='_blank',
            href='https://medium.com/gravity-protocol/1inch-joins-gravity-network-as-interchain-transfer-provider-for-ethereum-ecosystem-386bd80e746b'
          ) 1inch joins Gravity Network as interchain transfer provider for Ethereum ecosystem
          <br />
</template>
<script>
export default {
  name: 'News',
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixins/media.scss';

.news-wrap {
  width: 1040px;
  margin: 20px auto 20px auto;
  @include bb(tablet, 0) {
    height: 650px;
  }

  @include b(tablet) {
    max-width: 350px;
  }
}
.title-text {
  font-family: Orbitron;
  display: flex;
  color: #cececf;
  font-style: normal;
  font-weight: 900;
  font-size: 44px;
  line-height: 54px;
  letter-spacing: 4.032px;
  padding: 74px 0;
  margin: 0;
  background: url('/img/bg-title-watching.svg') no-repeat 0 0;
  @include bb(tablet, 0) {
    font-size: 30px;
    line-height: 20px;
    justify-content: flex-start;
  }
  @include b(mobile) {
    font-size: 30px;
    line-height: 20px;
    margin-bottom: 28px;
    padding: 0px;
    padding-left: 25px;
    justify-content: flex-start;
    line-height: 54px;
    background: none;
  }
  @include b(tablet) {
    opacity: 1;
    line-height: 30px;
    padding-left: 20px;
  }
}
.link-news {
  padding-left: 10px;
  display: flex;
  align-items: center;
}
.arrow {
  padding-top: 2px;
  transition: 0.5s;
  @include b(mobile) {
    transition: 0.5s;
  }
  &:hover {
    transform: scale(1.4);
  }
}
.news-container {
  display: flex;
  flex-direction: column;
  @include bb(tablet, 0) {
    height: 650px;
  }

  @include b(tablet) {
    max-width: 650px;
  }
}
.main-news {
  display: flex;
  margin-bottom: 61px;
  @include b(mobile) {
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 15px;
    margin: 30px 0 0 25px;
    max-width: 650px;
    height: 320px;

    .main {
      width: 280px;
      margin-bottom: 20px;
    }
    .info-about-main {
      width: 320px;
    }
    .text-main {
      font-size: 15px;
      margin: 10px 0;
      width: 320px;
    }
    .data {
      width: 100px;
    }
  }
}
.news-info {
  color: #fff;
  text-decoration: none;
  padding-top: 10px;
  font-size: 15px;
  &:hover {
    color: #ff8e1e;
    opacity: 0.9;
  }
}

.info-about-main {
  width: 466px;
  height: 147px;
}
.main {
  margin-right: 40px;
}
.data {
  color: #cececf;
  padding-left: 27px;
  background-image: url('/img/rectangle.svg');
  background-repeat: no-repeat;
}
.text-main {
  display: block;
  color: #fff;
  opacity: 0.9;
  font-size: 24px;
  margin-top: 34px;
}
.bottom-row-news {
  display: flex;
  justify-content: space-between;
  @include b(mobile) {
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 15px;
    .minor {
      margin-bottom: 30px;
    }
  }
}
.minor-news {
  width: 283px;
  height: auto;
  display: flex;
  flex-direction: column-reverse;
  align-self: flex-start;
  @include b(tablet) {
    margin: 30px 0 0 25px;
    display: flex;
    justify-content: space-between;
  }
}
.text-minor {
  display: block;
  color: #cececf;
  font-size: 16px;
  margin: 14px 0 17px 0;
}
.line {
  background-color: #cececf;
  height: 1px;
  border: 0;
}
</style>