import React from 'react'
import { Link } from 'react-router-dom'
import lupa from '../../assets/img/search-icon.png'

export const SearchBox = (props) => {
  return (
    <header className="nav-header">
      <div className="nav-header__container">
        <Link className="nav-logo" to='/'>Mercado Libre Colombia - Donde comprar y vender de todo</Link>
        <div className="nav-area">
          <div className="nav-search">
            <label className="nav-search-input__label" htmlFor="melisearch">Ingresa lo que quieras encontrar</label>
            <input autoComplete='off' onKeyDown={props.handleKey} onChange={props.handleSearchChange} name='melisearch' type="search" value={props.search} className="nav-search-input" placeholder='Nunca dejes de buscar' />
            <button onClick={props.handleSubmit} type='submit' className="nav-search-btn">
              <div role="img" aria-label="Buscar" className="nav-icon-search">
                <img src={lupa} alt="Buscar" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
