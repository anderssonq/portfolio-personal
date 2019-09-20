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
import { FormattedMessage } from 'react-intl';

class Home extends Component {
  constructor() {
    super();
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom = () => {
    $(document).scroll(function () {
      if ($(this).scrollTop() >= 900) {
        $('.colizqpi').addClass('slideInLeft').css("opacity", "1");
        $('.colderepi').addClass('slideInRight').css("opacity", "1");
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
    const rowStyle = {
      paddingTop: '10px'
    }

    const skills = [
      { type: "Html5", level: 95 },
      { type: "Css3", level: 85 },
      { type: "Angular 7", level: 85 },
      { type: "VueJs", level: 90 },
      { type: "JavaScript", level: 75 },
      { type: "Wordpress", level: 75 },
      { type: "UI Design", level: 70 },
      { type: "React", level: 65 },
      { type: "Photoshop", level: 65 },
      { type: "UX Design", level: 65 },
      { type: "Node.js", level: 60 },
    ];

    const colors = {
      bar: '#00E5FF',
      title: {
        text: '#fff',
        background: '#00B8D4'
      }
    }

    const devInfoP = {
      textAlign: 'center'
    }

    const devInfoTitle = {
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 'bold'
    }

    const rowBg = {
      background: '#F5F5F5',
      marginBottom: '-20px'
    }

    const rowFooterBg = {
      background: 'rgb(27, 36, 47)',
      marginBottom: '-100px',
      color: 'white'
    }

    const photoconfig = {
      width: '80%',
      display: 'block',
      textAlign: 'center',
      margin: 'auto',
      borderRadius: '20px'
    }

    const configColPI = {
      opacity: 0
    }
    return <div>
      <Header />
      <a name="inicio"></a>
      <Navbar />
      <Habilities />

      <a name="About"></a>
      <div className="container">
        <div className="row" style={rowStyle}>
          <RowHeader title={'ABOUT ME'} />
          <div className="col l6 colizqpi animated" style={configColPI}>
            <div className="container-developer-info">
              <img className="z-depth-3" style={photoconfig} src={photocasual} alt={photocasual} />
              <h4 style={devInfoTitle}>Who is this guy?</h4>
              <p style={devInfoP}>I am a creative programmer, so I specialize in the design appeal of web pages. I am from Barquisimeto,Venezuela, I am doing this about 5 years ago. I have participated in 24 international projects such as Web Designer, I love the challenges, <br/> Let's do something special!</p>
            </div>
          </div>
          <div className="col l6 colderepi animated" style={configColPI}>
            <SkillBar skills={skills} colors={colors} />
          </div>
        </div>
      </div>
      <a name="Projects"></a>

      <div className="container">
        <div className="row" style={rowStyle}>
          <RowHeader title={'TOP PROYECTS'} />
          <Projects />
        </div>
      </div>


      <div className="container-bg" style={rowBg}>
        <div className="container">
          <div className="row" style={rowStyle}>
            <a name="Recognition"></a>
            <RowHeader title={'ACHIEVEMENTS'} />
            <Recognition />
          </div>
        </div>
      </div>

      <Divider1 />
      <div className="contactZone" style={rowFooterBg}>
        <a name="Contact"></a>
        <br />
        <RowHeader title={'PONGAMONOS EN CONTACTO'} />
        <Contact />
      </div>

      <Footer />

    </div>
  }
}

export default Home;
