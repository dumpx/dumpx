import React from 'react'
import Cards from './Cards'
import SearchPanel from './SearchPanel'
import { DashboardContainer } from './styles'

const index = () => {
    return (
        <DashboardContainer>
            <SearchPanel />
            <h2>Hi, Welcome back</h2>
            <Cards />
        </DashboardContainer>
    )
}

export default index