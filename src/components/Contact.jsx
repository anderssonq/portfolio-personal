import React, { Component } from 'react'
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
    return (
      <div className="contactComponent" style={contactContent}>
        <form onSubmit={ this.onSubmitContact}>

                    <div class="input-field col s6">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" class="validate"/>
                        <label for="icon_prefix">First Name</label>
                    </div>
                    <div class="input-field col s6">
                        <i class="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" class="validate"/>
                        <label for="icon_telephone">Telephone</label>
                    </div>
                    <div class="input-field col s12">
                        <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
                        <label for="textarea2">Textarea</label>
                    </div>



                    
                    <div className="container-button">
                        <a className="btn btn-large waves-effect waves-teal btnStart">
                        Enviar mensaje   
                        </a>
                    </div>
        </form>
        {/*0412 1452466*/}
      </div>
    )
  }
}

