import React from 'react'
import '../assets/footerdistadress.css'

const Footer = () => {
    return (
        <div>
            <div className="row">

                <footer className="footer-distributed">

                    <div className="footer-left">
                        <h3>Andersson <span>Quintero</span></h3>
                        <p className="footer-company-name"> Disenador Web Profesional</p>
                    </div>

                    <div className="footer-center">
                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>Barquisimeto</span> Venezuela, Lara</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=584149507357">+58 4149507357</a>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="mailto:support@company.com">anderssonq@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span>Portfolio Personal</span>
                            Página web creada con React <br />
                            Derechos reservados &copy; 2018 <br />
                            Fotografía personal por Diego Martinez
            </p>

                        <div className="footer-icons">
                            <a href="https://www.facebook.com/anderssondeveloper" target="_blank"><i className="fab fa-facebook-square" /></a>
                            <a href="https://www.linkedin.com/in/andersson-jos%C3%A9-quintero-luna-70753411b/"
                                target="_blank"><i className="fab fa-linkedin" /></a>
                            <a href="https://gitlab.com/anderssonq" target="_blank"><i className="fab fa-gitlab" /></a>
                            <a href="https://www.instagram.com/anderssonsaysthat/" target="_blank"><i className="fab fa-instagram" /></a>
                            <a href="https://github.com/anderssonq" target="_blank"><i className="fab fa-github" /></a>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
    )
}

export default Footer
