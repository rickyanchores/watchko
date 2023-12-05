import React from 'react'

const Product = () => {
  return (
    <div className='Product  m-auto flex'>
        <div className="product-description w-2/4 bg-gray-700  flex justify-center items-center m-2 rounded-lg">
            <h1 className='text-8xl'>Product</h1>
        </div>

        <img className='productImg w-2/4 bg-gray-500 m-2 rounded-lg' src="https://intl.cmf.tech/cdn/shop/files/orange_fa78d040-fd3c-42ac-ae2b-5074d41710fc_1200x.png?v=1695698366" alt="" />
    </div>
  )
}

export default Product