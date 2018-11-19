import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  withRouter,
  Switch,
  Route
} from "react-router-dom";
import $ from 'jquery'
import SkillBar from "react-skillbars";
import photodev from '../images/foto.jpg'


//componentes
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import RowHeader from '../components/RowHeader';
import Habilities from '../components/Habilities'
import Projects from '../components/Project'

class Home extends Component {
  constructor(){
    super();

    this.scrollToBottom=this.scrollToBottom.bind(this);
  }



  scrollToBottom = () => {
    $(document).scroll(function() {
        if( $(this).scrollTop() >= 900 ) {
            $('.colizqpi').addClass('slideInLeft').css("opacity","1"); 
            $('.colderepi').addClass('slideInRight').css("opacity","1");                 
        } 
    });
  }
  
  componentDidMount() {
    this.scrollToBottom();
  }
  
  componentDidUpdate() {
    this.scrollToBottom();
  }


  render() {

    const rowStyle={
      paddingTop:'10px'
    }

   

    const  skills = [
      { type: "Html5", level: 85 },
      { type: "Css3", level: 75 },
      { type: "JavaScript", level: 75 },
      { type: "React", level: 65 },
      { type: "Node.js", level: 60 },
      { type: "UI Design", level: 70 },
      { type: "Photoshop", level: 65 },
      { type: "Wordpress", level: 75 },
      { type: "UX Design", level: 65 }
    ];

    const colors = {
      bar: '#00E5FF',
      title: {
        text: '#fff',
        background: '#00B8D4'
      }
    }

   
    const devInfoP={
      textAlign:'center'
    }

    const devInfoTitle={
      textAlign: 'center',
      fontSize:'20px',
      fontWeight:'bold'
    }

    const rowBg={
      background: '#F5F5F5'
    }

   const photoconfig={
     width:'60%',
     display:'block',
     textAlign:'center',
     margin:'auto',
     borderRadius:'20px'
   }

   const configColPI={
    opacity:0
   }
    return <div>
        <Header />
        <Navbar />
        <Habilities />

        <div className="container">
          <div className="row" style={rowStyle}>
            <RowHeader title={'ACERCA'} />
            <div className="col l6 colizqpi animated" style={configColPI}>
              <div className="container-developer-info">
                  <img class="z-depth-3" style={photoconfig} src={photodev} alt=""/>
                  <h4 style={devInfoTitle}>¿Quién es ésta persona?</h4>
                  <p style={devInfoP}>Soy un programador creativo, es por eso que me especializo en el Diseño atráctico de las páginas web, Soy de Barquisimeto-Venezuela,tengo 3 años como Web Developer y me encanta los retos, ¡Hagamos algo especial!</p>
              </div>
            </div>
            <div className="col l6 colderepi animated" style={configColPI}>
              <SkillBar skills={skills} colors={colors} />
            </div>
          </div>

        </div>
      <div className="container-bg" style={rowBg}>
        <div className="container">
          <div className="row" style={rowStyle}>
           <RowHeader title={'PROYECTOS'}/>
           <Projects/>
        </div>    
        </div>
      </div>
      </div>;
  }
}

export default Home;
