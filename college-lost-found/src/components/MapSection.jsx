// src/components/MapSection.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import marker icons
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapSection = () => {
  const position = [51.505, -0.09]; // Default coordinates (change as needed)

  return (
    <section id="map" className="py-16">
      <h2 className="text-2xl font-semibold mb-4">Lost & Found Map</h2>
      <MapContainer center={position} zoom={13} className="h-96 rounded-lg">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A placeholder for lost and found items.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default MapSection;
