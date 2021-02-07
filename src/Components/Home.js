import React, { Component } from 'react'
import '../App.css'
import prof2 from './img/profile2.jpg'
import prof from './img/profile.jpg'

class Home extends Component {
    render() {
        return (
                <section>
                <div className="container">
                 <div className="section-vcardbody section-home" id="section-home">

                <div className="vcard-profile-pic">
                    <img src={prof2} id="profile2" alt />
                    <img src={prof} id="profile1" className="profileActive" alt />
                </div>

                <div className="vcard-profile-description">

                    <h1 className="profile-title">Hi, i'm <span className="color1">Nurul Hasni!</span></h1>
                    <h2 className="profile-subtitle">Web Designer &amp; Developer</h2>

                    <hr className="hr1" />
                    <div className="vcard-profile-description-text">
                        <p>Founder of DotRex. Professional UI/UX designer and web developer based on London. Sometimes works as a freelancer.</p>
                    </div>

                    <div className="vcard-profile-description-feature">

                        <div className="vcard-profile-description-ft-item">
                            <p>email:  john@dotrex.co / phone +123 456 789 111</p>
                        </div>

                    </div>

                </div>

                <div className="vcard-footer">

                    <div className="footer-social-icons">
                        <a href="#"><i className="fa fa-instagram" /></a>
                        <a href="#"><i className="fa fa-facebook" /></a>
                        <a href="#"><i className="fa fa-twitter" /></a>
                        <a href="#"><i className="fa fa-linkedin" /></a>
                        <a href="#"><i className="fa fa-youtube" /></a>
                    </div>

                </div>
            </div>
            </div>
            </section>

        )
    }
}

export default Home;