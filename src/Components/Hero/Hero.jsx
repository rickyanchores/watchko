import React from 'react'

const Hero = () => {
  return (
    <div className="Hero-container bg-gray-500 rounded-lg p-5 w-4/6 m-2">
        <img className='userImg' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8fHx8MTcwMTc4MjkzN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="hero" />
        <h1 className='title text-4xl'>watchko</h1>
        <p>Re-create your own smart watch dial style</p>
    <button className='btn bg-orange-700 p-2 mt-2 rounded-md'>Read more</button>
</div>
  )
}

export default Hero