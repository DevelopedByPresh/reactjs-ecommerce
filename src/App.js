import React,{Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList  from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from "./components/Modal";
import Orders from "./components/Orders";
import Order from "./components/Order";
import Footer from "./components/Footer"
import CartTotals from "./components/Cart/CartTotals"


class App extends Component {
render() {
  return (
    <React.Fragment>
     
      <Navbar/>

      <Switch>
      <Route  exact path ="/" component = {ProductList}/>
      <Route path ="/details" component = {Details}/>
      <Route path ="/cart" component = {Cart}/>
      <Route path ="/orders" component = {Orders} />
      <Route path ="/order" component = {Order} />
      <Route component = {Default}/>
      <Route path="/cartTotals"  component = {CartTotals} />
      <Route path="/footer" component = {Footer}/>
     
     
      
      </Switch>
      <Modal/>
 
    </React.Fragment>
  );
}
}

export default App;
