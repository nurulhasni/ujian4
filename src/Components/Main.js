import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Blog from './Blog'
import Contact from './Contact'
import Home from './Home'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Skills from './Skills'



const Main = ()=>(
  
  <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
)

export default Main;