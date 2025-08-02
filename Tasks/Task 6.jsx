import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const currentUser = {
    name: "Adam",
    ID: 999,
  };

  function isAdmin(userID) {
    return userID === 999;
  }

  // Using ternary operator (condition ? valueIfTrue : valueIfFalse)
  let loginCheckMessage = isLoggedIn ? "You're logged in!" : "Please log-in!";

  // Using ternary operator (condition ? valueIfTrue : valueIfFalse)
  let dashboard = isAdmin(currentUser.ID) ? (
    <AdminDashboard />
  ) : (
    <UserDashboard />
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: "32px" }}>{loginCheckMessage}</p>

      {/* Will only show the dashboard if logged in */}
      {isLoggedIn && dashboard}
    </div>
  );
}

function UserDashboard() {
  return (
    <div>
      <p style={{ fontSize: "20px" }}>
        <strong>User</strong> Dashboard
      </p>
      <ul style={{ listStyle: "none" }}>
        <li>
          <button>Edit Profile</button>
        </li>
        <li>
          <button>Purchase history</button>
        </li>
        <li>
          <button>Wishlist</button>
        </li>
      </ul>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div>
      <p style={{ fontSize: "20px" }}>
        <strong>Admin</strong> Dashboard
      </p>
      <ul style={{ listStyle: "none" }}>
        <li>
          <button>Add item</button>
        </li>
        <li>
          <button>Delete item</button>
        </li>
        <li>
          <button>Generate discount code</button>
        </li>
        <li>
          <button>Store Analytics</button>
        </li>
      </ul>
    </div>
  );
}
export default App;
