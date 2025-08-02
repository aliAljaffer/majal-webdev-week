import { useState } from "react";

function App() {
  const lightModeText = "light ☀️";
  const darkModeText = "dark 🌙";
  // We will specify "theme" as the state
  // This is because our app or component depends on its value to update
  // itself to the appropriate color theme
  const [theme, setTheme] = useState(lightModeText);

  function changeTheme() {
    // We make sure to use the set function provided by useState to ensure proper updates to the component
    // Here we are saying: If the theme is currently "Light mode", change it to "Dark mode", and if it is "Dark mode", change it to "Light mode"
    if (theme === lightModeText) {
      setTheme(darkModeText);
    } else {
      setTheme(lightModeText);
    }
  }

  // No need to change the return value
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme === lightModeText ? "#eee" : "#222",
        color: theme === lightModeText ? "black" : "#fff",
      }}
    >
      <p>Current theme: {theme}</p>
      <button onClick={() => changeTheme()}>Change theme</button>
    </div>
  );
}
export default App;
