

import React from 'react'
import { Drawer, Typography,Box,styled } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import Profile from './Profile';

const Header=styled(Box)`
background:#008969;
height:107px;
color:#FFFFFF;
display:flex;
& > svg , & > p {
    margin-top:auto;
    padding:19px;
    font-weight:700;
}`;
const drawerStyled={
    left:20,
    top:27,
    height:'95%',
    width:'30%',
    boxShadow:'none'
}
const Component=styled(Box)`
background:#ededed;
hieght:85%`;
const InfoDrawer = ({open,setOpen}) => {
    const handleClose=()=>{
        setOpen(false);
    }
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{sx:drawerStyled}}
      style={{zIndex:1500}}
    >
      <Header>
          <ArrowBack onClick={()=>setOpen(false)}/>
          <Typography>Profile</Typography>
      </Header>
      <Component>
       <Profile/>
      </Component>
    </Drawer>
  )
}

export default InfoDrawer
