<template lang="pug">
section.sponsor-wrap 
  .container-content-logo
    .block-sponsor-gravity
      h2.title-text Network Partnerships
      .container-img-sponsors
        .block
          //- a(v-for="link in sections.protocol.links", :href="link.link", :target="link.target").footer-menu-block-link
          SponsorItem(v-for="item in this.sponsors.top" :key="item.title" :item="item")
        .block
          SponsorItem(v-for="item in sponsors.bottom" :key="item.title" :item="item")
          
</template>

<script>
import SponsorItem from '~/components/index/SponsorItem.vue';

const sponsorsList = [
  {
    title: 'Ventuary Lab',
    text: `Ventuary Lab is a leading Web3 & blockchain development team behind the core of the Gravity protocol. Their solutions and products form the foundation for the open financial infrastructure of the future.`,
    status: 'Validator',
    url: 'https://venlab.dev',
    imageAlt: '',
    imagePath: 'img/Logo_VL_2.svg',
  },
  {
    title: 'Neutrino Protocol',
    text: `Neutrino is a multi-assetization protocol, crypto-collateralized, powered by Waves and acting as an inter-chain toolkit enabling frictionless DeFi on demand.`,
    status: 'Validator',
    url: 'https://neutrino.at',
    imageAlt: '',
    imagePath: 'img/neutrino-1.svg',
  },
  {
    title: 'Tron',
    text: `TRON is a Blockchain-based decentralized operating system based on a cryptocurrency native to the system, known as TRX. TRON and Waves are establishing a bridge through Gravity which will allow both ecosystems to enhance access to services for two user bases.`,
    status: 'Validator',
    url: 'https://tron.network',
    imageAlt: '',
    imagePath: 'img/Tron_logo-1.svg',
  },
  {
    title: '1inch',
    text: `1inch is a DEX aggregator focused on the most seamless user experience and best prices in the market. Gravity will connect 1inch to an infrastructure of new, non-Ethereum ecosystems and open the door of the ETH-based DeFi ecosystem to Waves and Neutrino.`,
    status: 'Validator',
    url: 'https://1inch.exchange',
    imageAlt: '',
    imagePath: 'img/1inch.svg',
  },
  {
    title: 'Ontology',
    text: `Ontology is a high performance, open-source blockchain specializing in digital identity and data. 
    Ontology will become one of the target chains of Gravity, among the first integrations with Ethereum and Waves, allowing data from the Ontology network to be used seamlessly in other chains and vice versa.text `,
    status: 'Validator',
    url: 'https://ont.io',
    imageAlt: '',
    imagePath: 'img/ontology-1.svg',
  },
  // {
  //   title: 'Coinranking',
  //   text: `Coinranking is one of the first node operators with an exemplary reputation among the Waves community and the entire crypto community in general. Coinranking joins Gravity network as a trusted oracle for price feeds.`,
  //   status: 'Validator',
  //   url: 'https://coinranking.com',
  //   imageAlt: '',
  //   imagePath: '',
  // },
  {
    title: 'VID',
    text: `V-ID is a blockchain-powered document certification and verification service. V-ID and the team behind Gravity are pursuing joint R&D activities in the field of ‘document and data’ validation, and verification strategies based on interchain technology.`,
    status: 'Validator',
    url: 'https://about.v-id.org',
    imageAlt: '',
    imagePath: 'img/vid.svg',
  },
  {
    title: 'Fetch.ai',
    text: `Fetch.ai is an open-access machine learning network that powers AI infrastructure on top of a decentralized digital economy. 
    The Fetch.ai team is becoming a significant collaborator of Waves & Gravity with an aim to conduct joint R&D for the purpose of bringing increased multi-chain capabilities to Fetch.ai’s system of autonomous economic agents (AEA).`,
    status: 'Validator',
    url: 'https://fetch.ai',
    imageAlt: '',
    imagePath: 'img/fetch.svg',
  },
  {
    title: 'Band Protocol',
    text: `Band Protocol is a cross-chain data oracle platform that aggregates and connects real-world data and APIs to smart contracts. 
    Band Protocol will be providing all types of data ranging from on-chain events used in cross-chain operations such as token transfer to external data sources and APIs that power specific decentralized applications on Gravity.`,
    status: 'Validator',
    url: 'https://bandprotocol.com',
    imageAlt: '',
    imagePath: 'img/band.svg',
  },
  {
    title: 'Swingby',
    text: `Swingby is a modern technology of interchain communications based on MPC (multiparty computations), TSS (threshold signatures) and ZK (zero-knowledge). 
    This approach works with any chain, and is most helpful with blockchains that lack Turing-complete smart contracts functionality. The partnership between Swingby and Gravity is focused on combining two infrastructures designed for cross-chain interaction to build Interchain DeFi together.`,
    status: 'Validator',
    url: 'https://swingby.network',
    imageAlt: '',
    imagePath: 'img/swingby.svg',
  },
];

