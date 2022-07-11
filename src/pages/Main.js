import React, { useContext } from "react"

import MainRandom from "../components/MainRandom"

function Main(){
    return (
        <main className="main">
            <h2 className="main__title">Try something new!</h2>
            <MainRandom />
            <h2 className="main__title">Today's special!</h2>
            <div className="main__special-deal">
                <img 
                    src="/img/pie_test.jpg" 
                    alt="pie"
                    className="main__special-deal-img"
                />
            </div>
            <h2 className="main__title">Order again!</h2>
            <div className="main__last-order">
            <img 
                    src="/img/pie_test.jpg" 
                    alt="pie"
                    className="main__last-order-img"
                />
            </div>
        </main>
    )
}

export default Main