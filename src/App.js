import React from "react";
import ItemDetailContainer from "./Components/ItemDetails/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar"
import Cart from "./Components/Cart/Cart"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import CustomProvider from './Components/Context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      
      <CustomProvider>

        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route >
          <Route path="/:categoryName" element={<ItemListContainer/>}></Route >
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route >
          <Route path="/cart" element={<Cart/>}></Route >
        </Routes>

      </CustomProvider>

    </BrowserRouter>
  )
}

export default App