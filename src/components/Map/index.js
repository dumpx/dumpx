import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ positions }) => {
    return (
        <MapContainer
            center={positions[0]}
            zoom={13}
            scrollWheelZoom={false}
            id="map"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {positions.map((position) => {
                return (
                    <Marker position={position}>
                        <Popup>Center of project submission</Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default Map;
