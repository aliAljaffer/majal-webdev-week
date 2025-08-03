function FoodItem({ mealTime, favoriteMeal }) {
  return (
    <li>
      For {mealTime}, I love to eat <strong>{favoriteMeal}</strong>
    </li>
  );
}

function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "24px",
        justifyContent: "center",
      }}
    >
      {/* Added Greeting component with prop "name" and value "Ali" */}
      <Greeting name={"Ali"} />
      <ul>
        {/* meal time: Breakfast, favorite meal: Pancakes */}
        <FoodItem mealTime="Breakfast" favoriteMeal="Pancakes" />
        {/* meal time: Lunch, favorite meal: Kabsah */}
        <FoodItem mealTime="Lunch" favoriteMeal="Kabsah" />
        {/* meal time: Dinner, favorite meal: Sushi */}
        <FoodItem mealTime="Dinner" favoriteMeal="Sushi" />
      </ul>
    </div>
  );
}

export default App;
