import React from 'react'
import HeroList from '../hero/HeroList'

const MarvelScreem = () => {
  return (
    <div className='container'>

    <h1 className='mt-5 mb-5 animate__animated animate__rotateInDownLeft'> Marvel Studio</h1>
<HeroList publisher={"Marvel Comics"}/>
    </div>
  )
}

export default MarvelScreem