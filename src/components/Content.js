import React from 'react'
import PropTypes from 'prop-types'

import Container from './Container'

import './content.scss'

const Content = ({ children }) =>
	<div className="content">
		<Container>
			{children}
		</Container>
	</div>;

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content
