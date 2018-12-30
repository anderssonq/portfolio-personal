import React, { Component } from 'react'
import logoAnder from '../images/logo.jpg'
import Mailchimp from 'react-mailchimp-form'


export class Contact extends Component {

    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            message:''
        }
        this.onSubmitContact=this.onSubmitContact.bind(this);
        this.onChange=this.onChange.bind(this)
    }

  onSubmitContact =(e)=>{ 
    e.preventDefault();
}

    onChange =(e) => {
      let {name,value} = e.target; 
      
      this.setState({
          [name]:value
      })
    }
    

  render() {

    const contactContent={
        width:'50%',
        margin:'auto',
        marginTop:'100px'
    }

    const colorwhite={
        color:'white'
    }

    const logoAnderStyle={
      width:'140px',
      borderRadius:'60%',
      border:'solid 2px white',
      margin:'auto',
      display:'block',
      marginTop:'-60px'
    }
    return (
      <div className="contactComponent" style={contactContent}>

        <img src={logoAnder} style={logoAnderStyle} alt={logoAnder}/>
        <form action="https://facebook.us7.list-manage.com/subscribe/post?u=4880a20f277d76b238c7b2efb&amp;id=4749289fb5" method="post" name="mc-embedded-subscribe-form" novalidate>

                    <div class="input-field col s6">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" class="validate" type="text" value={this.state.name}  name="FNAME"  onChange={ (e)=>{this.setState({name: e.target.value});} } />
                        <label for="icon_prefix">Nombre</label>
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">email</i>
                        <input id="icon_email" type="email" name="EMAIL" value={this.state.email} onChange={ (e)=>{this.setState({email: e.target.value});} } />
                        <label for="icon_email">Correo electronico</label>
                    </div>
                    <div class="input-field col s12">
                        <i class="material-icons prefix">sms</i>
                        <input id="textarea2" value={this.state.message} type="text" name="MMERGE2"  onChange={ (e)=>{this.setState({message: e.target.value});} } />
                        <label for="textarea2">Mensaje</label>
                    </div>



                    
                    <div className="container-button">
                        <input type="submit" value="Enviar mensaje" name="subscribe" id="mc-embedded-subscribe" className="btn btn-large waves-effect waves-teal btnStart"/>
                    </div>
        </form>
{/* 
        <Mailchimp
        action="https://facebook.us7.list-manage.com/subscribe/post?u=4880a20f277d76b238c7b2efb&amp;id=4749289fb5"
        fields={[
          {
            name: 'FNAME',
            placeholder: 'Nombre',
            type: 'text',
            required: true,
            class:'x'
          },
          {
            name: 'EMAIL',
            placeholder: 'Correo electronico',
            type: 'email',
            required: true
          },
          {
            name: 'MMERGE2',
            placeholder: 'Mensaje',
            type: 'text',
            required: true
          }
        ]}

        message={
            {
              sending: "Enviando...",
              success: "Gracias por suscribirte a mi lista, pronto estaremos en contacto!",
              error: "Oh oh, algo a pasado.",
              empty: "Debes escribir un correo..",
              duplicate: "Correo electronica ya usado.",
              button: "Enviar Mensaje"
            }
          }
        /> */}
      </div>
    )
  }
}

