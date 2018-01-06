const env = process.env.NODE_ENV || 'development'

const dotenv = require('dotenv')
dotenv.config({path: `./.env.${env}`})

const config = require('./config/site-config')
const autoprefixer = require('autoprefixer')

module.exports = {
  pathPrefix: process.env.PATH_PREFIX,
  siteMetadata: {
		title: config.siteTitle,
		metaTags: config.metaTags
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ],
        precision: 8
      }
    }
  ],
}
