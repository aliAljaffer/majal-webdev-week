import { useEffect, useState } from "react";

function RandomCat() {
  const [catImageURL, setCatImageURL] = useState(null);
  // Show text on top of the image!
  const catSays = "Majal 2025";
  // Feel free to use one of the APIs below
  const CAT_API = "https://cataas.com/cat/says/" + catSays + "?json=true";
  const CAT_API_GIF =
    "https://cataas.com/cat/gif/says/" + catSays + "?json=true";
  // Since it's a data fetch, we'll use an effect
  useEffect(() => {
    fetch(CAT_API) // OR CAT_API_GIF and make sure it's added to the dependency array
      .then((res) => res.json()) // Converts the response to JSON
      .then((data) => setCatImageURL(data.url)); // In the JSON, there's a URL attribute, so we'll set that
  }, [CAT_API]); // Make sure the effect depends on the variable!

  // When we first render the component, catImageURL will be NULL. Therefore we return a message to tell the user we're fetching the image
  if (!catImageURL) return <p>Fetching cat image...</p>;
  return <img src={catImageURL} style={{ maxWidth: "50vw" }} />;
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <h1>Here's a random cat</h1>
      <RandomCat />
    </div>
  );
}

export default App;
