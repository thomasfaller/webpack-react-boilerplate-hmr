import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './Layout'

const Home = () => {
  return (
    <Layout>
      <p>Welcome to my Webpack boilerplate for my React.js webapps!</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  )
}

export default Home
