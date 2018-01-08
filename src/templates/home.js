import React from 'react'

const Home = ({ home }) => <div>{home.title}</div>

const Page = ({ data }) => (
	<div>
		{data.allDatoCmsHome.edges.map(({ node }) => (
			<Home id={node.id} home={node} />
		))}
	</div>
)

export default Page

export const query = graphql`
	query IndexQuery($locale: String!) {
		allDatoCmsHome(filter: { locale: { eq: $locale } }) {
			edges {
				node {
					id
					title
				}
			}
		}
	}
`
