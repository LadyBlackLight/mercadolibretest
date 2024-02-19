import React from 'react'
import { ProductCard } from './ProductCard'
import { useParams } from 'react-router-dom'

export const SearchResult = (props) => {
    const params = useParams()
    console.log("Parametros", params)
    console.log("Mis items", props.items)
    return (
        <main className='search-result'>
            <div className="search-result__container">
                <ol className="search-result__container-cards">
                    <ProductCard items={props.items} error={props.error} />
                </ol>
            </div>
        </main>
    )
}
