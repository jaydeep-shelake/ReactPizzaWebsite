import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Components/Hero/index';
import Product from './Components/Products/index';
import { GlobalStyle } from './globalStyles';
import {productData,featuredData} from './Components/Products/data';
import Feature from './Components/Fetured/index';
import Footer from './Components/Footer/index'
class App extends Component{
  render(){
    return (
      <Router>
        <GlobalStyle/>
         <Hero/>
         <Product heading="Choose your favorite" Data={productData}/>
         <Feature/>
         <Product heading="Sweet for You" Data={featuredData}/>
         <Footer/>
      </Router>
    );
}
}

export default App;
