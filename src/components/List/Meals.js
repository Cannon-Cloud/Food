import React from "react";
import AvalibleMeals from "./AvalibleMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvalibleMeals />
    </React.Fragment>
  );
};

export default Meals;
