import React from 'react'
import Link from 'gatsby-link'

import './header.scss'

const Header = () => (
  <div
    className="header"
  >
    <div
      className="header__inner"
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

export default Header