import React from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./pages/Main"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

import "./css/app.css"

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
