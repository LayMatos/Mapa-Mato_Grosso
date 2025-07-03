
# 🗺️ Mapa Interativo dos Municípios do Mato Grosso (React + Leaflet)

Este projeto é uma aplicação React que utiliza o Leaflet para exibir um **mapa interativo do estado do Mato Grosso**, com os **municípios coloridos por nome** e **tooltip com o nome da cidade** ao passar o mouse.

---

## ⚙️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Leaflet](https://leafletjs.com/)
- GeoJSON (limites municipais do MT)
- CSS Customizado para tooltips

---

## 🧭 Funcionalidades

- Mapa centralizado no Mato Grosso com zoom ajustado
- Cidades coloridas individualmente
- Tooltip interativo com nome do município
- Estilização customizada do popup (tooltip)

---

## ▶️ Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio
```
### 2. Instale as dependências
```bash
npm install
```
### 3. Inicie o servidor de desenvolvimentor
```bash
npm start
```
> Acesse http://localhost:3000 no navegador.

## 🗂️ Estrutura de Arquivos
pgsql
Copiar
Editar
├── public/
├── src/
│   ├── App.jsx
│   ├── mato-grosso-geojson.json
│   └── index.js
├── package.json
└── README.md
 
## 🗺️ Sobre o GeoJSON
O arquivo mato-grosso-geojson.json deve conter os limites dos municípios do estado de Mato Grosso, com a propriedade feature.properties.name representando o nome da cidade.

## 🎨 Cores Personalizadas
Você pode personalizar as cores dos municípios modificando a função getColor no arquivo App.jsx:
```bash
const colors = {
  "Cuiabá": "#FF5733",
  "Rondonópolis": "#33FF57",
  "Várzea Grande": "#3357FF",
  "Sinop": "#FF33A1",
  // Adicione mais cidades
};
```

## 📦 Dependências Principais
```bash
npm install react-leaflet leaflet
```
> Adicione também o CSS do Leaflet no index.js ou App.jsx:
- import 'leaflet/dist/leaflet.css';

## 📝 Licença
Este projeto está sob a licença MIT. 

## 👨‍💻 Autor
Feito com 💙 por Layssa Matos