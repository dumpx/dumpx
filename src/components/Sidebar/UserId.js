import React from 'react'
import { UserIdContainer } from './styles'
import userVector from './../../assets/userVector.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserId = ({ username }) => {
    return (
        <UserIdContainer>
            {/* <img src={userVector} alt="user" /> */}
            <AccountCircleIcon />
            <h4>{username}</h4>
        </UserIdContainer>
    )
}

export default UserId