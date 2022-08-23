import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css';
import Data from './components/data.json'

class App extends React.Component{
  render(){
    console.log(Data)

    return(
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
   )
  }
}

export default App;
