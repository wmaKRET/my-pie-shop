import React, { useContext } from "react"

import MainRandom from "../components/MainRandom"
import MainSpecial from "../components/MainSpecial"
import MainReorder from "../components/MainReorder"

function Main(){
    return (
        <main className="main">
            <h2 className="main__title">Try something new!</h2>
                <MainRandom />
            <h2 className="main__title">Today's special!</h2>
                <MainSpecial />
            <h2 className="main__title">Order again!</h2>
                <MainReorder />
        </main>
    )
}

export default Main