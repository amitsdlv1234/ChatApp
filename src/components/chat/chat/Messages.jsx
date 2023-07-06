import { useState ,useEffect} from 'react';
import { useContext } from 'react';
import React from 'react';
import {Box,styled} from '@mui/material';
import Footer from './Footer';
import Message from './Message';
import { AccountContext } from '../../account/AccountProvider';
import {getMessage, newMessage} from '../../../service/api';

const Wrapper =styled(Box)`
  background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
  background-size:50%;`;

  const Component=styled(Box)`
  height:75vh;
  overflow-y:scroll;`;

  const Container = styled(Box)`
    padding: 1px 80px;
`;

const Messages = ({person,conversation}) => {

  const[value ,setValue]=useState('');
  
  const[messages,setMessages]=useState([]);
  
  const[file,setFile]=useState();
  const[image,setImage]=useState('');
  const[incomingMessage,setIncomingMessage]=useState(null);

             // const scrollRef=useRef();

  const {account,socket,newMessageFlag,setNewMessageFlag}=useContext(AccountContext);

  useEffect(()=>{
   socket.current.on('getMessage',data=>{
   setIncomingMessage({
      ...data,
      createdAt:Date.now()
   })
   })
  },[])

useEffect(()=>{
  const getMessageDetails=async()=>{
    let data=await getMessage(conversation._id);
    // console.log(data);
    setMessages(data);
  }
  conversation._id&&getMessageDetails();
},[person._id,conversation._id,newMessageFlag])

    // useEffect(()=>{
    //  scrollRef.current?.scrollIntoView({transition:'smooth'})
    //  },[messages]);                                 //////////// for scrolling down side

    useEffect(()=>{
     incomingMessage&&conversation?.members?.includes(incomingMessage.senderId)&&
     setMessages(prev=>[...prev,incomingMessage])
    },[incomingMessage,conversation])


  const sendText=async()=>{
    // console.log('Hello amit')
    // const code =e.keyCode || e.which;
    // if(code===13){
      let message={};
      if(!file){
         message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:'text',
          text:value
      }
      }
      else{
         message={
          senderId:account.sub,
          receiverId:person.sub,
          conversationId:conversation._id,
          type:'file',
          text:image
      }
      }

      socket.current.emit('sendMessage',message);
      
    // console.log(message);
     await newMessage(message);
     setValue('');
     setFile('');
     setImage('');
     setNewMessageFlag(prev=>!prev)
    // }
   
  }
  return (
    <Wrapper>
       <Component>
       {
        messages&&messages.map(message=>(
          <Container>
         <Message message={message}/>
         </Container>
        ))
       }
       </Component>
       <Footer sendText={sendText}
       setValue={setValue}
       value={value} 
       file={file}
       setFile={setFile}
       setImage={setImage}/>
      

    </Wrapper>
  )

}

export default Messages
