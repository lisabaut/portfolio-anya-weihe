import R from 'ramda'

export const hasExternalLink = footerLink => !R.isNil(footerLink.externalLink)
export const hasRelatedPageId = footerLink =>
	!R.isNil(footerLink.mainMenuRelation) &&
	!R.isNil(footerLink.mainMenuRelation.relatedPageId)

export const getExternalLinks = list =>
	!R.isEmpty(list) && R.filter(hasExternalLink, list)
export const getMainMenuRelation = list =>
	!R.isEmpty(list) && R.filter(hasRelatedPageId, list)
