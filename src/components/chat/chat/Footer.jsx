

import { useEffect} from 'react';
import { Box, InputBase,styled } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { AttachFile,Mic } from '@mui/icons-material';
import { uploadFile } from '../../../service/api';

const Container=styled(Box)`
 height:55px;
 background:#ededed;
 width:100%;
 display:flex;
 align-items:center;
 padding:0 15px;
 &>*{
    margin:5px;
    color:#919191;
 }`;
 const Search=styled(Box)`
 background-color:#FFFFFF;
 border-radius:10px;
 width:85%;`;
const InputField=styled(InputBase)`
width:100%;
padding:20px;
height:20px;
padding-left:25px;
font-size:14px;`;
const Clip=styled(AttachFile)`
transform:rotate(40deg);
`;
const Footer = ({sendText,setValue,value,file,setFile,setImage}) => {
 
 useEffect(()=>{
     const getImage=async()=>{
      if(file){
    const data=new FormData();
    data.append('name',file.name);
    data.append('file',file);
    
        let response=await uploadFile(data);
        setImage(response.data);
      }
     }
     getImage();
 },[file])

  const onfileChange=(e)=>{
    // console.log(e);
       setFile(e.target.files[0]);
       setValue(e.target.files[0].name);
  }

  return (
    <Container>
      <EmojiEmotionsOutlinedIcon/>
      <label htmlFor='fileInput'>
      <Clip/>
      </label>
      <input
      type='file'
      id='fileInput'
      style={{display:'none'}}
      onChange={(e)=>onfileChange(e)}/>
      
      <Search>
        <InputField 
        placeholder='Type a message'
        onChange={(e)=>setValue(e.target.value)}
        // onKeyPress={(e)=>sendText(e)}
        value={value}
        />
      </Search>
      <SendIcon onClick={()=>sendText()}/>
      <Mic/>
    </Container>
  )
}

export default Footer
