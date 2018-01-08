import React from 'react'

import R from 'ramda'

import getBrowserLanguage from '../utils/locales/getBrowserLanguage'

class RedirectIndex extends React.Component {
	componentWillMount() {
		if (typeof window !== 'undefined') {
			const currentUrl = window.location.href
			const currentPathName = this.props.currentPath

			const availableLocales = this.props.locales
			const localesSlugs = availableLocales.map(l => `/${l}/`)
			const urlContainsLocaleSlug =
				localesSlugs.filter(a => currentPathName.includes(a)).length > 0

			if (!urlContainsLocaleSlug) {
				if (currentPathName === '/') {
					const browserLangInTwoChars = getBrowserLanguage().substr(0, 2)
					const matchingLang = availableLocales.find(
						l => l === browserLangInTwoChars
					)
					const browserLangLocalizationExist =
						matchingLang && matchingLang.length > 0
					const preferredLang = browserLangLocalizationExist
						? matchingLang
						: this.props.defaultLocale
					window.location = currentUrl + preferredLang + `/home`
				}
			}
		}
	}
	render() {
		return this.props.children
	}
}

export default RedirectIndex
