import React, { Component } from 'react'
import M from 'materialize-css'
import imgereq from '../images/college/_EREQ_22315843_.jpg'
import imgefppr from '../images/college/_FPPR_22315843_.jpg'
import imgcss from '../images/college/CSS_certificate.jpg'
import imghtml from '../images/college/HTML_certificate.jpg'
import imgjava from '../images/college/Java_certificate.jpg'
import imgjjquery from '../images/college/jQuery_certificate.jpg'
import imgphp from '../images/college/PHP_certificate.jpg'
import imgruby from '../images/college/Ruby_certificate.jpg'
import imgsql from '../images/college/SQL_certificate.jpg'
import imgangular from '../images/college/AngularCertificate.jpg'

export default class Recognition extends Component {
    constructor() {
        super();

        this.state = {
            recognition: [
                { cardTitle: 'Angular 7', info: 'Master Angular (Angular 2+, incl. Angular 7) and build awesome, reactive web apps with the successor of Angular.js.', imgSrc: imgangular },
                { cardTitle: 'Modelado de Requisitos', info: 'Curso orientado en el estudio de la ingenieria de requisitos para identificar e optimizar la documentacion de requerimientos de cualquier sistema informatico y asi elaborar software que solucione cualquier problema planteado de la mejor manera.', imgSrc: imgereq },
                { cardTitle: 'Formulacion y Planificacion de Proyecto', info: 'Curso orientado en la creacion, orientacion y seguimiento de proyectos de Software con el fin de llevar a cabo cualquier proyecto tomando en cuenta todas la variables que influyan en el para tener control del mismo y cumplir con el objetivo principal.', imgSrc: imgefppr },
                { cardTitle: 'CSS Fundamentals', info: 'Formacion Online de CSS3 actual para el modelado estetico y atractivo de paginas web aplicada al HTML5 Moderno.', imgSrc: imgcss },
                { cardTitle: 'HTML5 Fundamentals', info: 'Curso de HTML5 para la creacion adecuada de la estructura web.', imgSrc: imghtml },
                { cardTitle: 'Java Course', info: 'Curso de Java Core para tener nocion de la programacion java Web.', imgSrc: imgjava },
                { cardTitle: 'Query Course', info: 'Formacion de JQuery para la optimizacion de creacion de scripts js en paginas estaticas', imgSrc: imgjjquery },
                { cardTitle: 'PHP Tutorial', info: 'Formacion basica de PHP para la comprension de Backend Web.', imgSrc: imgphp },
                { cardTitle: 'Ruby Tutorial', info: 'Curso de basica de Ruby para la comprension del Backend On Rails.', imgSrc: imgruby },
                { cardTitle: 'SQL Fundamentals', info: 'Curso de SQL basico para tener nocion la correcta estructuracion de las bases de datos.', imgSrc: imgsql }]
        }
    }


    componentDidMount = () => {
        const options = {
            fullWidth: true,
            indicators: true
        }
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, options);
        });
    }

    render() {

        const cardStyle = {
            width: '250px',
            height: '350px'
        }

        const contentBards = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }

        const contentDivBards = {
            textAlign: 'center'
        }

        const imgStyle = {
            height: '180px'
        }
        return (
            <div style={contentDivBards}>
                <div style={contentBards}>
                    {this.state.recognition.map(recog => {
                        return (<div className="card" style={cardStyle} key={recog.cardTitle}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={recog.imgSrc} style={imgStyle} />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{recog.cardTitle} <i className="material-icons right">more_vert</i></span>
                                <p><a href={recog.imgSrc} target="_blank">Ver imagen</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{recog.cardTitle}<i className="material-icons right">close</i></span>
                                <p>{recog.info}</p>
                            </div>
                        </div>)
                    })}

                </div>
            </div>
        )
    }
}
