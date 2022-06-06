import {Button, Drawer, Link, List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CartIcon from "./CartIcon";
import {useState} from "react";

const DrawerComp = ({onOpenDrawer , onCloseDrawer})=>{

    return <>
      <Drawer open={onOpenDrawer} onClose={onCloseDrawer} anchor={"right"} sx={{ borderRadius:'30px'}}>
          <List sx={{ width:'50vh' }}>
              <Link href='#' underline='none' >
                  <Typography textAlign='center' sx={{ fontWeight:900 , marginBottom:'20px' , color:'black'}} p={2}>
                      الرئيسية
                  </Typography>
              </Link>


              <ListItemButton  >
                  <ListItemIcon sx={{ display:'flex' , justifyContent:'end' , alignItems:'center', padding:'8px' }}>
                      <LoginIcon sx={{ marginLeft:'15px' }} />
                      <ListItemText>
                          الدخول
                      </ListItemText>
                  </ListItemIcon>
              </ListItemButton>
              <ListItemButton  >
                  <ListItemIcon sx={{ display:'flex' , justifyContent:'center' , alignItems:'center', padding:'8px' }}>
                      <PersonAddIcon sx={{ marginLeft:'15px' }} />
                      <ListItemText>
                          التسجيل
                      </ListItemText>
                  </ListItemIcon>
              </ListItemButton>
              <ListItemButton  >
                  <ListItemIcon sx={{ display:'flex' , justifyContent:'center' , alignItems:'center', padding:'8px' }}>
                      <CartIcon />
                  </ListItemIcon>
              </ListItemButton>
          </List>
      </Drawer>
  </>
};

export default DrawerComp;