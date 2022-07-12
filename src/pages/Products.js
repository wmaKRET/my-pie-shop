import React, { useState, useContext } from "react"

import { Context } from "../Context"
import ProductsImage from "../components/images/ProductsImage"

function Products(){
    const [showPies, setShowPies] = useState(false)
    const [showCupcakes, setShowCupcakes] = useState(false)
    const { bakeryItems } = useContext(Context)

    const pieElements = bakeryItems
            .filter(item => item.type === 'pie')
            .map(item => (
                <ProductsImage key={item.id} item={item} />
            ))

    const cupcakeElements = bakeryItems
            .filter(item => item.type === 'cupcake')
            .map(item => (
                <ProductsImage key={item.id} item={item} />
            ))

    function toggleShowPies(){
        setShowPies(prevState => !prevState)
    }

    function toggleShowCupcakes(){
        setShowCupcakes(prevState => !prevState)
    }

    return (
        <div className="products">
            <div className="products__item">
                <div className="products__item-title" onClick={toggleShowPies}>
                    <h3>Pies</h3>
                </div>
                <div className="products__item-list">
                    {showPies && pieElements}
                </div>
            </div>
            <div className="products__item">
                <div className="products__item-title" onClick={toggleShowCupcakes}>
                    <h3>Cupcakes</h3>
                </div>                
                <div className="products__item-list">
                    {showCupcakes && cupcakeElements}
                </div>
            </div>
        </div>
    )
}

export default Products