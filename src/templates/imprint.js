import React from 'react'
import PropTypes from 'prop-types'

const Imprint = ({ data }) => (
	<div>
		<h2>{data.datoCmsImprint.title}</h2>
		<div
			dangerouslySetInnerHTML={{
				__html: data.datoCmsImprint.imprintTextNode.childMarkdownRemark.html,
			}}
		/>
	</div>
)

Imprint.propTypes = {
	data: PropTypes.object,
}

export default Imprint

export const query = graphql`
	query ImprintQuery($locale: String!) {
		datoCmsImprint(locale: { eq: $locale }) {
			title
			imprintTextNode {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`
