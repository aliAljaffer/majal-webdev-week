function App() {
  // Styles
  // ----------------------
  const appStyle = {
    display: "flex",
    alignItems: "center",
    gap: "50px",
    width: "fit-content",
    padding: "20px 40px",
    borderRadius: "10px",
    justifyContent: "center",
    border: "1px dashed #000",
    backgroundColor: "#386641",
    color: "#f2e8cf",
  };
  const layoutStyle = {
    display: "flex",
    alignItems: "center",
    gap: "50px",
    height: "calc(100vh - 100px)",
    width: "100%",
    justifyContent: "center",
  };
  // ----------------------

  return (
    <div style={layoutStyle}>
      <div style={appStyle}>
        <About />
        <Projects />
        <ContactUs />
      </div>
    </div>
  );
}

function About() {
  // Styles
  // ----------------------
  const paragraphStyle = {
    textAlign: "center",
  };
  const aboutStyle = {
    display: "flex",

    alignItems: "center",
    flexDirection: "column",
    gap: "5px",
    justifyContent: "center",
  };
  const zenithStyle = { fontSize: "24px", fontWeight: "400", color: "black" };
  const designsStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#bc4749",
  };
  // ----------------------

  return (
    <div style={aboutStyle}>
      <p style={zenithStyle}>
        ZENITH<sub style={designsStyle}>designs</sub>
      </p>
      <p style={paragraphStyle}>
        We are a cool design company.
        <br />
        Join us!{" "}
      </p>
    </div>
  );
}

function Projects() {
  // Styles
  // ----------------------
  const projectsStyle = {
    textColor: "black",
    textTransform: "uppercase",
    backgroundColor: "#f2e8cf",
    color: "#6a994e",
    padding: "20px",
    borderRadius: "10px",
  };
  const listStyle = {
    color: "#386641",
    textTransform: "capitalize",
  };
  const listItemStyle = {};
  // ----------------------

  const projects = [
    "Project Zenith",
    "Lunar Branding Initiative",
    "Velocity UI Redesign",
    "Phoenix Digital Experience",
    "Nexus Brand Identity",
    "Prism Visual Campaign",
    "Aurora Web Platform",
  ];
  return (
    <div style={projectsStyle}>
      These are our projects:
      <ul style={listStyle}>
        {projects.map((project) => (
          <li key={project} style={listItemStyle}>
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
}
function ContactUs() {
  // Styles
  // ----------------------
  const contactUsStyle = {
    textColor: "black",
    textAlign: "center",
  };
  const listStyle = {};
  const linkStyle = {
    color: "#a7c957",
  };
  const listItemStyle = { textAlign: "left", marginBottom: "8px" };
  // ----------------------

  const contactInfo = [
    "LinkedIn: Zenith Designs",
    "Twitter: zenithDesigns",
    "Portfolio: zenithDesigns",
  ];
  return (
    <div style={contactUsStyle}>
      Contact us:
      <ul style={listStyle}>
        {contactInfo.map((contact) => (
          <li key={contact} style={listItemStyle}>
            <a href="#" style={linkStyle}>
              {contact}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
