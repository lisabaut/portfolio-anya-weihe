import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Content from '../components/Content'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

import './index.scss'

const SubPageTemplate = ({ children, data, location }) => {
	console.log('SUBPAGE')
	console.log('location', location)
	console.log('data', data)
	return (
		<div className="app">
			<Helmet
				title={data.site.siteMetadata.title}
				meta={[
					{
						name: 'description',
						content: `${data.site.siteMetadata.metaTags.description}`,
					},
					{
						name: 'keywords',
						content: `${data.site.siteMetadata.metaTags.keywords}`,
					},
				]}
			/>
			<Header
				currentPath={location.pathname}
				allLanguages={data.datoCmsSite.locales}
				defaultLanguage={data.datoCmsSite.locale}
			/>
			<Content>
				<Logo isHomePage={false} />
				<main className="main">{children()}</main>
			</Content>
			<Footer />
		</div>
	)
}

SubPageTemplate.propTypes = {
	children: PropTypes.func,
}

export const query = graphql`
	query SubPageTemplateQuery {
		site {
			siteMetadata {
				title
				metaTags {
					description
					keywords
				}
			}
		}
		datoCmsSite {
			locales
			locale
		}
		allSitePage {
			edges {
				node {
					path
					context {
						locale
					}
				}
			}
		}
	}
`

export default SubPageTemplate
