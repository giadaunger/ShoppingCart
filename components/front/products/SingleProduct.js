import React from 'react';
import {useParams} from 'react-router-dom';
import './SingleProdukt.css'

const SingleProduct = ({productItems}) => {
    const params = useParams();
    const foundProduct = productItems.find(product => product.id === params.productId)

    return (
    <div className='product-div'>
        <div className='name'>{foundProduct.name}</div>
        <img src={foundProduct.image} alt='productIMG' className='img' />
        <div className='text'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa, error quidem neque dolor rerum asperiores soluta quas nobis, in dolore ex molestias officia quos odit mollitia voluptatibus odio itaque.</p></div>
        <div className='price'>{foundProduct.price}:-</div>
    </div>
    )
}

export default SingleProduct;