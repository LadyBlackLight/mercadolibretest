import React from 'react'
import { ProductCard } from './ProductCard'

export const SearchResult = (props) => {

    return (
        <main className='search-result'>
            <div className="search-result__container">
                <ol className="search-result__container-cards">
                    <ProductCard items={props.items} />
                </ol>
            </div>
        </main>
    )
}
