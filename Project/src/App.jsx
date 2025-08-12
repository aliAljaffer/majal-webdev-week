import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import Project from "./Project";

function App() {
  return (
    <>
      <Project />
    </>
  );
}
export default App;

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

        <Recenter latitude={position[0]} longitude={position[1]} />
      </MapContainer>
    </div>
  );
}

function WeatherDashboard({ latitude, longitude }) {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    async function fetchWeatherData() {
      if (!latitude || !longitude) return;
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,visibility,surface_pressure&timezone=auto`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWeatherData();
  }, [latitude, longitude]);

  if (!weatherData) return null;
  const {
    relative_humidity_2m: humidity,
    surface_pressure: pressure,
    temperature_2m: temp,
    wind_speed_10m: wind_speed,
  } = weatherData.current;
  return (
    <div className="weather-data">
      <p>
        🌡️ Temperature <span className="temp-value">{temp + "°C"}</span>
      </p>
      <p>
        ⬇️ Pressure: <strong className="metric-value">{pressure}</strong> hPa
      </p>
      <p>
        🫩 Humidity: <strong className="metric-value">{humidity}%</strong>
      </p>
      <p>
        🌬️ Wind Speed: <strong className="metric-value">{wind_speed}</strong>{" "}
        km/h
      </p>
    </div>
  );
}

function Footer({ developerName }) {
  return (
    <footer className="footer">
      Built by <span className="footer-name">{`${developerName}`}</span>
    </footer>
  );
}

const Recenter = ({ latitude, longitude }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([latitude, longitude], 11);
  }, [latitude, longitude, map]);
  if (!latitude || !longitude) return null;
  return null;
};

function MilestoneOne() {
  return (
    <PageLayout>
      <Title titleText={"The App"} />
      <BoxContainer>
        <Section title="📍 Search Location">
          <TextInput />
        </Section>
      </BoxContainer>
    </PageLayout>
  );
}

function MilestoneTwo() {
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

function MilestoneThree() {
  const sciTech = [26.3192, 50.2279];
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
        <Section>
          ⛅ <strong className="location-name">Location</strong> Weather
          <WeatherDashboard latitude={sciTech[0]} longitude={sciTech[1]} />
        </Section>
        <Footer developerName={"Ali Aljaffer"} />
      </BoxContainer>
    </PageLayout>
  );
}

function MilestoneFour() {
  const sciTech = [26.3192, 50.2279];
  const [city, setCity] = useState("Khobar");
  const [coordinates, setCoordinates] = useState(sciTech);

  function handleTextSubmit(cityName) {
    async function getCoordinates() {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            cityName
          )}&count=1&language=en&format=json`
        );

        if (response.ok) {
          const data = await response.json();
          if (data.results.length < 1) return;
          setCity(cityName);
          const { latitude, longitude } = data.results[0];
          setCoordinates([latitude, longitude]);
        }
      } catch (err) {
        console.error(err);
      }
    }
    getCoordinates();
  }

  return (
    <PageLayout>
      <Title titleText={"Weather app wee"} />
      <BoxContainer>
        <Section title="📍 Search Location">
          <TextInput onTextSubmit={handleTextSubmit} />
        </Section>
        <Section title="🌍 Location Map">
          <Map position={coordinates} />
        </Section>
        <Section>
          <strong className="location-name">⛅ {city}</strong>
          <WeatherDashboard
            latitude={coordinates[0]}
            longitude={coordinates[1]}
          />
        </Section>
        <Footer developerName={"Ali Aljaffer"} />
      </BoxContainer>
    </PageLayout>
  );
}
