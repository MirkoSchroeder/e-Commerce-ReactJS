import React from "react";
import ItemDetailContainer from "./Components/ItemDetails/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar"
import { SpinnerCircular } from 'spinners-react';

const App = () => {
  return (
    <section>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </section>
  )
}

export default App