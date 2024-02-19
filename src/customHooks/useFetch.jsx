import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const useFetch = (urlSearch) => {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);
    const limit = 4
    const nav = useNavigate()

    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = () => {
        nav(`/items/search/${search}`)
        setError(false);
        let peticion = fetch(
            `${urlSearch}/sites/MLA/search?q=${search}&limit=${limit}`
        );
        peticion
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((data) => {
                setItems(data.results);
                if (data.length === 0) {
                    setError(true)
                }
            })
            .catch((err) => {
                setError(true)
            })
    }
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            nav(`/items/search/${search}`)
            setError(false);
            let peticion = fetch(
                `${urlSearch}/sites/MLA/search?q=${search}&limit=${limit}`
            );
            peticion
                .then((respuesta) => {
                    return respuesta.json();
                })
                .then((data) => {
                    setItems(data.results);
                    if (data.data.length === 0) {
                        setError(true)
                    }
                })
                .catch((err) => {
                    setError(true)
                })
        }
    }
    return { items, search, error, handleSearchChange, handleSubmit, handleKey }
}
