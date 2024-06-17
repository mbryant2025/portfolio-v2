import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '../components/Navbar';

const geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

const stateStyle = {
  color: "#0000ff",
  weight: 2,
};

const stateFipsToAbbreviation: Record<string, string> = {
  "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT", "10": "DE", "11": "DC", "12": "FL",
  "13": "GA", "15": "HI", "16": "ID", "17": "IL", "18": "IN", "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME",
  "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS", "29": "MO", "30": "MT", "31": "NE", "32": "NV", "33": "NH",
  "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND", "39": "OH", "40": "OK", "41": "OR", "42": "PA", "44": "RI",
  "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT", "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI",
  "56": "WY",
};

const TravelMap: React.FC = () => {
  const mapRef = useRef(null);
  const [geoJSONData, setGeoJSONData] = useState(null);

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

    const map = L.map(mapRef.current).setView([37.8, -96], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);

    L.geoJSON(geoJSONData, {
      style: stateStyle,
    }).addTo(map);

    // Clean up Leaflet map instance on unmount
    return () => {
      map.remove();
    };
  }, [geoJSONData]); // This useEffect runs whenever geoJSONData changes

  return (
    <div>
      <Navbar selected="Travel Map" animate={true} />
      <div ref={mapRef} id="map" style={{ height: "100vh", width: "100%" }}></div>
    </div>
  );
};

export default TravelMap;