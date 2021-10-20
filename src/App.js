
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route path='/login' exact component={Login}/>
        <Route path='/' component={ChatRoom}/> 
      </Switch>
      </AuthProvider> 
    </BrowserRouter>
     
   
  );
}

export default App;
