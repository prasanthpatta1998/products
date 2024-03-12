import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import "./products.css"

const AllProducts = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        getAllProducts()
    },[])

    const getAllProducts = async() => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts([...data])
    }

  return (
    <div>
        <h1>Products</h1>
        <div className='product-grid'>
            {
                products?.map(eachProduct => (
                    <SingleProduct product={eachProduct} key={eachProduct.id}/>
                )) 
            }
        </div>
    </div>
  )
}

export default AllProducts