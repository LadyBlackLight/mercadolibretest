import React from "react";
import { Routes, Route } from "react-router-dom"
import { useFetch } from "./customHooks/useFetch";
import { SearchBox } from "./components/SearchBox"
import { SearchResult } from "./components/SearchResult";
import { ProductDetail } from "./components/ProductDetail"

function App() {

  const { items, search, handleSearchChange, handleSubmit, handleKey, error } = useFetch("https://api.mercadolibre.com")

  return (
    <>
      <SearchBox handleSearchChange={handleSearchChange} handleKey={handleKey} handleSubmit={handleSubmit} />
      <Routes>
        <Route path={`/items/search/:search`} exact element={<SearchResult items={items} error={error} search={search} />}></Route>
      </Routes>
      <Routes>
        <Route path={`/items/:id`} element={<ProductDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
