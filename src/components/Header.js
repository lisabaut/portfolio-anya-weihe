import React from 'react'

import Container from './Container'
import LanguageSwitch from './LanguageSwitch'

import './header.scss'

const Header = () => (
	<div className="header">
		<Container>
			<div className="header__inner">
				<LanguageSwitch />
			</div>
		</Container>
	</div>
)

export default Header
