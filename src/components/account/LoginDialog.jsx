import { useContext } from 'react';

import { Dialog,Box, Typography, List, ListItem,styled} from '@mui/material';
import React from 'react';
import {addUser} from '../../service/api';
import { AccountContext } from './AccountProvider';
import { qrCodeImage } from '../../constant/data';
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Component=styled(Box)`
display:flex;
`;
const Container=styled(Box)`
padding:56px 0 56px 56px;
`;
const Title=styled(Typography)`
font-size:26px`;
const QRCode =styled('img')({
    height:264,
    width:264,
    margin:'50px 0 0 50px'
})
const StyledList=styled(List)`
&> li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
}`
const dialogStyled={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeigth:'100%',
    boxShadow:'none',
    overflow:'hidden'
}
const LoginDialog = () => {

   const {setAccount} = useContext(AccountContext);
    const onLoginSuccess=(res)=>{
      const decoded=jwt_decode(res.credential);
      setAccount(decoded);
      addUser(decoded);
    }
    const onLoginError =(res)=>{
    console.log('Login Fail',res);
    }
  return (
    <Dialog open={true} PaperProps={{sx:dialogStyled}} hideBackdrop={true} >
      
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap menu settings and select WhatsApp web</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
          </StyledList>
        </Container>
        <Box style={{position:'relative' }}>
         < QRCode  src={qrCodeImage} alt='QR code'></ QRCode >
         <Box style={{position:'absolute', top:'50%',transform:'translateX(25%)'}}>
            <GoogleLogin 
              onSuccess={onLoginSuccess}
              onError={onLoginError}
            />
        </Box>
        </Box>
      </Component>

    </Dialog>
  )
}

export default LoginDialog
