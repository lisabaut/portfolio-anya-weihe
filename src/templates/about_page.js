import React from 'react'

const Page = ({data}) => {
	console.log('data', data)

	return (
		<div>Hello About Page</div>
	)
}

export default Page

export const query = graphql`
  query AboutQuery($locale: String!) {
    allDatoCmsAboutPage(filter: {locale: {eq: $locale}}) {
			edges {
				node {
					seoMetaTags {
						...GatsbyDatoCmsSeoMetaTags
					}
					locale
					title
					subtitle
					photo {
						sizes(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
							...GatsbyDatoCmsSizes
						}
					}
				}
			}
		}
  }
`
