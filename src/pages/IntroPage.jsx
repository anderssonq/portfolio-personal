import React, { Component } from 'react'
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import video from "../media/IntroVideo.mp4";
import {
  Link
} from 'react-router-dom';

class IntroPage extends Component {

  render() {


    const videoStyle={
        width: "100%",
        minWidth: "100%",
        minHeight: "100%",
        position: "fixed",
        right: "0px",
        bottom: "0px",
        cursor:"none"
    }
    const bodyVideo={
        width:'100%',
        height:'100%',
        zIndex:2,
        position:'fixed',
        color:'white'
    }

    const introStyle = { width: "100%", height: "100%", background: "black" };
    return <div style={introStyle}>
        <div className=" container-video" style={bodyVideo}>
          <div className="row rowintropage">
            <div className="col l12">
              <div className="container-conter-intro">
              <h2>
                {" "}
                {"<"}
                Andersson Quintero
                {"/>"}
              </h2>
              <h1>
                FRONT-END <b> DEVELOPER</b>
              </h1>
              <h2>¿Qué idioma hablas?</h2>

              <div className="language-box">
                <h4>
                  {" "}
                  <Link to="/es" >Entrar a la Web</Link>
                </h4>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="triangle-container">
          <svg height="500" width="500">
            <polygon points="250,60 100,400 400,400" className="triangle" />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        
        <Video style={videoStyle} autoPlay loop muted  onCanPlayThrough={e => {
            e.preventDefault();
          }}>
          <source src={video} type="video/mp4" />
        </Video>
      </div>;
  }
}

export default IntroPage;
