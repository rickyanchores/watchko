import React from 'react'

const Hero = () => {
  return (
    <div className="Hero-container bg-gray-500 rounded-lg p-5 w-4/6">
        <img className='userImg' src="https://intl.cmf.tech/cdn/shop/files/orange_6f4b97f8-9b49-4568-87aa-8369398b4198_1200x.png?v=1695698367" alt="hero" />
        <h1 className='title text-4xl'>watchko</h1>
        <p>Re-create your own smart watch dial style</p>
    <button className='btn bg-orange-700 p-2 mt-2 rounded-md'>Read more</button>
</div>
  )
}

export default Hero