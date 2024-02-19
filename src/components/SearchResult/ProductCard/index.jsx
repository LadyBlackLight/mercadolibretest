import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = (props) => {

  return (
    <>
      {props.items.map((item, id) => {
        return (
          <li key={id} className='product-card__item'>
            <Link to={`/items/${item.id}`} title={item.title} className="product-card__wrapper">
              <div className="product-card__image">
                <img src={`https://http2.mlstatic.com/D_${item.thumbnail_id}-V.jpg`} alt={item.title} />
              </div>
              <div className="product-card__content">
                <div className="price-installments">
                  <span className="product-price">$ {item.price}</span>
                  {item.shipping.free_shipping && <span className='free-shipping'></span>}
                </div>
                <h2 className="product-title">{item.title}</h2>
              </div>
            </Link>
          </li>
        )
      })}

    </>
  )
}
