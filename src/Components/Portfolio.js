import React, { Component } from 'react'
import '../App.css'
import p1 from './img/portfolio/p1.jpg'
import p2 from './img/portfolio/p2.jpg'
import p3 from './img/portfolio/p3.jpg'
import p4 from './img/portfolio/p4.jpg'
import p5 from './img/portfolio/p5.jpg'
import p6 from './img/portfolio/p6.jpg'
import p7 from './img/portfolio/p7.jpg'
import p8 from './img/portfolio/p8.jpg'
import p9 from './img/portfolio/p9.jpg'

import bg1 from './img/portfolio/thumb-p1.jpg'
import bg2 from './img/portfolio/thumb-p2.jpg'
import bg3 from './img/portfolio/thumb-p3.jpg'
import bg4 from './img/portfolio/thumb-p4.jpg'
import bg5 from './img/portfolio/thumb-p5.jpg'
import bg6 from './img/portfolio/thumb-p6.jpg'
import bg7 from './img/portfolio/thumb-p7.jpg'
import bg8 from './img/portfolio/thumb-p8.jpg'
import bg9 from './img/portfolio/thumb-p9.jpg'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="section-vcardbody section-home" id="page-portfolio">
                    <div className="section-portfolio">
                        {/* Section title */}
                        <h2 className="section-title">Portfolio</h2>
                        {/* /Section title */}
                        {/* Projects list */}
                        <div className="projects-list">
                            {/* item */}
                            <div className="project-item">
                                {/* ==> Put your thumbnail as a background */}
                                <a href={p1} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: `url(${bg1})` }}>
                                    {/* project-description */}
                                    <div className="project-description-wrapper">
                                        <div className="project-description">
                                            {/* project name */}
                                            <h2 className="project-title">Project Title</h2>
                                            {/* /project name */}
                                            <span className="see-more">Project Tags</span>
                                        </div>
                                    </div>
                                    {/* /project-description */}
                                </a>
                            </div>
                            {/* /item */}
                            {/* item */}
                            <div className="project-item">
                                {/* ==> Put your thumbnail as a background */}
                                <a href={p2} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: `url(${bg2})` }}>
                                    {/* project-description */}
                                    <div className="project-description-wrapper">
                                        <div className="project-description">
                                            {/* project name */}
                                            <h2 className="project-title">Project Title</h2>
                                            {/* /project name */}
                                            <span className="see-more">Project Tags</span>
                                        </div>
                                    </div>
                                    {/* /project-description */}
                                </a>
                            </div>
                            {/* /item */}
                            {/* item */}
                            <div className="project-item">
                                {/* ==> Put your thumbnail as a background */}
                                <a href={p3} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: `url(${bg3})` }}>
                                    {/* project-description */}
                                    <div className="project-description-wrapper">
                                        <div className="project-description">
                                            {/* project name */}
                                            <h2 className="project-title">Project Title</h2>
                                            {/* /project name */}
                                            <span className="see-more">Project Tags</span>
                                        </div>
                                    </div>
                                    {/* /project-description */}
                                </a>
                            </div>
                            {/* /item */}
                            {/* item */}
                            <div className="project-item">
                                {/* ==> Put your thumbnail as a background */}
                                <a href={p4} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: `url(${bg4})` }}>
                                    {/* project-description */}
                                    <div className="project-description-wrapper">
                                        <div className="project-description">
                                            {/* project name */}
                                            <h2 className="project-title">Project Title</h2>
                                            {/* /project name */}
                                            <span className="see-more">Project Tags</span>
                                        </div>
                                    </div>
                                    {/* /project-description */}
                                </a>
                            </div>
                            {/* /item */}
                            {/* item */}
                            <div className="project-item">
                                {/* ==> Put your thumbnail as a background */}
                                <a href={p5} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: `url(${bg5})` }}>
                                    {/* project-description */}
                                    <div className="project-description-wrapper">
                                        <div className="project-description">
                                            {/* project name */}
                                            <h2 className="project-title">Project Title</h2>
                                            {/* /project name */}
                                            <span className="see-more">Project Tags</span>
                                        </div>
                                    </div>
                                    {/* /project-description */}
                                </a>
                            </div>
                            {/* /item */}
                            {/* item */}
                            <div className="project-item">
                                {/* ==> Put your thumbnail as a background */}
                                <a href={p6} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: `url(${bg6})` }}>
                                    {/* project-description */}
                                    <div className="project-description-wrapper">
                                        <div className="project-description">
                                            {/* project name */}
                                            <h2 className="project-title">Project Title</h2>
                                            {/* /project name */}
                                            <span className="see-more">Project Tags</span>
                                        </div>
                                    </div>
                                    {/* /project-description */}
                                </a>
                            </div>
                            {/* /item */}
                            {/* item */}
                            <div className="project-item">
                                {/* ==> Put your thumbnail as a background */}
                                <a href={p7} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: `url(${bg7})` }}>
                                    {/* project-description */}
                                    <div className="project-description-wrapper">
                                        <div className="project-description">
                                            {/* project name */}
                                            <h2 className="project-title">Project Title</h2>
                                            {/* /project name */}
                                            <span className="see-more">Project Tags</span>
                                        </div>
                                    </div>
                                    {/* /project-description */}
                                </a>
                            </div>
                            {/* /item */}
                            {/* item */}
                            <div className="project-item">
                                {/* ==> Put your thumbnail as a background */}
                                <a href={p8} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: `url(${bg8})` }}>
                                    {/* project-description */}
                                    <div className="project-description-wrapper">
                                        <div className="project-description">
                                            {/* project name */}
                                            <h2 className="project-title">Project Title</h2>
                                            {/* /project name */}
                                            <span className="see-more">Project Tags</span>
                                        </div>
                                    </div>
                                    {/* /project-description */}
                                </a>
                            </div>
                            {/* /item */}
                            {/* item */}
                            <div className="project-item">
                                {/* ==> Put your thumbnail as a background */}
                                <a href={p9} className="project-thumbnail nivobox" data-lightbox-gallery="portfolio" style={{ backgroundImage: `url(${bg9})` }}>
                                    {/* project-description */}
                                    <div className="project-description-wrapper">
                                        <div className="project-description">
                                            {/* project name */}
                                            <h2 className="project-title">Project Title</h2>
                                            {/* /project name */}
                                            <span className="see-more">Project Tags</span>
                                        </div>
                                    </div>
                                    {/* /project-description */}
                                </a>
                            </div>
                            {/* /item */}
                        </div>
                        {/* /projects list */}
                    </div></div>


            </div>			
        )
    }
}
