import React, { Component } from 'react'
import imgRapidez from '../images/funcionamiento.png'
import imgCreativo from '../images/creatividad.png'
import imgTeam from '../images/equipo.png'
import imgDev from '../images/codificacion.png'
import $ from 'jquery'


export default class Habilities extends Component {

    constructor(){
        super();
         this.state={
            habilities:[{title:'Rapidez',desc:'Siempre responsable en mis proyectos para una entrega de calidad y a tiempo.',imgSrc:imgRapidez},
            {title:'Creativo',desc:'Haciendo uso de mis habilidades graficas para crear una entrega creativa y unica.',imgSrc:imgCreativo},{title:'Nunca solo',desc:'Ante cualquier proyecto, tengo a la banguardia un grupo de colegas confiables para cualquier meta.',imgSrc:imgTeam},{title:'Debugger Humano',desc:'Perseverante con muchas ganas para resolver problemas, encontrando una optima solucion.',imgSrc:imgDev}]
         }
         this.scrollToBottom=this.scrollToBottom.bind(this);
    }

    scrollToBottom = () => {
        $(document).scroll(function() {
            if( $(this).scrollTop() >= 400 ) {
                $('.conthabilities').addClass('fadeInLeft').css("opacity","1");               
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
    const containerHabilities={
      display:'flex',
      flexWrap:'wrap',
      marginTop:'100px',
      justifyContent:'space-between',
      opacity:0
    }

    const childBox={
     width:'150px',
     textAlign:'center'
    }

    const circleHab={
      background: '#5c258d', 
      background: '-webkit-linear-gradient(to right, #5c258d, #4389a2)',
      background: 'linear-gradient(to right, #5c258d, #4389a2)',
      borderRadius:'50%',
      width:'150px',
      height:'150px',
      margin:'auto',
      fontSize:'16px'
    }

    const circleTitle={
        fontSize:'20px'
    }

    const imgConfigCircle={
      width:'100%'
    }

    return (
        <div className="animated conthabilities container" style={containerHabilities}>          
          {
              this.state.habilities.map(habList =>{
              return(
                  <div style={childBox}>
                    <div style={circleHab} className='z-depth-2'>
                    <img style={imgConfigCircle} src={habList.imgSrc} alt=""/>
                  </div>
                    <h4 style={circleTitle}>{habList.title}</h4>
                    <p>{habList.desc}</p>
                 </div>)})
          }       
        </div>
    )
  }
}
