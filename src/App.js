import React from "react";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar"

const App = () => {
  return (
    <section>
      <NavBar />
      <ItemListContainer greeting={'ESTA ES MI PROP GREETING'} />
    </section>
    
  )
}

export default App