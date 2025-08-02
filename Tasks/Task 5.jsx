import { useState, useEffect } from "react";
const dadJokes = [
  "Why don't scientists trust atoms? Because they make up everything",
  "Why did the scarecrow win an award? He was outstanding in his field",
  "Why don't eggs tell jokes? They'd crack each other up",
  "What do you call a fake noodle? An impasta",
  "Why did the math book look so sad? Because it had too many problems",
  "I'm reading a book about anti-gravity. It's impossible to put down",
  "Did you hear about the restaurant called Karma? There's no menu: You get what you deserve.",
  "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
  "What do you call a bear with no teeth? A gummy bear",
  "Why don't skeletons fight each other? They don't have the guts.",
  "I used to hate facial hair, but then it grew on me.",
  "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
  "Why did the coffee file a police report? It got mugged",
  "How do you organize a space party? You planet",
  "What do you call a dinosaur that crashes his car? Tyrannosaurus Wrecks",
  "Why don't scientists trust stairs? Because they're always up to something",
  "What do you call a sleeping bull? A bulldozer",
  "Why did the bicycle fall over? Because it was two tired",
  "What do you call a fish wearing a bowtie? Sofishticated",
  "Why don't programmers like nature? It has too many bugs",
];
function App() {
  const [joke, setJoke] = useState("Loading a dad joke...");

  useEffect(() => {
    // Generate a random number that's within the dadJokes array length (float)
    const randomElementIndex = Math.random() * dadJokes.length;

    // Since the random number is a float value, let's get its floor
    // Floor rounds down a number
    // Math.floor(5.9) -> 5
    // Math.floor(2.2) -> 2
    // etc
    // This way we ensure the index number is an integer (No decimals)
    const floorOfIndex = Math.floor(randomElementIndex);

    // Using the integer index, we get a joke from the dadJokes array
    const randomDadJoke = dadJokes[floorOfIndex];

    // We set the random joke as the joke to display.
    setJoke(randomDadJoke);
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Random Dad Joke:</h2>
      <p
        style={{
          fontSize: "18px",
          fontStyle: "italic",
          color: "#333",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        {joke}
      </p>
    </div>
  );
}
export default App;
