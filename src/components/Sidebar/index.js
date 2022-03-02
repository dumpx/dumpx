import React from 'react'
import MenuOptions from './MenuOptions'
import { Container } from './styles'
import UserId from './UserId'

const index = () => {
    return (
        <Container>
            <h1>dumpx</h1>
            <UserId username="Vlad Putin" />
            <MenuOptions />
        </Container>
    )
}

export default index