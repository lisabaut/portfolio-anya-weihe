import React from 'react'

import './home.scss'

const Home = ({ data }) => (
	<div className="home">
		<div
			className="home__content"
			dangerouslySetInnerHTML={{
				__html: data.datoCmsHome.homeContent,
			}}
		/>
	</div>
)

export default Home

export const query = graphql`
	query HomeQuery($locale: String!) {
		datoCmsHome(locale: { eq: $locale }) {
			homeContent
		}
	}
`
