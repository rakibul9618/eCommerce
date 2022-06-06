import React from 'react'
import {Box , Typography , Container} from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container>
      <Box sx={{ width:'100%' , display:'flex' , justifyContent:'center' , py:'1rem' }}>
        <Typography sx={{ fontSize:'8' , fontWeight:500 }}>
              Copyright @ ZIZZ
        </Typography>
      </Box>
      </Container>

    </footer>
  )
}

export default Footer