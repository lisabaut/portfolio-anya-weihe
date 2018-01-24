import React from 'react'

import './footer.scss'

const Footer = ({ footerContent }) => (
	<footer className="footer">
		<div
			className="footer__content"
			dangerouslySetInnerHTML={{
				__html: footerContent,
			}}
		/>
	</footer>
)

export default Footer
