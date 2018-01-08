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
			resolve: `gatsby-source-datocms`,
			options: {
				apiToken: process.env.DATO_API_TOKEN,
			},
		},
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
