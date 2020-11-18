<template lang="pug">
section.sponsor-wrap 
  .container-content-logo
    .block-sponsor-gravity
      h2.title-text Network Partnerships
      .container-img-sponsors
        .block
          //- a(v-for="link in sections.protocol.links", :href="link.link", :target="link.target").footer-menu-block-link
          SponsorItem(v-for='item in this.sponsors.top', :key='item.title', :item='item')
        .block
          SponsorItem(v-for='item in sponsors.bottom', :key='item.title', :item='item')
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
  {
    title: 'Coinranking',
    text: `Coinranking is one of the first node operators with an exemplary reputation among the Waves community and the entire crypto community in general. Coinranking joins Gravity network as a trusted oracle for price feeds.`,
    status: 'Validator',
    url: 'https://coinranking.com',
    imageAlt: '',
    imagePath: 'img/coinranking.svg',
  },
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
    text: `Swingby is a modern technology of interchain communications based on MPC (multiparty computations), TSS (threshold signatures) and ZK (zero-knowledge). This approach works with any chain, and is most helpful with blockchains that lack Turing-complete smart contracts functionality. The partnership between Swingby and Gravity is focused on combining two infrastructures designed for cross-chain interaction to build Interchain DeFi together.`,
    status: 'Validator',
    url: 'https://swingby.network',
    imageAlt: '',
    imagePath: 'img/swingby.svg',
  },
  {
    title: 'Suterusu',
    text: `Suterusu will integrate with Gravity, forming an alliance to further strengthen Gravity’s blockchain agnostic data and interchain communication protocol via Suterusu’s privacy-preserving DeFi functionality.`,
    status: 'Validator',
    url: 'https://www.suterusu.io/ ',
    imageAlt: '',
    imagePath: 'img/suterusu.svg',
  },
  {
    title: 'Fusion',
    text: `Fusion Foundation is a non-profit organization building the next-generation infrastructure for decentralized global finance. With Fusion network, the world will enjoy financial transactions that are more accessible, efficient and transparent than previously possible. Fusion and Gravity are joining efforts to establish a portal between their interoperability-focused hubs and commit to cooperate in the creation of a seamless environment for value and information exchange between multiple blockchains.`,
    status: 'Validator',
    url: 'https://www.fusion.org/',
    imageAlt: '',
    imagePath: 'img/Fusion.svg',
  },
  {
    title: 'Fantom',
    text: `Fantom provides enterprise blockchain services centered around its innovative consensus-as-a-service solution.
    With Fantom, it is possible to build a public or private distributed ledger on a highly-scalable platform with fast settlement times.`,
    status: 'Validator',
    url: 'https://fantom.foundation',
    imageAlt: '',
    imagePath: 'img/fantom.svg',
  },
  {
    title: 'Ankr',
    text: `Ankr is building an infrastructure platform and marketplace for Web3-stack deployment. The blockchain infrastructure aims to enable resource providers and end-users to easily connect to blockchain technologies and DeFi applications. The Ankr proprietary cloud infrastructure operates independently from public cloud providers and is powered by geographically distributed enterprise-grade datacenters to increase resilience and stability.`,
    status: 'Validator',
    url: 'https://www.ankr.com/',
    imageAlt: '',
    imagePath: 'img/ankr.svg',
  },
  {
    title: 'Curve',
    text: `Curve is an exchange liquidity pool on Ethereum designed for extremely efficient stablecoin trading and low risk, supplemental fee income for liquidity providers, without an opportunity cost.`,
    status: 'Validator',
    url: 'https://www.curve.fi/',
    imageAlt: '',
    imagePath: 'img/curve.svg',
  },
  {
    title: 'Solana',
    text: `Founded by former Qualcomm, Intel, and Dropbox engineers in late-2017, Solana is a single-chain, delegated-Proof-of-Stake protocol whose focus is on delivering scalability without sacrificing decentralization or security.`,
    status: 'Validator',
    url: 'https://solana.com/',
    imageAlt: '',
    imagePath: 'img/solana.svg',
  },
  {
    title: 'Matic Network',
    text: `Matic is a developer-first hybrid POS+Plasma sidechain on top of Ethereum, enabling Ethereum developers to scale their dApps for large-scale usage. Matic is rapidly becoming the go-to Layer 2 solution for developers, thanks to secure, scalable and instant transactions, secured by Ethereum.`,
    status: 'Validator',
    url: 'https://matic.network/',
    imageAlt: '',
    imagePath: 'img/matic.svg',
  },
  {
    title: 'ERGO',
    text: `The Ergo platform aims to provide an efficient, secure, and easy way to implement financial contracts that will be useful and survivable in the long term.`,
    status: 'Validator',
    url: 'https://ergoplatform.org/en/',
    imageAlt: '',
    imagePath: 'img/ergo.svg',
  },
  {
    title: 'IOST',
    text: `The open-source IOST project is meant to meet the security and scalability needs of a decentralized economy by providing blockchain infrastructure that might serve as the architecture for the future of online services.`,
    status: 'Validator',
    url: 'https://iost.io/',
    imageAlt: '',
    imagePath: 'img/iost.png',
  },
];

const sponsors = {
  top: sponsorsList.slice(0, 8),
  bottom: sponsorsList.slice(8),
};

