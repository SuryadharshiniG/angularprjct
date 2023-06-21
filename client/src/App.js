import './App.css';
import Header from './components/layouts/Header';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';
import Routers from './components/routers';
import { Provider } from'react-redux';
import { BrowserRouter ,RouterProvider} from 'react-router-dom';
import {useState} from "react";
import store from './redux/store';
function App() {
  const[appData,setAppData] = useState({appName: 'Devconnectors' });
 return(
  <>
  <Provider store={store}>
    <BrowserRouter>
      <Header appName={appData.appName}></Header>
      <Routers></Routers>
      <Footer></Footer>
    </BrowserRouter>
  </Provider>
  
  
    </>
 )
 }
export default App; 
