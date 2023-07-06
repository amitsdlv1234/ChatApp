
import { useState } from 'react'
import React from 'react'
import {MoreVert} from '@mui/icons-material'
import {Menu,MenuItem} from '@mui/material'
const HeaderMenu = ({setDrawer}) => {
    const[open , setOpen]=useState(null);
    const handleClose=()=>{
        setOpen(null);
    }
    const handleClick=(e)=>{
        setOpen(e.currentTarget);
    }
  return (
    <div>
      <MoreVert onClick={handleClick}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{vertical:'bottom',horizontal:'center'}}
        transformOrigin={{vertical:'top',horizontal:'right'}}
      >
        <MenuItem onClick={()=>{handleClose();setDrawer(true);}}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default HeaderMenu
