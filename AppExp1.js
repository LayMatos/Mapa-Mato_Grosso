import React, { useState, useEffect } from "react";
import { Map, Overlay } from "pigeon-maps"; // Pigeon Maps
import geojsonData from './mato-grosso-geojson.json'; // Importando o arquivo GeoJSON
import './App.css';

const App = () => {
  const [label, setLabel] = useState("");

  // Função para determinar a cor de cada município
  const getMunicipalityColor = () => {
    return "#007bff";  // Cor azul para os municípios
  };

  const getBorderColor = () => {
    return "#004085";  // Cor azul escuro para as divisas
  };

  const handleHover = (event) => {
    const { latLng } = event;
    const municipality = geojsonData?.features.find(
      (feature) =>
        Math.abs(feature.geometry.coordinates[0] - latLng[1]) < 0.1 &&
        Math.abs(feature.geometry.coordinates[1] - latLng[0]) < 0.1
    );
    setLabel(municipality ? municipality.properties.name : "");
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      {/* Exibe o nome da cidade */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xl text-white bg-black px-4 py-2 rounded shadow-md">
        {label && <p>{label}</p>}
      </div>
      
      {/* Mapa Pigeon com os municípios */}
      <Map
        height={window.innerHeight}
        width="100%"
        center={[-15.601, -56.096]} // Centro aproximado de Mato Grosso
        zoom={7}
        onMouseMove={handleHover}
      >
        {geojsonData.features.map((feature, index) => {
          const [longitude, latitude] = feature.geometry.coordinates[0]; // GeoJSON usa [long, lat]
          const municipalityName = feature.properties.name;
          const municipalityColor = getMunicipalityColor(); // Cor azul para o município
          const borderColor = getBorderColor(); // Cor azul escuro para as divisas

          return (
            <React.Fragment key={index}>
              {/* Exibe a área do município colorida de azul */}
              <Overlay
                anchor={[latitude, longitude]}
                payload={index}
                offset={[0, 0]}
              >
                <div
                  style={{
                    backgroundColor: municipalityColor,
                    borderRadius: "50%",
                    width: "12px",
                    height: "12px",
                    cursor: "pointer",
                    border: "2px solid #fff", // Destaca as bordas do marcador
                  }}
                />
              </Overlay>

              {/* Desenhando a fronteira do município com borda azul escuro */}
              <Overlay
                anchor={[latitude, longitude]}
                payload={index}
                offset={[0, 0]}
                style={{
                  border: `2px solid ${borderColor}`,
                  backgroundColor: "rgba(0, 0, 0, 0.1)", // Fundo semitransparente
                  borderRadius: "5px",
                }}
              />
            </React.Fragment>
          );
        })}
      </Map>
    </div>
  );
};

export default App;
