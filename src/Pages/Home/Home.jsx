import React from 'react'
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import Hero from '../../Components/Hero/Hero';

//IMPORTS


const Home = () => {
  return (
    <div className='Home font-bold p-5'>
        <div className="upper p-5 flex">
          <Hero />
          <SocialMedia />
        </div>
        <div className="upper p-5 flex">
          <SocialMedia />
          <Hero />
        </div>
    </div>
  )
}

export default Home;