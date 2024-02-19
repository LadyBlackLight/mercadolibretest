import { useState, useEffect } from "react"

export const useFetchProduct = (productId) => {
    const [product, setProduct] = useState([]);
    const [description, setDescription] = useState([]);
    const [error, setError] = useState(false);
    const [attributeExist, setAttributeExist] = useState(false)
    const [condition, setCondition] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        let peticion = fetch(
            `https://api.mercadolibre.com/items/${productId}`
        );
        peticion
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((data) => {
                setProduct(data);
                let getImages = data.pictures.map((image) => {
                    return image.secure_url
                })
                setImageUrl(getImages)
                let getAttributesId = data.attributes.map((atriD) => {
                    return atriD.id
                })
                let verifyAttributeExist = getAttributesId.find((attribute) => attribute === "ITEM_CONDITION")
                if (verifyAttributeExist === "ITEM_CONDITION") {
                    setAttributeExist(true)
                }
                let getAttributeIndex = getAttributesId.indexOf("ITEM_CONDITION")

                if (getAttributeIndex !== -1) {
                    let setAttributePropertie = data.attributes[getAttributeIndex].value_name
                    setCondition(setAttributePropertie)
                }
                if (data.length === 0) {
                    setError(true)
                }
            })
            .catch((err) => {
                setError(true)
            })

            let peticionDescription = fetch(
                `https://api.mercadolibre.com/items/${productId}/description`
            );
            peticionDescription
                .then((respuestaD) => {
                    return respuestaD.json();
                })
                .then((data) => {
                    setDescription(data);
                    if (data.length === 0) {
                        setError(true)
                    }
                })
                .catch((err) => {
                    setError(true)
                })
    }, [productId])

    return { product, description, error, attributeExist, condition, imageUrl }
}
