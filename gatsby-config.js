require("dotenv").config();

/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  siteMetadata: {
    title: `Caroline Patrick's Portfolio`,
    siteUrl: `https://carolinepatrick.dev`
  },
  plugins: [ 
    {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [process.env.GA_TRACKING_ID],
      pluginConfig: {
        head: true,
      },
    },
  }, 
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};