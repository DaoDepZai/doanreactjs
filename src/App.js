import React from 'react';
import Home from './pages/Home';
import Header from './Components/ShareComponents/Header';
import Footer from './Components/ShareComponents/Footer';

function App() {
  return (

    <React.Fragment>
    <Header/>
    <Home></Home>
    <Footer/>
   </React.Fragment>
  )
}

export default App;
