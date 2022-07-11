import React, { useContext } from "react"

import { Context } from "../Context"

function Cupcakes(){
    const { bakeryItems } = useContext(Context)

    const cupcakeElements = bakeryItems
            .filter(item => item.type === 'cupcake')
            .map(item => (
                <p key={item.id}>{item.name}</p>
            ))

    return (
        <div>
            {cupcakeElements}
        </div>
    )
}

export default Cupcakes