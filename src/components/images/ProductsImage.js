import React from "react"

function ProductsImage({ item }){
    return (
        <div className="products__card">
            <h3 className="products__card-title">{item.name}</h3>
            <h2 className="products__card-price">$ {item.price}</h2>
            <p className="products__card-ingredients">{item.ingredients}</p>
            <img 
                src={item.img_url} 
                alt={item.name}
                className="products__card-img"
            />
        </div>
    )
}

export default ProductsImage