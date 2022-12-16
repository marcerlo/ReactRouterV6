import React from 'react'
import HeroList from '../hero/HeroList'
const DcScreem = () => {
  return (
    <div className='container'>
    <h1 className='mt-5 mb-5 animate__animated animate__rotateInDownLeft'>DC Comics</h1>
    
    <HeroList publisher={"DC Comics"}/>
    
    
    </div>
  )
}

export default DcScreem