import React from 'react'

const Home = ({ data }) => <div>{data.datoCmsHome.title}</div>

export default Home

export const query = graphql`
	query IndexQuery($locale: String!) {
		datoCmsHome(locale: { eq: $locale }) {
			title
		}
	}
`
