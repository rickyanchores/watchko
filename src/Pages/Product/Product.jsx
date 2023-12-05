import React from 'react'

const Product = () => {
  return (
    <div className='Product bg-gray-500 m-auto flex'>
        <div className="product-description w-2/4  flex justify-center items-center">
            <h1 className='text-8xl'>Product</h1>
        </div>

        <img className='productImg w-2/4 bg-slate-800' src="https://intl.cmf.tech/cdn/shop/files/orange_fa78d040-fd3c-42ac-ae2b-5074d41710fc_1200x.png?v=1695698366" alt="" />
    </div>
  )
}

export default Product