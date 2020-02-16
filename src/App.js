import React from 'react';
import RouteIndex from './router/index'
import Header from './component/header/header'
import Footer from './component/footer/footer'
import './App.scss'



function App() {
  return (
      <div id="app">       
          <Header />
          <main className="main">
            <RouteIndex/>
          </main>
          <Footer/>
      </div>
  )
}

export default App