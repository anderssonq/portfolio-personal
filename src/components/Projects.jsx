import React, { Component } from 'react'
import M from 'materialize-css'
import imgsliderdg from '../images/projects/dg1.jpg'
import imgslider11 from '../images/projects/11.jpg'
import imgslider22 from '../images/projects/22.jpg'
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
                    <div className="caption left-align">
                    <h3>DG Giros & Remesas</h3>
                    <h5 className="light grey-text text-lighten-3">Aplicacion orientadas a remesas y cambios.</h5>
                    </div>
                </li>
                <li>
                    <img src={imgslider11}/> 
                    <div className="caption right-align">
                    <h3>Interbeverage</h3>
                    <h5 className="light grey-text text-lighten-3">Pagina Estatica Wordpress, en proyecto en colaboracion con Smarketing Japan.</h5>
                    </div>
                </li>
                <li>
                    <img src={imgslider22}/> 
                    <div className="caption center-align">
                    <h3>Uni-Glass</h3>
                    <h5 className="light grey-text text-lighten-3">Pagina Estatica Wordpress, en proyecto en colaboracion con Smarketing Japan.</h5>
                    </div>
                </li>

                </ul>
            </div>
      </div>
    )
  }
}
