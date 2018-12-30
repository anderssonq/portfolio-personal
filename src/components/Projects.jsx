import React, { Component } from 'react'
import M from 'materialize-css'
import imgsliderdg from '../images/projects/dg.jpg'
export default class Projects extends Component {

    componentDidMount = () =>{

        document.addEventListener('DOMContentLoaded', function() {
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
                    <img src={imgsliderdg}/> 
                    <div className="caption center-align">
                    <h3>This is our big Tagline!</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="https://lorempixel.com/580/250/nature/2"/> 
                    <div className="caption left-align">
                    <h3>Left Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                <li>
                    <img src="https://lorempixel.com/580/250/nature/3"/> 
                    <div className="caption right-align">
                    <h3>Right Aligned Caption</h3>
                    <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                    </div>
                </li>
                </ul>
            </div>
      </div>
    )
  }
}
