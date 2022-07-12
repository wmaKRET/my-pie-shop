import React, { useContext } from "react"

import { Context } from "../../Context"
import RandomImage from "../images/RandomImage"

function MainRandom(){
    const { bakeryItems } = useContext(Context)
    
    // shuffle mechanism to sort bakery items in random order
    // first give items random sort key, then sort, lastly unmap to get original object
    const shuffledBakeryItems = bakeryItems
                .map(item => ({ item, sort: Math.random()}))
                .sort((a,b) => a.sort - b.sort)
                .map(({ item }) => item)
    const threeItemsFromShuffledBakeryItems = shuffledBakeryItems.slice(0, 3)

    const randomElements = threeItemsFromShuffledBakeryItems
                .map(item => (
                    <RandomImage key={item.id} item={item}/>
                ))

    return (
        <div className="main__random">
            {randomElements}
        </div>
    )
}

export default MainRandom