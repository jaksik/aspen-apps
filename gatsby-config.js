module.exports = {
  siteMetadata: {
    title: `Aspen Apps`,
    "description": "An application development company based out of Silverthorne, Colorado.",
    author: `@jaksik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Pacifico`,
            variants: [`400`]
          },
          {
            family: `Playball`,
            variants: [`400`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aspen-applications`,
        short_name: `aspen`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/graphics/web-design.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-netlify',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
