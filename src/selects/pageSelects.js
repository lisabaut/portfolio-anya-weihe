import R from 'ramda'

export const getPageByLang = (lang, page) =>
	page.node.context && page.node.context.locale === lang
export const getPagesByLang = (lang, allPages) =>
	R.filter(page => getPageByLang(lang, page))(allPages)

export const getPageByRelatedPageId = (id, pages) =>
	R.find(page => page.node.context.relatedPageId === id)(pages)
export const getPageByPath = (path, pages) =>
	R.find(page => page.node.path === path)(pages)
