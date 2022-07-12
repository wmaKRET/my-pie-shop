import React from "react"

import useHover from "../../hooks/useHover"

function RandomImage({ item }){
    const [hovered, ref] = useHover()

    const isHovered = hovered ? ' hovered' : ''

    return (
        <div className="main__random-div">
            <h4 className={`main__random-div-title ${isHovered}`}>{item.name}</h4>
            <img 
                src={item.img_url} 
                alt={item.name}
                className="main__random-div-img"
            />
        </div>
    )
}

export default RandomImage