import { urlContainsLanguageSlug } from './urlSelects'

describe('urlContainsLanguageSlug', () => {
	const defaultLang = 'en'
	const locales = ['en', 'de']

	it('returns true when url contains available translation slug', () => {
		const location = {
			pathname: '/de/',
		}
		expect(
			urlContainsLanguageSlug(location.pathname, locales, defaultLang)
		).toBeTruthy()
	})

	it('returns false when url contains no translation slug', () => {
		expect(urlContainsLanguageSlug('/en', locales, defaultLang)).toBeFalsy()
	})
})
