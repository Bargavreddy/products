import React, { Component } from 'react';
import './App.css';
import ProdutList from './components/produts/product-list'
import BusList from './components/buses/buses-list'
import BikeList from './components/bikes/bile-list'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <div className="ui secondary  menu">
            <Link to="/" className="active item" >
              Produt
                </Link>
            <Link to="/buses" className="item">
              buses
                  </Link>
            <Link to="/Bikes" className="item">
              Bikes
              </Link>
          </div>
        
            <Route exact path='/' component={ProdutList} />
            <Route path='/buses' component={BusList} />
            <Route path='/Bikes' component={BikeList} />
       

        </div>
      </Router>
    );
  }
}

export default App;
