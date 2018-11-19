import React, { Component } from 'react'
import $ from 'jquery'

class RowHeader extends Component {
    constructor(props){
        super(props);
    }


  render() {

      const rowTitle = {
          textAlign: 'center'
      }

      const h1Title = { fontSize: '38px' }

    return (
      <div>
            <div className="row-title" style={rowTitle}>
                <h1  style={h1Title}>{this.props.title}</h1>
            </div>
      </div>
    )
  }
}


export default RowHeader;