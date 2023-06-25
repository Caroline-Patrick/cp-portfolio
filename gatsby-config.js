require("dotenv").config();
const {GA_TRACKING_ID} = process.env

/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  siteMetadata: {
    title: `Caroline Patrick's Portfolio`,
    siteUrl: `https://carolinepatrick.dev`
  },
//   plugins: [ 
//     // {
//   //   resolve: 'gatsby-plugin-google-gtag',
//   //   options: {
//   //     trackingIds: [GA_TRACKING_ID],
//   //     pluginConfig: {
//   //       head: true,
//   //     },
//   //   },
//   // }, 
//   "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
//     resolve: 'gatsby-source-filesystem',
//     options: {
//       "name": "images",
//       "path": "./src/images/"
//     },
//     __key: "images"
//   }]
// };

plugins: [
  { // this must be loaded first in order to work
    resolve: `gatsby-plugin-gtag`, // note this instead of gatsby-plugin-react-helmet
    options: {
      trackingId: GA_TRACKING_ID,
      head: true, // note this is TRUE and not FALSE as listed in other examples above
      anonymize: true
    }
  },
  "gatsby-plugin-react-helmet",
  // other plugins
]
}