import React, { useState, useEffect } from "react"

import useHover from "../../hooks/useHover"

function ProductsImage({ item }){
    const [hovered, ref] = useHover()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(true)
    }, [])

    const isHovered = hovered ? ' hovered' : ''

    return (
        <div 
            className={visible ? "products__card visible" : "products__card"}
            ref={ref}
        >   
            <h3 className={`products__card-title${isHovered}`}>{item.name}</h3>
            <h2 className={`products__card-price${isHovered}`}>$ {item.price}</h2>
            <p className={`products__card-ingredients${isHovered}`}>{item.ingredients}</p>
            <img 
                src={item.img_url} 
                alt={item.name}
                className="products__card-img"
            />
        </div>
    )
}

export default ProductsImage