import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Contact from './Components/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path ='/' element={<App/>}/>
      <Route path ='/contact' element={<Contact/>}/>
     </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
