import React, { Component } from 'react'
import M from 'materialize-css'
import imgsliderdg from '../images/projects/dg1.jpg'
import imgdgpage from '../images/projects/dgpage.png'
import imgfinancial from '../images/projects/financial.png'
import imgfinancialpage from '../images/projects/financialpage.png'
import imgslideryeahthem from '../images/projects/yeahthemcover.jpg'
import imgyeahthempage from '../images/projects/yeahthempage.png'
import imgslider11 from '../images/projects/11.jpg'
import imgslider22 from '../images/projects/22.jpg'
export default class Projects extends Component {

    componentDidMount = () => {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, null);
        });
    }
    render() {
        return (
            <div>
                <div className="slider">
                    <ul className="slides">
                        <li>
                            <img src={imgfinancial} />
                            <div className="caption center-align">
                                <h3>Thalo Financial</h3>
                                <h5 className="light grey-text text-lighten-3">Web App for payments.</h5>
                                <a href={imgfinancialpage} target="_blank" className="btn btn-large waves-effect waves-teal btnStart">See this page</a>
                            </div>
                        </li>
                        <li>
                            <img src={imgsliderdg} />
                            <div className="caption center-align">
                                <h3>DG Giros & Remesas</h3>
                                <h5 className="light grey-text text-lighten-3">Web App for remittances and changes.</h5>
                                <a href={imgdgpage} target="_blank" className="btn btn-large waves-effect waves-teal btnStart">See this page</a>
                            </div>
                        </li>
                        <li>
                            <img src={imgslideryeahthem} />
                            <div className="caption right-align">
                                <h3>Yeah Them</h3>
                                <h5 className="light grey-text text-lighten-3">Web App for freelancers, It's like Patreon.</h5>
                                <a href={imgyeahthempage} target="_blank" className="btn btn-large waves-effect waves-teal btnStart">See this page</a>
                            </div>
                        </li>
                        <li>
                            <img src={imgslider11} />
                            <div className="caption left-align">
                                <h3>Interbeverage</h3>
                                <h5 className="light grey-text text-lighten-3">WordPress web page</h5>
                            </div>
                        </li>
                        <li>
                            <img src={imgslider22} />
                            <div className="caption right-align">
                                <h3>Uni-Glass</h3>
                                <h5 className="light grey-text text-lighten-3">WordPress web page.</h5>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
