import React, { Component } from 'react'
import $ from 'jquery'
import SkillBar from "react-skillbars";
import photodev from '../images/foto.jpg'
import photocasual from '../images/this.jpg'
import M from 'materialize-css'


//componentes
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import RowHeader from '../components/RowHeader';
import Habilities from '../components/Habilities'
import Recognition from '../components/Recognition'
import Footer from '../components/Footer'
import Projects from '../components/Projects';
import { Contact } from '../components/Contact';
import Divider1 from '../components/Divider1'

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
      { type: "React", level: 75 },
      { type: "Angular", level: 65 },
      { type: "Vue Js", level: 45 },
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
      background: '#F5F5F5',
      marginBottom:'-20px'
    }

    const rowFooterBg={
      background: 'rgb(27, 36, 47)',
      marginBottom:'-100px',
      color:'white'
    }

   const photoconfig={
     width:'80%',
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
        <a name="inicio"></a>
        <Habilities />

        <div className="container">
          <div className="row" style={rowStyle}>
            <a name="About"></a>
            <RowHeader title={'ACERCA'} />
            <div className="col l6 colizqpi animated" style={configColPI}>
              <div className="container-developer-info">
                  <img className="z-depth-3" style={photoconfig} src={photocasual} alt={photocasual}/>
                  <h4 style={devInfoTitle}>¿Quién es ésta persona?</h4>
                  <p style={devInfoP}>Soy un programador creativo, es por eso que me especializo en el Diseño atráctico de páginas web. <br/> Soy de Barquisimeto-Venezuela, tengo 5 años como Desarrollador Web y me encanta los retos, <br/> ¡Hagamos algo especial!</p>
              </div>
            </div>
            <div className="col l6 colderepi animated" style={configColPI}>
              <SkillBar skills={skills} colors={colors} />
            </div>
          </div>

        </div>

        <div className="container">
          <div className="row" style={rowStyle}>
            <a name="Projects"></a>
            <RowHeader title={'PROYECTO REALIZADOS'}/>
            <Projects/>
          </div>
        </div>


      <div className="container-bg" style={rowBg}>
        <div className="container">
          <div className="row" style={rowStyle}>
           <a name="Recognition"></a>
           <RowHeader title={'RECONOCIMIENTOS'}/>
           <Recognition/>
          </div>    
        </div>    
      </div>

      <Divider1/>
      <div className="contactZone"  style={rowFooterBg}>
            <a name="Contact"></a>
      <br/>
            <RowHeader title={'PONGAMONOS EN CONTACTO'}/>
              <Contact/>
      </div>

      <Footer/>
 
      </div>
  }
}

export default Home;
