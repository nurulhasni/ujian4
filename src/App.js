import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Main from './Components/Main'
import './App.css'
import './Components/Main.css'
import PageLoader from './Components/PageLoader'

class App extends Component {


state = {
  
  isLoading : true
}

componentDidMount() {
  setTimeout(() => { this.fetchData() }, 1200);
}

fetchData = ()=>{
  this.setState({isLoading : false})
}

  render() {
    return (
      <div>
       {this.state.isLoading ? (
         <div><PageLoader/></div>):
         (

          <div className="container">
            <Main/>
          <div class="main-menu" id="main-menu">
          <ul class="main-menu-list">
            <li><a><Link to="/home"> Home </Link></a></li>
            <li><a><Link to="/resume"> Resume </Link> </a></li>
            <li><a><Link to="/skills"> Skills </Link></a></li>
            <li><a><Link to="/portfolio"> Portfolio </Link></a></li>
            <li><a><Link to="/blog"> Blog </Link></a></li>
            <li><a> <Link to="/contact"> Contact </Link></a></li>
        </ul>
        
        </div>
        </div>
         )
       }
     
      </div>
    )
  }
}

export default App;