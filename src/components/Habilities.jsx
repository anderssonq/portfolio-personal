import React, { Component } from 'react'
import imgRapidez from '../images/funcionamiento.png'
import imgCreativo from '../images/creatividad.png'
import imgTeam from '../images/equipo.png'
import imgDev from '../images/codificacion.png'
import $ from 'jquery'
import { FormattedMessage,formatMessage } from 'react-intl';
import {injectIntl} from 'react-intl';



export default class Habilities extends Component {

  constructor(props) {
    super(props);
    this.state = {
      habilities: [
        { title: 'Speed', desc: 'Always responsible for my projects for delivery of quality and time.', imgSrc: imgRapidez },
        { title: 'Creative', desc: 'Making use of my graphics skills to create a creative and unique delivery.', imgSrc: imgCreativo }, { title: 'Full Stack', desc: 'Before any project, I have the necessary skills to meet the target that I propose.', imgSrc: imgTeam }, { title: 'Debugger Human', desc: 'Persevering eager to solve problems, finding an optimal solution.', imgSrc: imgDev }]
    }
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom = () => {
    $(document).scroll(function () {
      if ($(this).scrollTop() >= 400) {
        $('.conthabilities').addClass('fadeInLeft').css("opacity", "1");
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
    const containerHabilities = {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '100px',
      justifyContent: 'space-between',
      opacity: 0
    }

    const childBox = {
      width: '150px',
      textAlign: 'center',
    }

    const circleHab = {
      background: '#5c258d',
      background: '-webkit-linear-gradient(to right, #5c258d, #4389a2)',
      background: 'linear-gradient(to right, #5c258d, #4389a2)',
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      margin: 'auto',
      fontSize: '16px',
    }

    const circleTitle = {
      fontSize: '20px'
    }

    const imgConfigCircle = {
      width: '100%'
    }

    return (
      <div className="animated conthabilities container" style={containerHabilities}>
        {
          this.state.habilities.map(habList => {
            return (
              <div className='boxItemHabilities' style={childBox} key={habList.title}>
                <div style={circleHab} className='z-depth-2'>
                  <img style={imgConfigCircle} className='imgCircleHab' src={habList.imgSrc} alt="" />
                </div>
                <h4 style={circleTitle} >{habList.title}</h4>
                <p>{habList.desc}</p>
              </div>)
          })
        }
      </div>
    )
  }
}
