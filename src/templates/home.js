import React from 'react'

const Page = ({data}) => {
	return (
		<div>Hello Home Page</div>
	)
}

export default Page

export const query = graphql`
	query IndexQuery($locale: String!) {
		allDatoCmsHome(filter: {locale: {eq: $locale}}) {
			edges {
				node {
					copyright
					introTextNode {
						introText
					}
				}
			}
		}
	}
`
