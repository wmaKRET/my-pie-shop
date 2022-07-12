import React, { useContext } from "react"

import useHover from "../../hooks/useHover"
import { Context } from "../../Context"

import AddIcon from "remixicon-react/AddLineIcon"
import RemoveIcon from "remixicon-react/SubtractLineIcon"

function ProductsImage({ item }){
    const [hovered, ref] = useHover()
    const { cartItems, addToCart, removeFromCart } = useContext(Context)
    const howManyCurrentItems = cartItems.filter(cartItem => cartItem.id === item.id).length

    const isHovered = hovered ? ' hovered' : ''

    return (
        <div 
            className="products__card"
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
            <div className={`products__card-panel${isHovered}`}>
                <RemoveIcon 
                    className={howManyCurrentItems > 0 ? "icon" : "icon-off"} 
                    onClick={() => removeFromCart(item.id)}
                />
                <p>{howManyCurrentItems}</p>
                <AddIcon 
                    className={howManyCurrentItems > 4 ? "icon-off" : "icon"}
                    onClick={() => addToCart(item)}
                />
            </div>
        </div>
    )
}

export default ProductsImage