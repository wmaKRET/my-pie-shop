import React, { useContext } from "react"

import { Context } from "../Context"

function Pies(){
    const { bakeryItems } = useContext(Context)

    const pieElements = bakeryItems
            .filter(item => item.type === 'pie')
            .map(item => (
                <p key={item.id}>{item.name}</p>
            ))

    return (
        <div>
            {pieElements}
        </div>
    )
}

export default Pies