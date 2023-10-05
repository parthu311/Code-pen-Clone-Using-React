import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import logo from '../Image/Logo.png'

const Container = styled(AppBar)`
        background : #060606;
        height : 9vh
`

const Header = () => {
  return (

    <Container style={{position:"static"}}>
        <Toolbar>
            <img src={logo} alt="CodepanLogo" style={{width:40}} />
        </Toolbar>
    </Container>
    )
}

export default Header