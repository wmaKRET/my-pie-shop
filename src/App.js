import React from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Main from "./pages/Main"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
