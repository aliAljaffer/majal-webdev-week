import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";

export default function Project() {
  return (
    <PageLayout>
      <Title titleText={"The App"} />
      <BoxContainer>
        <Section title="📍 Search Location">
          <TextInput />
        </Section>
        <Section title="🌍 Location Map">
          <Map />
        </Section>
      </BoxContainer>
    </PageLayout>
  );
}

function BoxContainer({ children }) {
  return <div className="container start-align">{children}</div>;
}

function PageLayout({ children }) {
  return <div className="layout">{children}</div>;
}

function Title({ titleText }) {
  return <p className="title">{titleText}</p>;
}

function TextInput({ onTextSubmit }) {
  const [textInput, setTextInput] = useState("");

  function handleSubmit() {
    if (onTextSubmit) onTextSubmit(textInput);
  }

  return (
    <div className="text-input-container">
      <input
        type="text"
        placeholder="Dammam, Saudi Arabia"
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}
function Map({ position }) {
  const sciTech = [26.3192, 50.2279];
  const IAU = [26.393371, 50.19038];
  // Find the coordinates of a special place to you on Google maps
  // Add a marker on it, or near it, with a Popup!
  // <Marker></Marker>
  // const myPlace = [111, 111];
  // <Marker position={myPlace}>
  //   <Popup>☕ My favorite Coffee Shop</Popup>
  // </Marker>;
  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={sciTech}>
          <Popup>We are here 😊</Popup>
        </Marker>
        <Marker position={IAU}>
          <Popup>🎓 Imam Abdulrahman Bin Fahad University</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

function Section({ title = "", children }) {
  return (
    <div className="start-align full-width flex">
      <p className="section-title">{title}</p>
      {children}
      <hr
        style={{
          margin: "2rem 0 1rem 0",
          width: "80%",
          justifySelf: "center",
          opacity: 0.3,
        }}
      />
    </div>
  );
}
