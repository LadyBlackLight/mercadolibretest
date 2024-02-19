import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchProduct } from '../../customHooks/useFetchProduct'

export const ProductDetail = () => {
    const params = useParams()

    const { product, description, attributeExist, condition, imageUrl } = useFetchProduct(params.id)

    return (
        <>
            {product &&
                <main className='product-view'>
                    <div className="product-view__container">
                        <div className="product-view__row">
                            <div className="product-view-image">
                                <img src={imageUrl[0]} alt={product.title} />
                            </div>
                            <div className="product-view__stack">
                                {attributeExist && <span className='product-view-condition'>{condition}</span>}
                                <span className='product-view-sold'> - {product.initial_quantity} vendidos</span>
                                <h1 className='product-view-title'>{product.title}</h1>
                                <span className='product-view-price'>$ {product.price}</span>
                                <a className='product-view-buy' href={product.permalink} target='_blank' rel='noreferrer'>Comprar</a>
                            </div>
                        </div>
                        <div className="product-view__row">
                            <div className="product-view__description">
                                <h2 className='product-view-description-title'>Descripción del producto</h2>
                                <p className='product-view-description'>{description.plain_text}</p>
                            </div>
                        </div>
                    </div>
                </main>}
        </>
    )
}
