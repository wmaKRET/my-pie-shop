import React, { useContext } from "react"

import { Context } from "../Context"
import RandomImage from "./images/RandomImage"

function MainRandom(){
    const { bakeryItems } = useContext(Context)
    const shuffledBakeryItems = bakeryItems.sort(() => 0.5 - Math.random())
    const randomThreeItems = shuffledBakeryItems.slice(0, 3)

    const randomElements = randomThreeItems.map(item => (
        <RandomImage key={item.id} item={item}/>
    ))

    return (
        <div className="main__random">
            {randomElements}
        </div>
    )
}

export default MainRandom