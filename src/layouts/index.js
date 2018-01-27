import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Content from '../components/Content'
import Logo from '../components/Logo'
import Footer from '../components/Footer'

import { getPageByPath, getPagesByLang } from '../selects/pageSelects'

import './index.scss'

const TemplateWrapper = ({
	children,
	data: { site, allSitePage, datoCmsSite, allDatoCmsFooter },
	location,
}) => {
	const allLanguages = datoCmsSite.locales
	const allPages = allSitePage.edges
	const defaultLanguage = datoCmsSite.locale

	const currentPath = location.pathname
	const currentPage = getPageByPath(currentPath, allPages)
	const currentPageLanguage =
		(currentPage && currentPage.node.context.locale) || defaultLanguage
	const isIndexPage = currentPage && currentPage.node.context.isIndexPage

	const footerContentByLanguage = allDatoCmsFooter.edges.find(
		edge => edge.node.locale === currentPageLanguage
	)

	return (
		<div className="app">
			<Helmet
				title={site.siteMetadata.title}
				meta={[
					{
						name: 'description',
						content: `${site.siteMetadata.metaTags.description}`,
					},
					{
						name: 'keywords',
						content: `${site.siteMetadata.metaTags.keywords}`,
					},
				]}
			/>
			<Header
				currentPath={currentPath}
				allLanguages={allLanguages}
				defaultLanguage={defaultLanguage}
			/>
			<Content>
				<Logo
					isHomePage={isIndexPage}
					currentPageLanguage={currentPageLanguage}
					defaultLanguage={defaultLanguage}
				/>
				<main className={isIndexPage ? '' : 'main'}>{children()}</main>
			</Content>
			<Footer
				pages={getPagesByLang(currentPageLanguage, allPages)}
				footerContent={footerContentByLanguage.node}
			/>
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
		allSitePage {
			edges {
				node {
					path
					context {
						locale
						isIndexPage
						relatedPageId
					}
				}
			}
		}
		datoCmsSite {
			locales
			locale
		}
		allDatoCmsFooter {
			edges {
				node {
					locale
					footerSubline
					footerLinks {
						title
						locale
						externalLink
						mainMenuRelation {
							relatedPageId
						}
					}
				}
			}
		}
	}
`

export default TemplateWrapper
