import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouteIndex from './router/index'
import { Layout } from 'antd'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import './App.scss'

function App() {
  return (
      <div id="app">
         <Router>
          <Header />
          <main className="main">
            <RouteIndex/>
          </main>
          <Footer/>
      </Router>
      </div>
     
    
  )
}

export default App