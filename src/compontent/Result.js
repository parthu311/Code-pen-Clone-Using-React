// import styled from '@emotion/styled'
import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
// import LocalStore from './LocalStore'


import {DataContext } from '../conText/DataProvider'
import styled from '@emotion/styled'

const Container = styled(Box)`
    height : 41vh;
`


const Result = () => {
    const {html ,css ,js } = useContext(DataContext);
    const [src, setSrc] = useState('')
    
    useEffect(() => {
       const timeOut = setTimeout(() => {
            setSrc(srcCode);
        }, 1000);
    
        return () => clearTimeout(timeOut);
    
    }, [html,css, js])
    
    
    const srcCode = `
            <html>
            <body>${html}</body>
            <style>${css} </style>
            <script>${js}</script>
            </html>
    `
  return (
    <Container>
        <iframe
            srcDoc={src}
            title='Output'
            sandbox='allow-script'
            frameBorder={0}
            width="100%"
            height="100%"
        />
    </Container>
  )
}

export default Result