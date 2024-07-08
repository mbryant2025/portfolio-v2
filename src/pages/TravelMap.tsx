import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '../components/Navbar';
import '../styles/travel-map.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const stateStyle = {
  color: "#000000",
  fillColor: "#ffffff",
  weight: 0.15,
};

const colorCodes = {
  lived: "#ff0000", //red
  stayed: "#147006", //green
  visited: "#ff00ff", //purple
  traveled: "#0000ff" //blue
}

const stateFipsToAbbreviation: Record<string, string> = {
  "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT", "10": "DE", "11": "DC", "12": "FL",
  "13": "GA", "15": "HI", "16": "ID", "17": "IL", "18": "IN", "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME",
  "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS", "29": "MO", "30": "MT", "31": "NE", "32": "NV", "33": "NH",
  "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND", "39": "OH", "40": "OK", "41": "OR", "42": "PA", "44": "RI",
  "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT", "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI",
  "56": "WY", "72": "PR"
};

const fileName = "travel.json";

const TravelMap: React.FC = () => {
  const mapRef = useRef(null);
  const [geoJSONData, setGeoJSONData] = useState(null);
  const [rawData, setRawData] = useState<any>(null);
  const [selectedYear, setSelectedYear] = useState(localStorage.getItem("selectedYear") || "All Time");
  const [possibleYears, setPossibleYears] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState(localStorage.getItem("selectedType") || "All");
  const [livedCounties, setLivedCounties] = useState<Set<string>>(new Set());
  const [stayedCounties, setStayedCounties] = useState<Set<string>>(new Set());
  const [visitedCounties, setVisitedCounties] = useState<Set<string>>(new Set());
  const [traveledCounties, setTraveledCounties] = useState<Set<string>>(new Set());
  const [showMap, setShowMap] = useState(true);
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile state when window width changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile, isMobile]);

  // Store the selected year and type in local storage
  useEffect(() => {
    localStorage.setItem("selectedYear", selectedYear);
    localStorage.setItem("selectedType", selectedType);
  }, [selectedYear, selectedType]);

  // Load data from file
  useEffect(() => {
    fetch(fileName)
      .then((response) => response.json())
      .then((data) => {
        setRawData(data);
        setPossibleYears(["All Time", ...Object.keys(data).reverse()]);
      });
  }, []);

  useEffect(() => {
    // Use the raw data and the selected year and type to set the counties
    if (!rawData) {
      return;
    }

    const lived = [];
    const stayed = [];
    const visited = [];
    const traveled = [];

    if (selectedYear === "All Time") {
      // Go through all years and add the counties
      for (const year in rawData) {
        if (rawData[year].lived) {
          lived.push(...rawData[year].lived);
          stayed.push(...rawData[year].lived);
          visited.push(...rawData[year].lived);
          traveled.push(...rawData[year].lived);
        }
        if (rawData[year].stayed) {
          stayed.push(...rawData[year].stayed);
          visited.push(...rawData[year].stayed);
          traveled.push(...rawData[year].stayed);
        }
        if (rawData[year].visited) {
          visited.push(...rawData[year].visited);
          traveled.push(...rawData[year].visited);
        }
        if (rawData[year].traveled) {
          traveled.push(...rawData[year].traveled);
        }
      }
    } else if (rawData[selectedYear]) {
      if (rawData[selectedYear].lived) {
        lived.push(...rawData[selectedYear].lived);
        stayed.push(...rawData[selectedYear].lived);
        visited.push(...rawData[selectedYear].lived);
        traveled.push(...rawData[selectedYear].lived);
      }
      if (rawData[selectedYear].stayed) {
        stayed.push(...rawData[selectedYear].stayed);
        visited.push(...rawData[selectedYear].stayed);
        traveled.push(...rawData[selectedYear].stayed);
      }
      if (rawData[selectedYear].visited) {
        visited.push(...rawData[selectedYear].visited);
        traveled.push(...rawData[selectedYear].visited);
      }
      if (rawData[selectedYear].traveled) {
        traveled.push(...rawData[selectedYear].traveled);
      }
    }

    setLivedCounties(new Set(lived));
    setStayedCounties(new Set(stayed));
    setVisitedCounties(new Set(visited));
    setTraveledCounties(new Set(traveled));

  }, [rawData, selectedYear, selectedType]);

  // Fetch GeoJSON data
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json')
      .then((response) => response.json())
      .then((data) => {
        setGeoJSONData(data);
      });
  }, []);

  // Initialize map and add GeoJSON layer
  useEffect(() => {
    if (!mapRef.current || !geoJSONData) {
      // If the div or the GeoJSON data isn't loaded yet, exit the useEffect
      return;
    }

    const map = L.map(mapRef.current).setView([39.2, -95], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);

    function highlightFeature(e: L.LeafletMouseEvent) {
      const layer = e.target;

      layer.setStyle({
        weight: 2,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    }

    function resetHighlight(e: L.LeafletMouseEvent) {
      const layer = e.target;

      layer.setStyle({
        weight: 0.15,
      });
    }

    function onEachFeature(feature: any, layer: L.Layer) {
      layer.on({
        mouseover: function (e: L.LeafletMouseEvent) {
          highlightFeature(e);
          if (feature.properties && feature.properties.NAME && feature.properties.STATE) {
            const popupContent = `${feature.properties.NAME}, ${stateFipsToAbbreviation[feature.properties.STATE]} (${feature.id})`;
            layer.bindPopup(popupContent).openPopup();
          }
        },
        mouseout: function (e: L.LeafletMouseEvent) {
          layer.closePopup();
          // Set the weight back to 0.15
          resetHighlight(e);
        },
        // On click, copy the county FIPS code to the clipboard
        click: function (e: L.LeafletMouseEvent) {
          const textArea = document.createElement("textarea");
          textArea.value = feature.id;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
      });
    }

    L.geoJSON(geoJSONData, {
      style: stateStyle,
      onEachFeature: onEachFeature,
    }).addTo(map);

    // Add the color specified in countyColoring
    L.geoJSON(geoJSONData, {
      style: function (feature) {
        if (feature && feature.id) {
          const id = feature.id as string;
          if ((selectedType === "All" || selectedType === "Lived") && livedCounties.has(id)) {
            return {
              ...stateStyle,
              fillColor: colorCodes.lived,
              fillOpacity: 0.5
            };
          } else if ((selectedType === "All" || selectedType === "Stayed") && stayedCounties.has(id)) {
            return {
              ...stateStyle,
              fillColor: colorCodes.stayed,
              fillOpacity: 0.5
            };
          } else if ((selectedType === "All" || selectedType === "Visited") && visitedCounties.has(id)) {
            return {
              ...stateStyle,
              fillColor: colorCodes.visited,
              fillOpacity: 0.5
            };
          } else if ((selectedType === "All" || selectedType === "Traveled") && traveledCounties.has(id)) {
            return {
              ...stateStyle,
              fillColor: colorCodes.traveled,
              fillOpacity: 0.5
            };
          }
        }
        return stateStyle;
      },
      onEachFeature: onEachFeature
    }).addTo(map);

    // Clean up Leaflet map instance on unmount
    return () => {
      map.remove();
    };
  }, [geoJSONData, livedCounties, stayedCounties, visitedCounties, traveledCounties, selectedType]);

  return (
    <div className="travel-map">
      <Navbar selected="Travel Map" animate={true} lightText={!showMap} />


      {showSidebar && <div className="side-bar">
        <h1>Travel Map</h1>

        <h2>Years:</h2>
        {/* Dropdown */}
        <select className="select"
          value={selectedYear}
          onChange={(e) => {
            setSelectedYear(e.target.value);
          }}>
          {possibleYears.map((year) => {
            return <option value={year}>{year}
            </option>;
          })}
        </select>

        <h2>Type:</h2>

        <select className="select"
          value={selectedType}
          onChange={(e) => {
            setSelectedType(e.target.value);
          }
          }>
          <option value="All">All</option>
          <option value="Lived">Lived</option>
          <option value="Stayed">Stayed</option>
          <option value="Visited">Visited</option>
          <option value="Traveled">Traveled</option>
        </select>

        <h2>Key</h2>
        <table className="table">
          <tbody>
            <tr onClick={() => setSelectedType(selectedType === "Lived" ? "All" : "Lived")} style={{ cursor: "pointer" }}>
              <td style={{ backgroundColor: colorCodes.lived, width: "10px" }}></td>
              <td>Lived</td>
            </tr>
            <tr onClick={() => setSelectedType(selectedType === "Stayed" ? "All" : "Stayed")} style={{ cursor: "pointer" }}>
              <td style={{ backgroundColor: colorCodes.stayed, width: "10px" }}></td>
              <td>Stayed</td>
            </tr>
            <tr onClick={() => setSelectedType(selectedType === "Visited" ? "All" : "Visited")} style={{ cursor: "pointer" }}>
              <td style={{ backgroundColor: colorCodes.visited, width: "10px" }}></td>
              <td>Visited</td>
            </tr>
            <tr onClick={() => setSelectedType(selectedType === "Traveled" ? "All" : "Traveled")} style={{ cursor: "pointer" }}>
              <td style={{ backgroundColor: colorCodes.traveled, width: "10px" }}></td>
              <td>Traveled</td>
            </tr>
          </tbody>
        </table>

        <h2>{selectedYear} Stats:</h2>

        <button className="select" onClick={() => { setShowMap(!showMap); if (!showMap) { window.location.reload(); } }}>{`Show ${showMap ? "Plots" : "Map"}`}</button>

        <h3>States + DC:</h3>
        <table className="table">
          {/* <thead>
                      <tr>
                          <th>Category</th>
                          <th>Count</th>
                      </tr>
                  </thead> */}
          <tbody>
            {/* Totals are calculated using the fact that the first two digits of the FIPS code are the state code */}
            <tr>
              <td>Total</td>
              <td>
                {(() => {
                  const combinedArray = [
                    ...Array.from(livedCounties),
                    ...Array.from(stayedCounties),
                    ...Array.from(visitedCounties),
                    ...Array.from(traveledCounties),
                  ];
                  const slicedSet = new Set(combinedArray.map((county) => county.slice(0, 2)));
                  return slicedSet.size;
                })()}
              </td>
            </tr>
            <tr>
              <td>Lived</td>
              <td>
                {new Set(Array.from(livedCounties).map((county) => county.slice(0, 2))).size}
              </td>
            </tr>
            <tr>
              <td>Stayed</td>
              <td>
                {new Set(Array.from(stayedCounties).map((county) => county.slice(0, 2))).size}
              </td>
            </tr>
            <tr>
              <td>Visited</td>
              <td>
                {new Set(Array.from(visitedCounties).map((county) => county.slice(0, 2))).size}
              </td>
            </tr>
            <tr>
              <td>Traveled</td>
              <td>
                {new Set(Array.from(traveledCounties).map((county) => county.slice(0, 2))).size}
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Counties:</h3>
        <table className="table">
          <tbody>
            <tr>
              <td>Total</td>
              <td>{new Set([...Array.from(livedCounties), ...Array.from(stayedCounties), ...Array.from(visitedCounties), ...Array.from(traveledCounties)]).size}</td>
            </tr>
            <tr>
              <td>Lived</td>
              <td>{livedCounties.size}</td>
            </tr>
            <tr>
              <td>Stayed</td>
              <td>{stayedCounties.size}</td>
            </tr>
            <tr>
              <td>Visited</td>
              <td>{visitedCounties.size}</td>
            </tr>
            <tr>
              <td>Traveled</td>
              <td>{traveledCounties.size}</td>
            </tr>
          </tbody>
        </table>

      </div>}

      {<button className={`sidebar-button ${!showSidebar ? "sidebar-button-left" : ""}`} onClick={() => setShowSidebar(!showSidebar)}>
        {isMobile ? (showSidebar ? "▼" : "▲") : (showSidebar ? "◀" : "▶")}</button>}


      <div className="map-container">

        {showMap && <div className="map" ref={mapRef} id="map"
          style={{ height: "calc(100vh + 20px)", width: "100%", marginTop: "-10px", marginLeft: "-10px", position: "absolute", overflow: "hidden" }}
        ></div>}

        {!showMap && <div className='plots'>
          <div style={{ width: '80%', margin: '0 auto' }}>
            <h2 style={{ color: "white" }}>County Visits By Year</h2>
            <Line
              data={{
                labels: Object.keys(rawData).sort((a, b) => Number(a) - Number(b)),
                datasets: [
                  {
                    label: 'Lived',
                    data: Object.keys(rawData).sort((a, b) => Number(a) - Number(b)).map((year) => new Set(rawData[year].lived ? rawData[year].lived : []).size),
                    borderColor: colorCodes.lived,
                    fill: false,
                  },
                  {
                    label: 'Stayed',
                    data: Object.keys(rawData).sort((a, b) => Number(a) - Number(b)).map((year) => new Set([...rawData[year].lived ? rawData[year].lived : [], ...rawData[year].stayed ? rawData[year].stayed : []]).size),
                    borderColor: colorCodes.stayed,
                    fill: false,
                  },
                  {
                    label: 'Visited',
                    data: Object.keys(rawData).sort((a, b) => Number(a) - Number(b)).map((year) => new Set([...rawData[year].lived ? rawData[year].lived : [], ...rawData[year].stayed ? rawData[year].stayed : [], ...rawData[year].visited ? rawData[year].visited : []]).size),
                    borderColor: colorCodes.visited,
                    fill: false,
                  },
                  {
                    label: 'Traveled',
                    data: Object.keys(rawData).sort((a, b) => Number(a) - Number(b)).map((year) => new Set([...rawData[year].lived ? rawData[year].lived : [], ...rawData[year].stayed ? rawData[year].stayed : [], ...rawData[year].visited ? rawData[year].visited : [], ...rawData[year].traveled ? rawData[year].traveled : []]).size),
                    borderColor: colorCodes.traveled,
                    fill: false,
                  },
                ]
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />

            <h2 style={{ color: "white" }}>State Visits By Year</h2>
            <Line
              data={{
                labels: Object.keys(rawData).sort((a, b) => Number(a) - Number(b)),
                datasets: [
                  {
                    label: 'Lived',
                    data: Object.keys(rawData).sort((a, b) => Number(a) - Number(b)).map((year) => new Set([...Array.from(rawData[year].lived ? rawData[year].lived : []).map((county) => (county as string).slice(0, 2))]).size),
                    borderColor: colorCodes.lived,
                    fill: false,
                  },
                  {
                    label: 'Stayed',
                    data: Object.keys(rawData).sort((a, b) => Number(a) - Number(b)).map((year) => new Set([...Array.from(rawData[year].lived ? rawData[year].lived : []).map((county) => (county as string).slice(0, 2)), ...Array.from(rawData[year].stayed ? rawData[year].stayed : []).map((county) => (county as string).slice(0, 2))]).size),
                    borderColor: colorCodes.stayed,
                    fill: false,
                  },
                  {
                    label: 'Visited',
                    data: Object.keys(rawData).sort((a, b) => Number(a) - Number(b)).map((year) => new Set([...Array.from(rawData[year].lived ? rawData[year].lived : []).map((county) => (county as string).slice(0, 2)), ...Array.from(rawData[year].stayed ? rawData[year].stayed : []).map((county) => (county as string).slice(0, 2)), ...Array.from(rawData[year].visited ? rawData[year].visited : []).map((county) => (county as string).slice(0, 2))]).size),
                    borderColor: colorCodes.visited,
                    fill: false,
                  },
                  {
                    label: 'Traveled',
                    data: Object.keys(rawData).sort((a, b) => Number(a) - Number(b)).map((year) => new Set([...Array.from(rawData[year].lived ? rawData[year].lived : []).map((county) => (county as string).slice(0, 2)), ...Array.from(rawData[year].stayed ? rawData[year].stayed : []).map((county) => (county as string).slice(0, 2)), ...Array.from(rawData[year].visited ? rawData[year].visited : []).map((county) => (county as string).slice(0, 2)), ...Array.from(rawData[year].traveled ? rawData[year].traveled : []).map((county) => (county as string).slice(0, 2))]).size),
                    borderColor: colorCodes.traveled,
                    fill: false,
                  },
                ]
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            />

          </div>

        </div>}

      </div>
    </div>
  );
};

export default TravelMap;