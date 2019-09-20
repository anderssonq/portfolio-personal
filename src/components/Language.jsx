import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLang } from '../actions/postActions';



class Language extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleChangeLang = this.handleChangeLang.bind(this);
    }

    handleChangeLang = (e,lang) => {
        e.preventDefault();
        this.props.changeLang(lang);
    }

    render() {
        return (
            <div class="languagebox">
                <p>¿Qué idioma hablas?</p>
                <div className="switcher">
                    <a href="" onClick={(e)=>{
                        this.handleChangeLang(e,'en');
                    }}>EN</a>
                    |
                    <a href="" onClick={(e)=>{
                        this.handleChangeLang(e,'es');
                    }}>ES</a>
                </div>
            </div>
        )
    }
}

export default connect(
    null,
    { changeLang }
)(Language);