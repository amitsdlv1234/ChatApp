import { useContext,useState } from 'react'

import {Box,styled} from '@mui/material';
import React from 'react'
import {Chat as MessageIcon} from '@mui/icons-material';

import {AccountContext} from '../../../components/account/AccountProvider';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component=styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center`;

const Wrapper=styled(Box)`margin-left:auto;
display:flex`;
const MessageStyled=styled(MessageIcon)`margin-right:30px;
`;

const Image=styled('img')({
  height:'40px',
  width:'40px',
  borderRadius:'50%'
})
const Header = () => {
  const[openDrawer,setDrawer]=useState(false);
  const {account}=useContext(AccountContext);
  const toggleDrawer=()=>{
    setDrawer(true);
  }
  return (
    <>
    <Component>
      <Image src={account.picture} alt='dp' onClick={()=>toggleDrawer()}/>
      <Wrapper>
        <MessageStyled/>
        <HeaderMenu setDrawer={setDrawer}/>
      </Wrapper>
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setDrawer}/>
    </>
  )
}

export default Header
