const foods = [
  { name: "Chicken Breast", protein: 31, carbs: 0, fat: 3, calories: 151 },
  { name: "Brown Rice", protein: 3, carbs: 23, fat: 2, calories: 122 },
  { name: "Salmon Fillet", protein: 25, carbs: 0, fat: 14, calories: 226 },
  { name: "Avocado", protein: 2, carbs: 9, fat: 15, calories: 179 },
  { name: "Greek Yogurt", protein: 10, carbs: 6, fat: 5, calories: 89 },
  { name: "Banana", protein: 1, carbs: 27, fat: 0, calories: 112 },
  { name: "Almonds", protein: 6, carbs: 6, fat: 14, calories: 172 },
  { name: "Sweet Potato", protein: 2, carbs: 20, fat: 0, calories: 88 },
  { name: "Ground Beef", protein: 20, carbs: 0, fat: 15, calories: 215 },
  { name: "Eggs", protein: 6, carbs: 1, fat: 5, calories: 73 },
  { name: "Quinoa", protein: 4, carbs: 22, fat: 2, calories: 122 },
  { name: "Broccoli", protein: 3, carbs: 6, fat: 0, calories: 36 },
  { name: "Peanut Butter", protein: 8, carbs: 6, fat: 16, calories: 200 },
  { name: "Cheddar Cheese", protein: 7, carbs: 1, fat: 9, calories: 115 },
  { name: "Apple", protein: 0, carbs: 25, fat: 0, calories: 100 },
  { name: "Oatmeal", protein: 3, carbs: 27, fat: 2, calories: 138 },
  { name: "Tuna", protein: 30, carbs: 0, fat: 1, calories: 133 },
  { name: "Whole Wheat Bread", protein: 4, carbs: 14, fat: 1, calories: 81 },
  { name: "Spinach", protein: 3, carbs: 4, fat: 0, calories: 28 },
  { name: "Orange", protein: 1, carbs: 15, fat: 0, calories: 64 },
];

function App() {
  // Add high calorie food here using array methods (> 225 calories)
  const highCalorieFood = foods.find((food) => food.calories > 225);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Welcome to Bader's Food Blog</h1>
      <p>
        I want to share with you a list of great foods I found! The serving size
        for them is 100 grams.
      </p>
      <div style={{ alignSelf: "start", marginLeft: "15%" }}>
        <h2>Foods high in protein</h2>
        <HighProteinFoods />
      </div>

      <div style={{ alignSelf: "end", marginRight: "15%" }}>
        <h2>Foods high in carbohydrates</h2>
        <HighCarbFoods />
      </div>
      <div style={{ alignSelf: "start", marginLeft: "15%" }}>
        <h2>Foods high in fats</h2>
        <HighFatFoods />
      </div>

      <p style={{ fontSize: "24px" }}>
        <strong>Fun fact:</strong> I also found this high-caloric food! It has [{" "}
        <strong>{highCalorieFood?.calories || "not-found"}</strong> ] calories
        and it is called [{" "}
        <strong>{highCalorieFood?.name || "not-found"}</strong> ]
      </p>
      <p>That's it! Thank you for reading :)</p>
    </div>
  );
}

function HighProteinFoods() {
  // Add high protein food here using array methods (>= 15 protein)
  const highProteinFood = foods.filter((food) => food.protein >= 15);
  return (
    <>
      <strong
        style={{
          fontSize: "24px",
          backgroundColor: "#000",
          color: "white",
          padding: "4px",
        }}
      >
        {highProteinFood.length}
      </strong>{" "}
      High Protein foods:
      <ul>
        {highProteinFood.map((food) => (
          <li key={food.name}>
            <strong>{food.name}</strong> - {food.protein} grams per 100g serving
          </li>
        ))}
      </ul>
    </>
  );
}

function HighCarbFoods() {
  // Add high carbs food here using array methods (>= 15 carbs)
  const highCarbFood = foods.filter((food) => food.carbs >= 15);
  return (
    <>
      <strong
        style={{
          fontSize: "24px",
          backgroundColor: "#000",
          color: "white",
          padding: "4px",
        }}
      >
        {highCarbFood.length}
      </strong>{" "}
      High Carb foods:
      <ul>
        {highCarbFood.map((food) => (
          <li key={food.name}>
            <strong>{food.name}</strong> - {food.carbs} grams per 100g serving
          </li>
        ))}
      </ul>
    </>
  );
}

function HighFatFoods() {
  // Add high fat food here using array methods (>= 15 fat)
  const highFatFood = foods.filter((food) => food.fat >= 15);
  return (
    <>
      <strong
        style={{
          fontSize: "24px",
          backgroundColor: "#000",
          color: "white",
          padding: "4px",
        }}
      >
        {highFatFood.length}
      </strong>{" "}
      High Fat foods:
      <ul>
        {highFatFood.map((food) => (
          <li key={food.name}>
            <strong>{food.name}</strong> - {food.fat} grams per 100g serving
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
