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

export const getSitemap = () => {

  return {
    hostname: 'https://gravity.tech',
    // gzip: true,
    routes: [
      {
        url: '/docs/whitepaper.pdf',
        priority: 1,
      },
      {
        url: '/explorer',
        priority: 1,
      },
      {
        url: '/docs',
        priority: 1,
      },
      {
        url: '/faq',
        priority: 1,
      },
      {
        url: '/metamask-waves',
        priority: 1,
      },
      {
        url: '/blog',
        priority: 1,
      },

    ]
  }
}

export const mainTitle = 'Gravity Protocol'
const previewImagePath = 'https://alpha.gravityhub.org/img/preview/preview_GH@1x.png'

export const shortDescription = 'Oracles and Cross-chain Communication Network'
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
    property: 'og:image',
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
    property: 'twitter:image',
    content: previewImagePath
  },
  {
    property: 'twitter:image:src',
    content: previewImagePath
  },
  {
    property: 'twitter:card',
    content: 'summary_large_image'
  },
  {
    content: 'all',
    name: 'robots',
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

export const getTelegramLink = (sections) => sections.community.links.find(item => item.label === 'Telegram')
export const getDiscordLink = (sections) => sections.community.links.find(item => item.label === 'Discord')
export const getBlogLink = (sections) => sections.protocol.links.find(item => item.label === 'FAQ')
export const getFAQLink = () => 'https://medium.com/gravity-protocol'
export const getDocsLink = (sections) => sections.protocol.links.find(item => item.label === 'Docs')
export const getDemoMM = () => 'http://172.105.4.87:8080/'

export const internalProtocolLinks = {
  links: [
    {
      label: 'Whitepaper',
      link: '/whitepaper',
      target: '_blank',
    },
    {
      label: 'FAQ',
      link: '/faq',
      target: '_blank',
    },
    {
      label: 'Docs',
      link: '/docs',
      target: '_blank',
    },
  ],
}
export const internalNewsLinks = {
  links: [
    {
      label: 'Blog',
      link: 'https://medium.com/gravity-protocol',
      target: '_blank',
    },
  ],
}

const filterObjectListBy = (objectsList, fieldName) => {
  const res = [];

  for (const obj of objectsList) {
    const resultsMapped = res.map(item => item[fieldName])

    if (resultsMapped.includes(obj[fieldName])) {
      continue
    }

    res.push(obj)
  }

  return res
}
export const constructPreviewLinks = (sections) => {

  return {
    ...sections,
    protocol: {
      ...sections.protocol,
      links: filterObjectListBy([
        ...internalProtocolLinks.links,
        ...sections.protocol.links,
      ], 'label')
    },
    news: {
      ...sections.news,
      links: filterObjectListBy([
        ...internalNewsLinks.links,
        ...sections.news.links,
      ], 'label')
    },
  }
}
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
        link: 'https://medium.com/@gravity_protocol',
        target: '_blank',
      },
      {
        label: 'Mirror Accounts',
        link: 'http://172.105.4.87:8080/',
        target: '_blank',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/Gravity-Tech',
        target: '_blank',
      },
      {
        label: 'Docs',
        link: 'https://docs.gravity.tech',
        target: '_blank',
      },
      {
        label: 'Explorer',
        link: '/explorer',
        target: '_blank',
      },
      {
        label: 'Bridges',
        link: 'https://susy.gravity.tech/',
        target: '_blank',
      }
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
        link: 'https://www.reddit.com/r/Protocol_Gravity/',
        target: '_blank',
      },
    ],
  },
  news: {
    label: 'News',
    links: [
      {
        label: 'Blog',
        link: 'https://medium.com/gravity-protocol',
        target: '_blank',
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/ProtocolGravity',
        target: '_blank',
      },
      {
        label: 'LinkedIn',
        link: 'https://linkedin.com/company/gravity-protocol',
        target: '_blank',
      },
    ],
  },
  resources: {
    label: 'Resources',
    links: [
      {
        label: 'Brand Assets',
        link: 'https://drive.google.com/drive/folders/1D_RtcZ9-EkiUmM2uD7a2OTY430TqD-ue',
        target: '_blank',
      },
      {
        label: 'Privacy policy',
        link: 'https://explorer.gravity.tech/docs/pdf/Gravity_Privacy_Policy_15.07.2020.pdf',
        target: '_blank',
      },
      {
        label: 'Terms & Conditions',
        link: 'https://explorer.gravity.tech/docs/pdf/Gravity_Terms_of_Use_15.07.2020.pdf',
        target: '_blank',
      },
      {
        label: 'License',
        link: '/docs/Gravity_MIT_License-2.pdf',
        target: '_blank',
      }
    ],
  },
};