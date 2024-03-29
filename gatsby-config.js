module.exports = {
  siteMetadata: {
    title: 'sunrise.social',
    description: 'A native Scuttlebutt app for offline-first social networks',
    author: 'Sunrise Choir'
  },
  plugins: [
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'sunrise.social',
        short_name: 'sunrise.social',
        start_url: '/',
        background_color: '#c33764',
        theme_color: '#1d2671',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '3',
        matomoUrl: 'https://analytics.mikey.nz',
        siteUrl: 'https://sunrise.social'
      }
    }
    // 'gatsby-plugin-offline',
  ]
}
