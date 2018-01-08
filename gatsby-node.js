const path = require(`path`)

exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {
		resolve(
			graphql(
				`
					{
						datoCmsSite {
							locales
						}
						allDatoCmsModel(filter:{singleton:{eq:true}}) {
							edges {
								node {
									name
									apiKey
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					reject(result.errors);
				}

				const singletonModels = result.data.allDatoCmsModel.edges
				const locales = result.data.datoCmsSite.locales

				locales.forEach(locale => {
					singletonModels.forEach(({ node }) => {
						const apiKey = node.apiKey;
						const pageTemplate = path.resolve(`src/templates/${apiKey}.js`);
						createPage({
							path: `${locale}/${apiKey}`,
							component: pageTemplate,
							context: {
								locale
							}
						})
					})
				})
			})
		)
	})
};
