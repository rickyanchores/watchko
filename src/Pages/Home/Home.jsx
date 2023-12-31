import React from 'react'
import SocialMedia from '../../Components/SocialMedia/SocialMedia';
import Hero from '../../Components/Hero/Hero';

//IMPORTS


const Home = () => {
  return (
    <div className='Home font-bold'>
        <div className="upper flex">
          <Hero />
          <SocialMedia />
        </div>
        <div className="upper flex">
        <div className="ADS w-1/4 flex justify-center items-center bg-red-700 rounded-lg m-2">
            ADS
          </div>
          <img src="https://intl.cmf.tech/cdn/shop/files/Group_270_1920x.png?v=1695698361" alt="heroImg" className='HeroImage w-3/4 bg-red-800 rounded-lg m-2'/>
        </div>
    </div>
  )
}

export default Home;