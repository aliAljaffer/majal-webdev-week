function FoodItem({ timeOfDay, favoriteMeal }) {
  return (
    <li>
      For {timeOfDay}, I love to eat <strong>{favoriteMeal}</strong>
    </li>
  );
}

function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

function App() {
  // Add your code below
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
      <Greeting name={"Ali"} />
      <ul>
        <FoodItem timeOfDay="Breakfast" favoriteMeal="Pancakes" />
        <FoodItem timeOfDay="Lunch" favoriteMeal="Kabsah" />
        <FoodItem timeOfDay="Dinner" favoriteMeal="Sushi" />
      </ul>
    </div>
  );
}

export default App;
