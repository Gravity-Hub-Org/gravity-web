export const contactInfo = {
  email: 'oracle@gravity.tech',
};

const mapLinkToSitemapItem = link => ({
  url: link.link,
  priority: link.priority || 1,
});
export const flattenSections = sections => {
  const result = [];

  const sectionKeys = Object.keys(sections);

  for (let i = 0; i < sectionKeys.length; i++) {
    const key = sectionKeys[i];
    let { links } = sections[key];

    if (!links) continue;

    result.push(...links.map(mapLinkToSitemapItem));
  }

  return result;
};

export const mainTitle = 'Gravity Protocol'
const previewImagePath = '/img/preview/opengraph_gravity@2x.png'

export const shortDescription = 'Oracles and Interchain Communication Network'
const longDescription = `
An all-encompassing, blockchain-agnostic oracle system that supports communication of blockchains with the outside world, 
cross-chain communication, and integration of sidechains, within a single unified structure
`
export const metaTags = [
  {
    charset: 'utf-8',
  },
  {
    name: 'keywords',
    content:
      'blockchain, crosschain, interchain, oracles, datafeeds, waves, ethereum, bitcoin, gateways, consensus, smartcontract, ride, solidity',
  },
  {
    content: shortDescription,
    property: 'og:title',
  },
  {
    content: 'https://gravity.tech',
    property: 'og:url',
  },
  {
    content: 'Gravity Protocol',
    property: 'og:site_name',
  },
  {
    name: 'og:image',
    content: previewImagePath
  },
  {
    content: 'Gravity Protocol',
    property: 'twitter:site',
  },
  {
    content: shortDescription,
    property: 'twitter:title',
  },
  {
    name: 'twitter:image',
    content: previewImagePath
  },
  {
    name: 'twitter:image:src',
    content: previewImagePath
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image'
  },
  {
    content: 'all',
    property: 'robots',
  },
  {
    content: 'website',
    property: 'og:type',
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1',
  },
  {
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'black',
  },
  {
    name: 'apple-mobile-web-app-capable',
    content: 'yes',
  },
  {
    name: 'format-detection',
    content: 'email=no',
  },
  {
    name: 'description',
    content: longDescription,
  },
];

export const sections = {
  protocol: {
    label: 'Protocol',
    links: [
      {
        label: 'Whitepaper',
        link: 'https://wp.gravityhub.org',
        target: '_blank',
      },
      {
        label: 'FAQ',
        link: 'https://faq.gravityhub.org',
        target: '_blank',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/Gravity-Hub-Org',
        target: '_blank',
      },
      {
        label: 'Docs',
        link: 'https://docs.gravityhub.org',
        target: '_blank',
      },
    ],
  },
  community: {
    label: 'Community',
    links: [
      {
        label: 'Telegram',
        link: 'https://t.me/gravity_protocol',
        target: '_blank',
      },
      {
        label: 'Discord',
        link: 'https://discord.gg/ANZKhTw',
        target: '_blank',
      },
      {
        label: 'Reddit',
        link: 'https://www.reddit.com/user/Gravity_protocol',
        target: '_blank',
      },
    ],
  },
  news: {
    label: 'News',
    links: [
      {
        label: 'Blog',
        link: 'https://medium.com/@gravity_protocol',
        target: '_blank',
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/ProtocolGravity',
        target: '_blank',
      },
      {
        label: 'LinkedIn',
        link: 'www.linkedin.com/company/gravity-protocol',
        target: '_blank',
      },
    ],
  },
  resources: {
    label: 'Resources',
    links: [
      {
        label: 'Privacy Policy',
        link: 'https://legal.gravityhub.org',
        target: '_blank',
      },
      {
        label: 'Brand Assets',
        link: 'https://drive.google.com/drive/folders/1D_RtcZ9-EkiUmM2uD7a2OTY430TqD-ue',
        target: '_blank',
      },
    ],
  },
};
