import React from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./pages/Main"
import Pies from "./pages/Pies"
import Cupcakes from "./pages/Cupcakes"
import Cart from "./pages/Cart"

import "./css/app.css"

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/pies" element={<Pies />} />
          <Route path="/cupcakes" element={<Cupcakes />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
