import React, { useState } from 'react'
import {Box } from  '@mui/material';
import styled from '@emotion/styled';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css'

const Heading   = styled(Box)
    `
        background: #1d1e22;
        display: flex;
        padding: 9px 12px;
        color: white;
    `
const Header = styled(Box)`
        display: flex;
        background: #060606;
        color: #fff ;
        justify-content: space-between;
        font-weight: 700;    


`
const Container = styled(Box)`

flex-grow: 1;
flex-basis: 0;
display: flex;
flex-direction: column;
padding: 0 8px 8px;
color: white;
`




const Editor = ({heading , icon ,color , value , onChange}) =>{
const [open, setOpen] = useState(true)
    
    const handleChange = (editor, data, value) => {
        onChange(value); // Use capital "O" in onChange
      }
    return (
        <>
        <Container style={open ? null :{flexGrow: 0}}>
        <Header>  
            <Heading>
                <Box component='span' 
                    style={{background: color , 
                            height:20 , 
                            width:20 , 
                            display:'flex',
                            placeContent: 'center',
                            borderRadius: 5, 
                            marginRight: 5,
                            paddingBottom:"2px"
                        }}>
                    {icon}
                </Box>
                {heading}
            </Heading>
            <CloseFullscreenIcon
                onClick={() => setOpen(prevState => !prevState )}
                fontSize='small'
                style={{alignSelf:'center'}}
            />
        </Header>
            <ControlledEditor 
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options={

                {
                    theme: 'materaial',
                    lineNumbers : true,
                    mode :  'xml'
                }
            }
            />
        </Container>  
        </>
    )
}

export default Editor;