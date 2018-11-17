import React, { Component } from 'react'


class Navbar extends Component {




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
            } else {
                header.classList.remove("sticky");
            }
        }

    }

  render() {


    const navbarStyle={
        background: '#1b242f',
        width:'100%',
        height:'50px',
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
          textTransform:'uppercase'
      }

      return <div className="navbar" id="navbar" style={navbarStyle}>
        <ul style={navbaritems}>
           <a href=""><li>Inicio</li></a>
           <a href=""><li>Acerca</li></a>
           <a href=""><li>Portafolio</li></a>
           <a href=""><li>Contácto</li></a>
        </ul>
      </div>;
  }
}


export default Navbar;