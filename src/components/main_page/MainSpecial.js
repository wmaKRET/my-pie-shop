import React, { useContext } from "react"

import { Context } from "../../Context"

function MainSpecial(){
    const { bakeryItems } = useContext(Context)
    
    // there are 15 items in data.JSON, on 1st and 16th day of the month the 1st item 
    // gets to be "today's special". On 2nd and 17th day it's the 2nd item from array
    // and so on. On 31th it's random item (from 0 to 14)
    function whichItemFromArray(){
        const dayOfTheMonth = new Date().getDate()
        if (dayOfTheMonth < 16) return dayOfTheMonth - 1
        else if (dayOfTheMonth !== 31) return dayOfTheMonth - 16
        else return Math.floor(Math.random() * 15)
    }

    const todaysSpecial = bakeryItems[whichItemFromArray()]

    function todaysSpecialElement(){
        if (todaysSpecial) return (
            <img 
                src={todaysSpecial.img_url} 
                alt={todaysSpecial.name}
                className="main__special-deal-img"
            />
        )
    }

    return (
        <div className="main__special-deal">
            {todaysSpecialElement()}
        </div>
    )
}

export default MainSpecial