import Header from "./Components/Layout/Header";
import React from "react";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsSummary from "./Components/Meals/MealsSummary";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals></AvailableMeals>
      </main>
    </React.Fragment>
  );
}

export default App;
