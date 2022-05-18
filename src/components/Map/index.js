import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const Map = () => {
    const position = [26.8439, 75.5652];

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} id="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Center of project submission
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
