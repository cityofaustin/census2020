const languages = require('./languages.js');

module.exports = {
  languages,
  title: `Austin-Travis County Census 2020`,
  header: {
    secondaryLinks: [
      { text: 'English', link: '/en' },
      { text: 'Español', link: '/es' },
      { text: 'Tiếng Việt', link: '/vt' },
    ],
  },
  events: {
    defaultVisible: 5,
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
