export const siteMetadata = {
  siteUrl: '',
  siteRepo: '',
  siteLogo: '/images/logo.jpg',
  siteShortTitle: 'rubbishmaker',
  siteTitle: '前端开发',
  siteScreenshot: '',
  siteDescription: '一名喜欢折腾一下的前端开发。',
  author: 'rubbishmaker',
  fullName: 'oxf',
  location: 'China',
  timeZone: 'Asia/Shanghai',
  locationIcon: '🇨🇳',
  // locationIcon: 'flag-china',
  position: 'Full Stack Web Developer',
  company: 'ant',
  companySite: '',
  locale: 'en-US',
  image: '/images/logo.jpg',
  socialBanner: '/images/logo.jpg',
  profileCover: 'https://static.webjam.cn/images/bg/wew.png',
  analytics: {
    // plausibleDataDomain: '',
    // simpleAnalytics: false, // true | false
    analyticsURL: '',
    umamiScriptSrc: '',
    umamiSiteId: '',
    // googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },

  postPageSize: 9,
};

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export const commentConfig = {
  enable: false,
  provider: 'giscus',
  // https://giscus.app/
  giscusConfig: {
    gitUsername: '',
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: true,
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
    lang: 'zh-CN',
  },
};

export const socialAccounts = {
  x: '',
  instagram: '',
  email: 'zwcxyz@gmail.com',
  github: 'https://github.com/rubbishmaker',
  twitter: '',
  facebook: '',
  youtube: '',
  linkedin: '',
};

export const author = {
  name: 'ouxiaofeng',
  location: 'China changsha',
  timeZone: 'Asia/Shanghai',
  locationIcon: '🇨🇳',
  position: 'Full Stack Web Developer',
  calMeetingUrl: '',
  status: 'Working at Ant Group',
  // wakatime: 'https://wakatime.com/@wencaizhang',
  github_accounts: [
    {
      username: 'rubbishmaker',
      token: process.env.GITHUB_READ_USER_TOKEN_PERSONAL,
      endpoint: '/api/github?type=personal',
      type: 'personal',
      is_active: true,
    },
  ],
};

export const featureSwich = {
  // chatGPT
  ai: false,
  contactForm: true,
  meeting: false,
  guestbook: false,
  spotify: false,
  dashboard_wakatime: false,
  dashboard_github: true,
  topBanner: true,
};

export const docSearch = {
  apiKey: 'd291a440fb755a9b202844a68064d4e9', // search only key
  indexName: 'BrianStyle',
  appId: 'A4M5OCLKX8',
};