const sponsors = {
  top: sponsorsList.slice(0, 4),
  bottom: sponsorsList.slice(4),
};

export default {
  name: 'Sponsor',
  components: {
    SponsorItem,
  },
  data: function() {
    return {
      sponsors,
    };
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/mixins/media.scss';

section.sponsor-wrap {
  position: relative;
  z-index: 2;
  mix-blend-mode: normal;
  display: flex;
  justify-content: center;

  @include b(tablet) {
    background: none;
  }

  @include b(mobile) {
    margin-top: 0;
  }
}

.container-content-logo {
  max-width: 1042px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 89px;
  @include b(tablet) {
    background: none;
  }

  @include b(mobile) {
    margin-top: 0;
  }

  .block-sponsor-gravity {
    background: url('~static/img/bg-title-watching.svg') no-repeat center;
    width: 1042px;
    height: auto;
    @include b(tablet) {
      background: none;
      margin-left: 20px;
      .click {
        display: block;
      }
      @include bb(endmobile, 0) {
        flex-wrap: wrap;
      }
    }

    .title-text {
      font-family: Orbitron;
      font-style: normal;
      font-weight: 900;
      font-size: 44px;
      line-height: 54px;
      letter-spacing: 4.032px;
      color: #fafafa;
      mix-blend-mode: normal;
      opacity: 0.8;
      text-align: center;
      margin-bottom: 72px;

      @include bb(tablet, 0) {
        font-style: normal;
        font-weight: 900;
        font-size: 26px;
        line-height: 30px;
        letter-spacing: 2.184px;
        margin-bottom: 30px;
        margin-left: 20px;
        .title-text {
          text-align: start;
        }
      }

      @include b(mobile) {
        font-size: 25px;
        line-height: 20px;
        margin-bottom: 30px;
        .title-text {
          text-align: start;
        }
      }

      @include b(tablet) {
        opacity: 1;
        .title-text {
          text-align: start;
        }
      }
    }
  }
  .container-img-sponsors {
    .block {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      flex-wrap: wrap;
    }

    .sponsor-item {
      position: relative;
      display: flex;
      position: relative;
      justify-content: space-between;
      width: 245px;
      height: 73px;
      margin: 0 14px 14px 0;
      border: 1px solid #22243b;

      @include b(tablet) {
        background: none;
        margin-left: 20px;

        .click {
          display: block;
        }
      }

      @include bb(endmobile, 0) {
        width: 50%;
      }

      &:hover {
        .container-about {
          display: block;
          z-index: 20;
        }
      }
    }

    .img-sponsors {
      margin: auto;
    }

    .container-about {
      display: none;
      .about-sponsor {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        left: -1px;
        top: -1px;
        width: 246px;
        height: 370px;
        background: #141623;
        mix-blend-mode: normal;
        border: 1px solid #22243b;
        box-sizing: border-box;
        padding-top: 20px;
      }
      .text-about {
        height: 230px;
        width: 206px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 19px;
        color: #ffffff;
        mix-blend-mode: normal;
        opacity: 0.74;
        margin: 18.65px auto 0 auto;
      }
      .status {
        display: flex;
        font-family: Poppins;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
        mix-blend-mode: normal;
        margin: 0 0 9px 20px;
      }
      .status-type {
        color: #44d7b6;
        background-image: url('~static/img/icons/Vector.svg') no-repeat;
      }
    }
    .link {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      text-decoration-line: underline;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.74;
      text-decoration: none;
      margin: 0 0 24px 20px;
    }
    .click {
      position: absolute;
      top: 0px;
      left: 0px;
      display: none;
    }
  }
}
</style>
