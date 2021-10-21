
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import AuthProvider from './context/AuthProvider';
import AppProvider from './context/AppProvider';
import InviteMemberModal from './components/Modals/InviteMemberModal';
import AddRoomModal from './components/Modals/AddRoomModal';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <AppProvider>
      <Switch>
        <Route path='/login' exact component={Login}/>
        <Route path='/' component={ChatRoom}/> 
      </Switch>
      <AddRoomModal/>
      <InviteMemberModal/>
      </AppProvider>
      </AuthProvider> 
    </BrowserRouter>
     
   
  );
}

export default App;
