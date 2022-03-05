import Dashboard from '../components/Dashboard';
import React, { Fragment, useState } from 'react'
import PopupExample from '../components/Map';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map } from 'react-map-gl';
import { HomeContainer, MapContainer } from './GlobalStyles';


const Home = () => {

    const [viewport, setViewPort] = useState({
        lattitude: 37,
        longitude: -122,
        zoom: 8,
    })

    const initialViewState = {
        latitude: 26.86,
        longitude: 75.7873,
        zoom: 11,
        bearing: 0,
        pitch: 25
    };

    const [settings, setSettings] = useState({
        scrollZoom: true,
        boxZoom: true,
        dragRotate: true,
        dragPan: true,
        keyboard: true,
        doubleClickZoom: true,
        touchZoomRotate: true,
        touchPitch: true,
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85
    });

    return (
        <Fragment>
            <HomeContainer>
                <Dashboard />
                <MapContainer>
                    <Map
                        style={{
                            height: '100%',
                            width: '100%'
                        }}
                        initialViewState={initialViewState}
                        {...settings}
                        mapStyle="mapbox://styles/mapbox/dark-v9"
                        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    />

                    {/* <ControlPanel settings={settings} onChange={updateSettings} /> */}
                </MapContainer>
            </HomeContainer>
        </Fragment>
    )
}

export default Home