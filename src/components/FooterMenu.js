import R from 'ramda'
import React from 'react'

import Link from 'gatsby-link'

import { hasExternalLink, hasRelatedPageId } from '../selects/footerMenuSelects'
import { getPageByRelatedPageId } from '../selects/pageSelects'

import './footerMenu.scss'

const ExternalLink = ({ title, href }) => (
	<a href={href} target="_blank">
		{title}
	</a>
)

const InternalLink = ({ title, path }) => <Link to={path}>{title}</Link>

const FooterMenu = ({ pages, footerLinks }) => (
	<ul className="footer-menu">
		{footerLinks.map((link, index) => {
			if (hasExternalLink(link)) {
				return (
					<li key={link.title} className="footer-menu__item">
						<ExternalLink title={link.title} href={link.externalLink} />
					</li>
				)
			}

			if (hasRelatedPageId(link)) {
				const relatedPage = getPageByRelatedPageId(
					link.mainMenuRelation.relatedPageId,
					pages
				)
				return (
					<li key={link.title} className="footer-menu__item">
						<InternalLink title={link.title} path={relatedPage.node.path} />
					</li>
				)
			}
		})}
	</ul>
)

export default FooterMenu
