import { getExternalLinks, getMainMenuRelation } from './footerMenuSelects'

const withExternalLinks = [
	{
		title: 'Speaker Search',
		externalLink: 'https://www.speaker-search.de/sprecher/anya-weihe/',
		mainMenuRelation: null,
	},
	{
		title: 'Bodalgo',
		externalLink: 'https://www.bodalgo.com/de/sprecher/anya-weihe',
		mainMenuRelation: null,
	},
]

const withMenuRelation = [
	{
		title: 'Contact',
		externalLink: null,
		mainMenuRelation: {
			relatedPageId: 'contact',
		},
	},
	{
		title: 'Imprint',
		externalLink: null,
		mainMenuRelation: {
			relatedPageId: 'imprint',
		},
	},
]

const footerLinks = [...withExternalLinks, ...withMenuRelation]

describe('footerMenuSelects', () => {
	describe('getExternalLinks', () => {
		test('returns links with external url ', () => {
			expect(getExternalLinks(footerLinks)).toEqual(withExternalLinks)
		})
		test('returns false on empty list', () => {
			expect(getExternalLinks([])).toBeFalsy()
		})
	})

	describe('getMenuRelations', () => {
		test('returns links with external url ', () => {
			expect(getMainMenuRelation(footerLinks)).toEqual(withMenuRelation)
		})
		test('returns false on empty list', () => {
			expect(getMainMenuRelation([])).toBeFalsy()
		})
	})
})
