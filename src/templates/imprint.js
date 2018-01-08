import React from 'react'

const Imprint = ({ data }) => <div>{data.datoCmsImprint.title}</div>

export default Imprint

export const query = graphql`
	query ImprintQuery($locale: String!) {
		datoCmsImprint(locale: { eq: $locale }) {
			title
		}
	}
`
