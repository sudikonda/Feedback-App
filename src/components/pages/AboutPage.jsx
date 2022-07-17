import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'

function AboutPage() {
  return (
    <Card className="about">
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>version: 1.0.1</p>

        <p>
            <Link to='/'>Back to Home</Link>
        </p>
    </Card>
  )
}

export default AboutPage