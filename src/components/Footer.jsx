import React from 'react'
import '../assets/footerdistadress.css'

const Footer = () => {
  return (
    <div>
      <div className="row">
       
      <footer className="footer-distributed">

        <div className="footer-left">
            <h3>Andersson <span>Quintero</span></h3>
            <p className="footer-company-name"> Disenador Web profesional</p>
        </div>

        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>Barquisimeto</span> Venezuela, Lara</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+58 4149507357</p>
            </div>

            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">anderssonq@gmail.com</a></p>
            </div>
        </div>

        <div className="footer-right">
            <p className="footer-company-about">
                <span>Portfolio Personal</span>
                Pagina web creada con React - Derechos reservados &copy; 2018
            </p>

            <div className="footer-icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-github"></i></a>
            </div>
        </div>

    </footer>
      </div>
    </div>
  )
}

export default Footer
