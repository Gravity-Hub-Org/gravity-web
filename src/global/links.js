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
    const key = sectionKeys[i]
    let { links } = sections[key];

    if (!links) continue;

    result.push(...links.map(mapLinkToSitemapItem));
  }

  return result;
};
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
        link: 'https://t.me/gravityhuborg',
        target: '_blank',
      },
      {
        label: 'Discord',
        link: 'https://discord.gg/mSRAdB ',
        target: '_blank',
      },
      {
        label: 'Reddit',
        link: 'https://www.reddit.com/user/GravityHubOrg',
        target: '_blank',
      },
    ],
  },
  news: {
    label: 'News',
    links: [
      {
        label: 'Blog',
        link: 'https://medium.com/@gravity_hub',
        target: '_blank',
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/@gravity_hub ',
        target: '_blank',
      },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/company/gravity-hub',
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
