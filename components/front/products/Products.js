import React from "react";
import './Products.css'
import {useParams, Link} from 'react-router-dom'

const Products = ({ productItems, handleAddProduct }) => {
    const params = useParams();
    console.log(params);
    return (
        <div className='products'>
            {productItems.map((productItem) => (
                
                <div className='card' key={productItem.id}>
                    <Link to={`/products/${productItem.id}`}>
                    <div>
                        <img className='product-img' src={productItem.image} alt={productItem.name} />
                    </div>
                    </Link>

                    <div>
                        <h3 className='product-name'>{productItem.name}</h3>
                    </div>

                    <div className='product-price'>{productItem.price}:-</div>

                    <div>
                        <button className='add-btn' onClick={() => handleAddProduct(productItem)}>Add to cart</button>
                    </div>
                </div>
                
            ))}
        </div>
    )
}

export default Products; 