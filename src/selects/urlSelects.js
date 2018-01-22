import R from 'ramda'

export const convertToLanguageUrlSlug = lang => `/${lang}/`

export const urlContainsLanguageSlug = (
	currentPath,
	allLanguages,
	defaultLanguage
) => {
	const availableTranslations = R.filter(l => l !== defaultLanguage)(
		allLanguages
	)
	const convertedLanguageSlugs = R.map(convertToLanguageUrlSlug)(
		availableTranslations
	)
	const valueStartsWith = R.map(a => R.startsWith(a))
	return R.anyPass(valueStartsWith(convertedLanguageSlugs))(currentPath)
}
