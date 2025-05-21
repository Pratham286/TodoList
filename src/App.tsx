import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Item from "./components/Item";
import Create from "./components/Create";
// import TodoItem from "./components/TodoItem";
import TodoManager from "./components/TodoManager";
function App() {
  return (
    <div>
      <Header />
      {/* <Create /> */}
      {/* <Item /> */}
      {/* <TodoItem /> */}
      {/* <Temp></Temp> */}
      <TodoManager/>

      <Footer />
    </div>
  );
}

export default App;
