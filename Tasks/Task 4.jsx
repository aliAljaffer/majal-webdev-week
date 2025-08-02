import { useState } from "react";

function App() {
  // We'll use the input type as state
  // When we want to reveal the text, we'll set the type to "text"
  // When we want to hide it, we'll set the type to "password"
  // By default, the input type is "password"
  const [inputType, setInputType] = useState("password");
  const handleChangeInput = () => {
    if (inputType === "password") setInputType("text");
    else setInputType("password");
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "50px 50px",
          gap: "4px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#999",
          borderRadius: "10px",
        }}
      >
        Enter your login information
        <input type="text" placeholder="Username" />
        {/* Here we are controlling the input element's type using state */}
        <input type={inputType} placeholder="Password" />
        {/* We add our handleChangeInput function to the button */}
        <button onClick={handleChangeInput}>Show/Hide Password</button>
        <button>Login</button>
      </div>
    </div>
  );
}
export default App;
