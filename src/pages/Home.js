import Dashboard from '../components/Dashboard';
import React, { Fragment } from 'react'
import MapPopup from '../components/Map';
import { HomeContainer } from './GlobalStyles';

const Home = () => {

    return (
        <Fragment>
            <HomeContainer>
                <Dashboard />
                <MapPopup />
            </HomeContainer>
        </Fragment>
    )
}

export default Home