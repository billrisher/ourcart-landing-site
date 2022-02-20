module.exports = {
  siteMetadata: {
    title: 'OurCart',
    description: 'Shopping together, made easy.',
    author: 'Bill Risher'
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    }
  ]
};
