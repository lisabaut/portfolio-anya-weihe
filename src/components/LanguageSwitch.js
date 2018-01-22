import React from 'react'
import Link from 'gatsby-link'

import {
	urlContainsLanguageSlug,
	convertToLanguageUrlSlug,
} from '../selects/urlSelects'

import './languageSwitch.scss'

const LanguageLink = ({ language, path, isActive }) => (
	<div className="nav-language__item">
		<Link
			to={convertToLanguageUrlSlug(language)}
			isActive={() => isActive}
			className="nav-language__link"
			activeClassName="active"
		>
			{language}
		</Link>
	</div>
)

const LanguageIndexLink = ({ label, isActive }) => (
	<div className="nav-language__item">
		<Link
			to="/"
			isActive={() => isActive}
			className="nav-language__link"
			activeClassName="active"
		>
			{label}
		</Link>
	</div>
)

const LanguageSwitch = ({ currentPath, allLanguages, defaultLanguage }) => (
	<div className="nav-language">
		{allLanguages.map((language, index) => {
			const urlContainsLang = urlContainsLanguageSlug(
				currentPath,
				allLanguages,
				defaultLanguage
			)
			if (language === defaultLanguage) {
				return (
					<LanguageIndexLink
						key={index}
						label={defaultLanguage}
						isActive={!urlContainsLang}
					/>
				)
			}
			return (
				<LanguageLink
					key={index}
					language={language}
					isActive={urlContainsLang}
				/>
			)
		})}
	</div>
)

export default LanguageSwitch
