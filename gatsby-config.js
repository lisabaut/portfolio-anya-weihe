const dotenv = require('dotenv')
const autoprefixer = require('autoprefixer')
const config = require('./config/site-config')
dotenv.config()

const pathPrefix = process.env.PATH_PREFIX ? process.env.PATH_PREFIX : '/'

module.exports = {
	pathPrefix,
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
