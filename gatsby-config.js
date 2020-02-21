module.exports = {
  pathPrefix: "/grgr",
  siteMetadata: {
    title: `Studio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
  ],
};
