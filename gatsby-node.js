const path = require(`path`)

exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		resolve(
			graphql(
				`
					{
						datoCmsSite {
							locale
						}
						allDatoCmsMainMenu {
							edges {
								node {
									titel
									url
									locale
									relatedPageId
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					reject(result.errors);
				}

				const defaultLocale = result.data.datoCmsSite.locale
				const menuItems = result.data.allDatoCmsMainMenu.edges

				menuItems.forEach(({ node }) => {
					const locale = node.locale
					const isDefaultLocale = locale === defaultLocale
					const pageTemplate = node.relatedPageId
					const isIndex = pageTemplate === 'home'

					const urlPath = () => {
						if (isDefaultLocale && isIndex) {
							return '/'
						} else if (!isDefaultLocale && isIndex) {
							return `${locale}/`
						} else if (isDefaultLocale && !isIndex) {
							return node.url
						} else if (!isDefaultLocale && !isIndex) {
							return `${locale}/${node.url}`
						}
					}

					createPage({
						path: urlPath(),
						component: path.resolve(`src/templates/${pageTemplate}.js`),
						context: {
							locale
						}
					})
				})
			})
		)
	})
};
