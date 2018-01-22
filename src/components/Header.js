import React from 'react'

import Container from './Container'
import LanguageSwitch from './LanguageSwitch'

import './header.scss'

const Header = ({ currentPath, allLanguages, defaultLanguage }) => (
	<div className="header">
		<Container>
			<div className="header__inner">
				<LanguageSwitch
					currentPath={currentPath}
					allLanguages={allLanguages}
					defaultLanguage={defaultLanguage}
				/>
			</div>
		</Container>
	</div>
)

export default Header
