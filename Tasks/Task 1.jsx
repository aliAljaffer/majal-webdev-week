// (Mistake 1) Capitalize component names
function ProfilePicture() {
  return (
    <img src="example-website.org/faisal.jpg" width="100px" height="100px" />
  );
}
// (Mistake 2) Capitalize component names
function App() {
  const aboutMe = "My name is Faisal. I'm a first year MIS student at KFUPM.";
  // (Mistake 3) Returning single element only using <div>
  // Can also return using React Fragment <>....</>
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
      <profilepicture></profilepicture>
      <p>{aboutMe}</p>
    </div>
  );
}

export default App;
