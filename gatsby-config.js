const env = process.env.NODE_ENV || 'development'

const dotenv = require('dotenv')
dotenv.config({path: `./.env.${env}`})

module.exports = {
  pathPrefix: process.env.PATH_PREFIX,
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
}
