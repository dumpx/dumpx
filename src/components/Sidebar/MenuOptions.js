import { React, Fragment, createElement } from 'react'
import { MenuOptionsContainer, Option } from './styles'
// import Home from '@mui/icons-material/Home'

const MenuOptions = () => {

  const options = [
    { component: 'Home', title: 'Dashboard' },
    { component: 'AccountCircle', title: 'User' },
    { component: 'Login', title: 'Login' },
    { component: 'Input', title: 'Register' }
  ]

  return (
    <Fragment>
      <MenuOptionsContainer>
        {options.map((item) => {
          return (
            <Option key={Math.random()}>
              <h5>{item.title}</h5>
            </Option>
          )
        })}
      </MenuOptionsContainer>
    </Fragment>
  )
}

export default MenuOptions