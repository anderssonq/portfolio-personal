import React, { Component } from 'react'
import Typed from "typed.js";
import Particles from "react-particles-js";
import img from "../images/action-blur-close-up-735911.jpg";
import $ from 'jquery'


class Header extends Component {
  constructor(props) {
    super(props);

    this.goToA = this.goToA.bind(this);
  }


  componentDidMount = () => {
    const options = {
      strings: ["Front-End Developer.", "JavaScript Full Stack.", "UX-UI Designer"],
      typeSpeed: 50,
      backSpeed: 120,
      fadeOut: false,
      loop: true,
      loopCount: Infinity,
      backDelay: 700,
      showCursor: true
    };

    const type = new Typed(this.el, options);

  }

  goToA = (nameA) => {
    $(`a[href^="${nameA}"]`).click(function () {
      $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
      }, 500);
      return false;
    });
  }

  render() {

    const canvasConfig = {
      position: 'absolute',
      top: '0px',
      zIndex: '1'
    }

    const particlesOpt = {
      particles: {
        number: {
          value: 950,
          density: {
            enable: true,
            value_area: 6000
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: false,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 800,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 800,
            size: 80,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      }
    }


    const header = {
      background: ` url("${img}")`,
      height: '100vh',
      width: '100%',
      color: 'white',
      backgroundSize: 'cover'
    }

    const containerContent = {
      background: 'rgba(54, 69, 79, 0.45)',
      width: '100%',
      height: '100%',
      paddingTop: '20vh'
    }

    const footerHeader = {
      position: 'relative',
      bottom: '0px'
    }
    const listSocial = {
      display: 'flex',
      flexWrap: 'wrap',
      fontSize: '40px',
      justifyContent: 'space-evenly',
      marginTop: '100px'
    }


    return <div>
      <header style={header}>
        <div style={containerContent}>
          <div className="container container-title">
            <div className="animated fadeInDown introtitlepage">
              <h2>
              Hello, I am &nbsp;
                <span className="name">
                 Andersson Quintero
                </span>
              </h2>
              <h2>
              I am a <br/>
                 <span
                style={{ whiteSpace: 'pre' }}
                ref={(el) => { this.el = el; }}
                className="name"
              /></h2>

            </div>
            <div className="footer-header" style={footerHeader}>
              <ul style={listSocial} className="list-social">
                <li>
                  <a href="https://gitlab.com/anderssonq" target="_blank">
                    <i className="fab fa-gitlab" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/andersson-jos%C3%A9-quintero-luna-70753411b/"
                    target="_blank">
                    <i className="fab fa-linkedin" />
                  </a>
                </li> <li>
                  <a href="https://www.facebook.com/anderssondeveloper" target="_blank">
                    <i className="fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/anderssonsaysthat/" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/anderssonq" target="_blank">
                    <i className="fab fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Particles params={particlesOpt} style={canvasConfig} />
      </header>
    </div>;
  }
}

export default Header;
