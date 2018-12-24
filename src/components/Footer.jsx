import React from 'react'
import '../assets/footerdistadress.css'

const Footer = () => {
  return (
    <div>
      <div className="row">
       
      <footer class="footer-distributed">

        <div class="footer-left">
            <h3>Andersson <span>Quintero</span></h3>
            <p class="footer-company-name"> Disenador Web profesional</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Barquisimeto</span> Venezuela, Lara</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+58 4149507357</p>
            </div>

            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">anderssonq@gmail.com</a></p>
            </div>
        </div>

        <div class="footer-right">
            <p class="footer-company-about">
                <span>Portfolio Personal</span>
                Pagina web creada con React - Derechos reservados &copy; 2018
            </p>

            <div class="footer-icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>
            </div>
        </div>

    </footer>
      </div>
    </div>
  )
}

export default Footer
