import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import geojsonData from './mato-grosso-geojson.json'; // O arquivo GeoJSON com os limites dos municípios
import 'leaflet/dist/leaflet.css';

const App = () => {
  // Função para colorir os municípios
  const getColor = (municipalityName) => {
    const colors = {
      "Cuiabá": "#FF5733",
      "Rondonópolis": "#33FF57",
      "Várzea Grande": "#3357FF",
      "Sinop": "#FF33A1",
      // Adicione mais cidades com cores aqui
    };

    return colors[municipalityName] || "#888"; // Cor padrão se a cidade não estiver no mapa de cores
  };

  // Estilo para os limites dos municípios
  const style = (feature) => {
    const municipalityName = feature.properties.name;
    const color = getColor(municipalityName); // Obtém a cor para o município
    return {
      fillColor: color,    // Preenchimento da cor
      weight: 1,           // Largura da linha de limite
      opacity: 1,          // Opacidade da linha
      color: 'white',      // Cor da linha
      dashArray: '3',      // Linha tracejada
      fillOpacity: 0.7,    // Opacidade do preenchimento
    };
  };

  // Função para exibir o nome da cidade no Tooltip quando o mouse passar sobre o município
  const onEachFeature = (feature, layer) => {
    layer.bindTooltip(feature.properties.name, {
      permanent: false,
      direction: 'top',
      offset: [0, -10],
      opacity: 1,
      className: 'sms-tooltip',
    });
  };

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={[-15.601, -56.096]} zoom={7} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Adiciona o GeoJSON com limites e cores */}
        <GeoJSON
          data={geojsonData}
          style={style}
          onEachFeature={onEachFeature} // Aplica a função para exibir o nome da cidade
        />
      </MapContainer>

      {/* Adicionando um estilo de SMS customizado */}
      <style jsx>{`
        .sms-tooltip {
          background-color: #333;
          color: #fff;
          border-radius: 10px;
          padding: 8px 12px;
          font-size: 16px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default App;
