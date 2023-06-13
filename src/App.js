import Header from "./Components/Layout/Header";
import React from "react";
import { useState } from "react";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsSummary from "./Components/Meals/MealsSummary";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsshown] = useState(false);

  const showCartHandler = () => {
    setCartIsshown(true);
  };
  const hideCartHandler = () => {
    setCartIsshown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler} />
      <main>
        <MealsSummary />
        <AvailableMeals></AvailableMeals>
      </main>
    </CartProvider>
  );
}

export default App;
