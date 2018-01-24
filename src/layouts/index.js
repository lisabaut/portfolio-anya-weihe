import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Content from '../components/Content'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

import './index.scss'

const TemplateWrapper = ({ children, data, location, pathContext }) => {
	const currentPage = data.allSitePage.edges.find(edge => edge.node.path === location.pathname)
	const currentPageLanguage = currentPage.node.context.locale
	const isIndexPage = currentPage.node.context.isIndexPage
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
				<Logo isHomePage={isIndexPage} />
				<main className={isIndexPage ? '' : 'main'}>{children()}</main>
			</Content>
			<Footer />
		</div>
	)
}

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export const query = graphql`
	query TemplateWrapperQuery {
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
						locale,
						isIndexPage
					}
				}
			}
		}
	}
`

export default TemplateWrapper
