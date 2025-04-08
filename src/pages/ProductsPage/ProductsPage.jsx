import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductsByCategory from '../../components/ProductsByCategory/ProductsByCategory'

export default function ProductsPage() {
  const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <main className='products-page page-test'>
        <div className="container">
            <h2>Products</h2>
            <div className="products-container">
              <ProductsByCategory />
              <ProductsByCategory />
              <ProductsByCategory />
              {/* <div className="products-by-category">
                <div className="category-name">
                  <h2>computer</h2>
                </div>
                <div className="category-pics">
                  <img src="./src/assets/images/speaker_2.png" alt="No pic" />
                </div>
                <div className="category-products">
                  {arr.map((product)=><ProductCard productName={"Test"} imageURL={"./src/assets/images/game_controller_31.png"} productPrice={"20"} productOldPrice={"30"}  />).slice(0,8)}
                </div>
              </div> */}
            </div>
        </div>
    </main>
  )
}
