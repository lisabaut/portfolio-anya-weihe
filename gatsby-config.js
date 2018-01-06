const env = process.env.NODE_ENV || 'development'

const dotenv = require('dotenv')
dotenv.config({path: `./.env.${env}`})

const autoprefixer = require('autoprefixer')

module.exports = {
  pathPrefix: process.env.PATH_PREFIX,
  siteMetadata: {
    title: `Gatsby Default Starter`,
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
