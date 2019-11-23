const languages = require('./languages.js');

const languageListing = () => {
  let navigation = {};

  languages.languagesMap.map(lang => {
    navigation[lang.abbr] = [];
    headerPages.map(page => {
      let item = {
        text: page.text[lang.abbr],
        link: `${lang.abbr}${page.link}`,
      };
      navigation[lang.abbr].push(item);
    });
  });

  return navigation;
};

const headerPages = [
  {
    text: {
      en: 'Community',
      es: 'Communidad',
      vt: 'Tiếng Việt',
    },
    link: '/community',
  },
  { text: { en: 'How', es: 'Como', vt: 'Tiếng Việt' }, link: '/how' },
  { text: { en: 'About', es: 'Sobre', vt: 'Tiếng Việt' }, link: '/about' },
  { text: { en: 'Why', es: 'Porque', vt: 'Tiếng Việt' }, link: '/why' },
];

const langListing = languageListing();

module.exports = {
  langListing,
  languages,
  title: `Census 2020`,
  header: {
    secondaryLinks: [
      { text: 'English', link: '/en' },
      { text: 'Español', link: '/es' },
      { text: 'Tiếng Việt', link: '/vt' },
    ],
    navigation: langListing,
    // navigation: [
    //   {
    //     items: [{ text: 'Community', link: '/en/community' }],
    //   },
    //   {
    //     items: [{ text: 'About', link: '/en/about' }],
    //   },
    //   {
    //     items: [{ text: 'Why', link: '/en/why' }],
    //   },
    //   {
    //     items: [{ text: 'How', link: '/en/how' }],
    //   },
    //   {
    //     title: 'Current Section',
    //     items: [
    //       { text: 'Navigation link', link: '/' },
    //       { text: 'Navigation link', link: '/' },
    //       { text: 'Navigation link', link: '/' },
    //     ],
    //   },
    // ],
  },
  //   siteUrl: 'https://angeloocana.com',
  //   author: {
  //     name: 'Ângelo Ocanã',
  //     homeCity: 'Ottawa',
  //     email: 'angeloocana@gmail.com',
  //     defaultLink: 'https://github.com/angeloocana',
  //   },
  //   sourceCodeLink: 'https://github.com/angeloocana/angeloocana',
  //   menu: [
  //     { label: 'home', slug: '/' },
  //     { label: 'posts', slug: '/blog/' },
  //     { label: 'tags', slug: '/tags/' },
  //     { label: 'about', slug: '/about/' },
  //     {
  //       label: 'resume',
  //       slug: '/resume/',
  //       items: [
  //         { label: 'resume.technologies', slug: '/resume/technologies/' },
  //         { label: 'resume.jobsAndClients', slug: '/resume/jobsAndClients/' },
  //         { label: 'resume.educations', slug: '/resume/education' },
  //         { label: 'resume.languages', slug: '/resume/languages' },
  //       ],
  //     },
  //     { label: 'sourceCode', link: 'https://github.com/angeloocana/angeloocana' },
  //     { label: 'contact', slug: '/contact/' },
  //   ],
};
