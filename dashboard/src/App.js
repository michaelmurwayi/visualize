import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


// import HomePage  from "./components/HomePage";
import Site from "./components/Site/site"


class App extends React.Component{
    render(){
      return(
        <div>
          <BrowserRouter>
            <Routes>
              {/* <Route exact path='/' Component={Home}/> */}
              <Route exact path='site' Component={Site}/>
            </Routes>
          </BrowserRouter>
        </div>
      )
    }
  }

  
export default App;