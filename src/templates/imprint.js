import React from 'react'

const Imprint = ({ imprint }) => <div>{imprint.title}</div>

const Page = ({ data }) => (
	<div>
		{data.allDatoCmsImprint.edges.map(({ node }) => (
			<Imprint id={node.id} imprint={node} />
		))}
	</div>
)

export default Page

export const query = graphql`
	query ImprintQuery($locale: String!) {
		allDatoCmsImprint(filter: { locale: { eq: $locale } }) {
			edges {
				node {
					id
					title
				}
			}
		}
	}
`
