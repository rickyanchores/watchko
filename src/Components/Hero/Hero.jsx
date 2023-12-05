import React from 'react'

const Hero = () => {
  return (
    <div className="Hero-container bg-slate-800 rounded-lg p-5 w-4/6">
        <img src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />
        <h1 className='title text-4xl'>watchko</h1>
        <p>Re-create your own smart watch dial style</p>
    <button className='btn bg-orange-700 p-2 mt-2 rounded-md'>Read more</button>
</div>
  )
}

export default Hero