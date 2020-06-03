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
        url: '/docs',
        priority: 1,
      },
      {
        url: '/faq',
        priority: 1,
      },
      {
        url: '/blog',
        priority: 1,
      }
    ]
  }
}

export const mainTitle = 'Gravity Protocol'
const previewImagePath = '/img/preview/opengraph_gravity@2x.png'

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

export const getTelegramLink = (sections) => sections.community.links.find(item => item.label === 'Telegram')
export const getDiscordLink = (sections) => sections.community.links.find(item => item.label === 'Discord')
export const getFAQLink = (sections) => sections.protocol.links.find(item => item.label === 'FAQ')
export const getDocsLink = (sections) => sections.protocol.links.find(item => item.label === 'Docs')

export const internalProtocolLinks = {
  links: [
    {
      label: 'Whitepaper',
      link: '/docs/whitepaper.pdf',
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
      link: '/blog',
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
        label: 'GitHub',
        link: 'https://github.com/Gravity-Tech',
        target: '_blank',
      },
      {
        label: 'Docs',
        link: 'https://github.com/Gravity-Tech',
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
    ],
  },
};