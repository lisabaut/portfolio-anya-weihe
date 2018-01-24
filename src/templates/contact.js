import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({ data }) => (
	<div>
		<h2>{data.datoCmsContact.title}</h2>
		<div
			dangerouslySetInnerHTML={{
				__html: data.datoCmsContact.contactContent,
			}}
		/>
	</div>
)

Contact.propTypes = {
	data: PropTypes.object,
}

export default Contact

export const query = graphql`
	query ContactQuery($locale: String!) {
		datoCmsContact(locale: { eq: $locale }) {
			title
			contactContent
		}
	}
`
