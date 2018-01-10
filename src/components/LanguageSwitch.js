import React from 'react'
import Link from 'gatsby-link'

import './languageSwitch.scss'

const LanguageSwitch = () => (
	<div className="nav-language">
		<div className="nav-language__item">
			<Link
				to="/"
				exact
				className="nav-language__link"
				activeClassName="active"
			>
				en
			</Link>
		</div>
		<span>|</span>
		<div className="nav-language__item">
			<Link
				to="/de"
				exact
				className="nav-language__link"
				activeClassName="active"
			>
				de
			</Link>
		</div>
	</div>
)

export default LanguageSwitch
