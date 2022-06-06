import React from 'react'
import {Container, AppBar, Box, Toolbar, Typography, Button, Divider, useTheme, useMediaQuery , Link} from "@mui/material";
import RtlProvider from "../../ CacheProvider";
import CartIcon from "./CartIcon";
import DrawerComp from "./DrawerComp";
import MenuIcon from '@mui/icons-material/Menu';
import {useState , useEffect} from "react";
import  { Link as  RouterLink} from 'react-router-dom';






const Header = () => {
    const [isDrawerOpen , setIsDrawerOpen] = useState(false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const center = 'center';



    const showDrawHandler = ()=>{
         setIsDrawerOpen(true)
     };
    const hideDrawHandler = ()=>{
      setIsDrawerOpen(false);
    };
    return <Box sx={{  flexGrow: 1  }}>
        {/*boxShadow: '0.3em 0.3em 0.7em #00000015'*/}
          <AppBar sx={{ backgroundColor: 'white' }}   elevation={0} position="static">
              <Container>

              <Toolbar sx={{ display:'flex' }}>
                  <Link underline='none' component={RouterLink} to='/'>
                      <Typography  sx={{ color:'black' , fontSize:'26px' ,fontWeight:'800'     }}  >
                          ZIZZ
                      </Typography>
                  </Link>


                  { !matches ? (
                      <>
                       <CartIcon/>
                      <Divider sx={{height: 28, m: 0.5}} orientation="vertical" />

                      <Button  sx={{marginRight:'5px'}} component={RouterLink}  to='/login' size='small' variant='contained'>دخول</Button>
                      <Button sx={{marginRight:'5px'}} component={RouterLink}  to='/signup' size='small' variant='outlined'>التسجيل</Button>
                      </>
                      ): <MenuIcon onClick={showDrawHandler} sx={{ color:'black' , marginRight:'auto' , cursor:'pointer' , fontSize:'30px' }} />


                  }

              </Toolbar>
              </Container>
              <DrawerComp onOpenDrawer={ isDrawerOpen } onCloseDrawer={hideDrawHandler} />
          </AppBar>
      </Box>
}

export default Header