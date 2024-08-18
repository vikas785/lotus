import React from 'react'
import ImageContainer from './component/ImageContainer'

const Home = () => {
  return (
    <div>
        <ImageContainer height='300px' width='200px' />
        <button type="button" className="btn btn-primary">Primary</button>
    </div>
  )
}

export default Home