export default {
  name: 'Sponsor',
  components: {
    SponsorItem,
  },
  data: function () {
    return {
      sponsors,
    };
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/mixins/media.scss';
section.sponsor-wrap {
  z-index: 2;
  mix-blend-mode: normal;
  display: flex;
  justify-content: center;
  position: relative;
  @include bb(tablet, 0) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
  }
  @include b(mobile) {
    position: relative;
    height: auto;
    background: none;
  }
}
.container-content-logo {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 89px auto 0 auto;
  @include b(tablet) {
    background: none;
  }
  @include b(mobile) {
    margin: auto;
  }
  .block-sponsor-gravity {
    background: url('/img/bg-title-watching.svg') no-repeat center;
    width: 1042px;
    height: auto;
    @include b(tablet) {
      background: none;
      margin: 30px 20px;

      .click {
        display: block;
      }
      @include bb(endmobile, 0) {
        min-width: 280px;
        flex-wrap: nowrap;
        .click {
          display: block;
        }
      }
      @include b(desktop) {
        flex-wrap: nowrap;
        .click {
          display: block;
        }
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
        font-size: 30px;
        line-height: 20px;
        justify-content: flex-start;
      }
      @include b(mobile) {
        font-size: 25px;
        line-height: 20px;
        margin-bottom: 28px;
        padding-left: 0px;
        justify-content: flex-start;
        line-height: 54px;
      }
      @include b(tablet) {
        opacity: 1;
        line-height: 30px;
      }
    }
    .container-img-sponsors {
      .block {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        box-sizing: border-box;
        @include bb(endmobile, 0) {
          width: auto;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          box-sizing: border-box;
          position: relative;
        }
      }
      .sponsor-item {
        display: flex;
        justify-content: space-between;
        width: 243px;
        height: 73px;
        margin: 0 10px 10px 0;
        border: 1px solid #22243b;
        position: relative;

        @include bb(endmobile, 0) {
          width: 49%;
          height: 70px;
          display: flex;
          justify-content: space-between;
          border: 1px solid#22243b;
          border-radius: 2px;
          position: unset;
          .click {
            display: block;
            position: absolute;
          }
          &:nth-child(even) {
            margin: 2px 0 3px 2px;
          }
          &:nth-child(odd) {
            margin: 2px 2px 3px 0;
          }
        }
        &:hover {
          .container-about {
            border-radius: 5px;
            // top: -1px;
            top: unset;
            left: 0;
            display: block;
            z-index: 999;
            cursor: pointer;
          }
        }
      }
      .img-sponsors {
        margin: auto;
        position: relative;
        @include bb(endmobile, 0) {
          margin: auto;
          padding: 2px;
          max-width: 80%;
        }
      }
      .container-about {
        position: absolute;
        background: #22243b;
        width: 100%;
        display: none;
        left: -1px;
        top: -1px;
      }
      .about-sponsor {
        position: absolute;
        left: -1px;
        top: -1px;
        right: -1px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: #141623;
        mix-blend-mode: normal;
        border: 1px solid #22243b;
        border-radius: 2px;
        box-sizing: border-box;
        @include bb(endmobile, 0) {
          position: absolute;
          left: 0px;
          top: -1px;
          right: 0px;
          .click {
            display: block;
          }
        }
      }
      .click {
        display: none;
      }
      .text-about {
        height: auto;
        width: 206px;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 19px;
        color: #fff;
        mix-blend-mode: normal;
        opacity: 0.74;
        margin: 10px auto 10px auto;
        @include bb(endmobile, 0) {
          height: auto;
          width: 100%;
          font-family: Poppins;
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 19px;
          color: #fff;
          padding: 0 20px;
          mix-blend-mode: normal;
          opacity: 0.74;
          margin: 10px auto 10px auto;
        }
      }
      .status {
        display: flex;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 20px;
        color: rgba(250, 250, 250, 1);
        mix-blend-mode: normal;
        margin: 0 0 10px 20px;
        @include bb(endmobile, 0) {
          display: flex;
          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 20px;
          color: rgba(250, 250, 250, 1);
          opacity: 0.74;
          mix-blend-mode: normal;
          margin: 0 0 10px 20px;
        }
        .status-type {
          color: #44d7b6;
        }
      }
      .link {
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        text-decoration-line: underline;
        mix-blend-mode: normal;
        opacity: 0.74;
        color: rgba(250, 250, 250, 0.74);
        margin-left: 20px;
        margin-bottom: 12px;
        @include bb(endmobile, 0) {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 20px;
          text-decoration-line: underline;
          color: rgba(250, 250, 250, 1);
          mix-blend-mode: normal;
          opacity: 0.74;
          margin-bottom: 12px;
          margin-left: 20px;
        }
      }
      .sponsor-wrap {
        display: flex;
        justify-content: space-between;
        height: 71px;
        width: 241px;
        .img-spn {
          margin: auto;
          max-width: 80%;
        }
        @include bb(endmobile, 0) {
          display: flex;
          justify-content: space-between;
          height: 71px;
          margin: auto;
          width: 243px;
          position: relative;
          .img-spn {
            margin: auto;
          }
        }
      }
    }
  }
}
</style>