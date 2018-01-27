import {
	getPagesByLang,
	getPageByRelatedPageId,
	getPageByPath,
} from './pageSelects'

const pagesInEnglish = [
	{
		node: {
			path: '/contact',
			context: {
				locale: 'en',
				isIndexPage: false,
				relatedPageId: 'contact',
			},
		},
	},
	{
		node: {
			path: '/',
			context: {
				locale: 'en',
				isIndexPage: true,
				relatedPageId: 'home',
			},
		},
	},
	{
		node: {
			path: '/imprint',
			context: {
				locale: 'en',
				isIndexPage: false,
				relatedPageId: 'imprint',
			},
		},
	},
]

const pagesInGerman = [
	{
		node: {
			path: '/de/kontakt',
			context: {
				locale: 'de',
				isIndexPage: false,
				relatedPageId: 'contact',
			},
		},
	},
	{
		node: {
			path: '/de/',
			context: {
				locale: 'de',
				isIndexPage: true,
				relatedPageId: 'home',
			},
		},
	},
	{
		node: {
			path: '/de/impressum',
			context: {
				locale: 'de',
				isIndexPage: false,
				relatedPageId: 'imprint',
			},
		},
	},
]

const allSitePages = [...pagesInEnglish, ...pagesInGerman]

describe('pageSelects', () => {
	describe('getPagesByLang', () => {
		test('returns all matching pages by language', () => {
			expect(getPagesByLang('en', allSitePages)).toEqual(pagesInEnglish)
			expect(getPagesByLang('de', allSitePages)).toEqual(pagesInGerman)
		})
		test('returns empty array on non matching pages by language', () => {
			expect(getPagesByLang('ru', allSitePages)).toHaveLength(0)
		})
	})

	describe('getPageByRelatedPageId', () => {
		test('returns the matching page by relatedPageId', () => {
			expect(
				getPageByRelatedPageId('imprint', getPagesByLang('en', allSitePages))
			).toEqual(pagesInEnglish[2])
		})
		test('returns undefined by non matching page', () => {
			expect(
				getPageByRelatedPageId('tada', getPagesByLang('de', allSitePages))
			).toBeUndefined()
		})
	})

	describe('getPageByPath', () => {
		test('returns the matching page by path', () => {
			expect(getPageByPath('/de/', pagesInGerman)).toEqual(pagesInGerman[1])
		})
		test('returns undefined by non matching page', () => {
			expect(getPageByPath('/anything', pagesInGerman)).toBeUndefined()
		})
	})
})
