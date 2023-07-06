import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/account/AccountProvider.jsx';
function App() {
  const clientId='56449955316-64hc9v7gn5gu42mgk731ci8hmscn0mms.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
       <Messenger/>
       </AccountProvider>
    </GoogleOAuthProvider>
   
  );
}

export default App;
