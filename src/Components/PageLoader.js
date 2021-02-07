import React, { Component } from 'react'
import './PageLoader.css'

export default class PageLoader extends Component {
    render() {
        return (
    <div className="loader-container" id="page-loader"> 
  <div className="loading-wrapper">
    <div className="loader-animation" id="loader-animation">
      <span className="loader"><span className="loader-inner" /></span>
    </div>    
    {/* Edit With Your Name */}
    <div className="loader-name" id="loader-name">
      Hasni <strong>N</strong>
    </div>
    {/* /Edit With Your Name */}
    {/* Edit With Your Job */}
    <p className="loader-job" id="loader-job">Web Designer &amp; Web Developer</p>
    {/* /Edit With Your Job */}
  </div>   
</div>

        )
    }
}
