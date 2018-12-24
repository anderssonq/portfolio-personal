import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
      <div class="contactComponent" style={contactContent}>
        <form onSubmit={ this.onSubmitContact}>
            <input type="text" name="name" id="" onChange={this.onChange}/>
            <input type="email" name="email" id="" onChange={this.onChange}/>
            <textarea name="message" id="" cols="30" rows="10" onChange={this.onChange}></textarea>

            <input type="submit" value="Enviar"/>
        </form>
        {/*0412 1452466*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
