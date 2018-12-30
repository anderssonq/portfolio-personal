import React, { Component } from 'react'
import $ from 'jquery'


class Navbar extends Component {

constructor(props){
    super(props);
    this.goToA=this.goToA.bind(this);
}


  goToA=(nameA)=>{
    $(`a[href^="${nameA}"]`).click(function () {
      $('html, body').animate({
          scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
      }, 500);
      return false;
  });
  }


    componentDidMount = () =>{
        // When the user scrolls the page, execute myFunction 
        window.onscroll = function () { myFunction() };
        // Get the header
        var header = document.getElementById("navbar");
        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                header.classList.add('z-depth-1');
            } else {
                header.classList.remove("sticky");
                header.classList.remove('z-depth-1');
            }
        }
    }

  render() {


    const navbarStyle={
        background: '#1b242f',
        width:'100%',
        height:'auto',
        borderBottom:'5px solid #fc4582',
        padding:'0px',
        transition:'all 0.4s',
        zIndex:'5'
    }

      const navbaritems = {
          display: 'flex',
          flexWrap: 'wrap',
          fontSize: '20px',
          justifyContent: 'space-evenly',
          color: 'white',
          margin:'0px',
          paddingTop:'10px',
          textTransform:'uppercase',
          transition:'all 0.4s'
      }

      return <div className="navbar" id="navbar" style={navbarStyle}>
        <ul style={navbaritems}>
           <a href="#inicio" onClick={ () =>{
               this.goToA('#inicio')
           }}><li>Inicio</li></a>
           <a href="#About" onClick={ () =>{
               this.goToA('#About')
           }}><li>Acerca</li></a>
           <a href="#Projects" onClick={ () =>{
               this.goToA('#Projects')
           }}><li>Portafolio</li></a>
           <a href="#Contact" onClick={ () =>{
               this.goToA('#Contact')
           }}><li>Contácto</li></a>
           
        </ul>
      </div>;
  }
}


export default Navbar;