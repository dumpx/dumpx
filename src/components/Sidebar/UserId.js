import React from 'react'
import { UserIdContainer } from './styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserId = ({ username }) => {
    return (
        <UserIdContainer>
            <AccountCircleIcon />
            <h4>{username}</h4>
        </UserIdContainer>
    )
}

export default UserId