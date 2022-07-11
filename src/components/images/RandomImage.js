import React from "react"

function RandomImage({ item }){
    console.log(item)
    return (
        <div className="main__random-div">
            <h4 className="main__random-div-title">{item.name}</h4>
            <img 
                src={item.img_url} 
                alt={item.name}
                className="main__random-div-img"
            />
        </div>
    )
}

export default RandomImage