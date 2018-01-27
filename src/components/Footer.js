import R from 'ramda'
import React from 'react'

import Link from 'gatsby-link'

import FooterMenu from './FooterMenu'

import { hasExternalLink, hasRelatedPageId } from '../selects/footerMenuSelects'
import { getPageByRelatedPageId } from '../selects/pageSelects'

import './footer.scss'

const Footer = ({ pages, footerContent: { footerLinks, footerSubline } }) => (
	<footer className="footer">
		<div className="footer__content">
			{!R.isNil(footerLinks) && (
				<FooterMenu footerLinks={footerLinks} pages={pages} />
			)}
			{footerSubline && <p>{footerSubline}</p>}
		</div>
	</footer>
)

export default Footer
