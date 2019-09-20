import React from 'react'

const Divider1 = () => {

  const bacgroundDividir = {
    backgroundColor: '#F5F5F5'
  }
  return (
    <div style={bacgroundDividir}>
      <svg preserveAspectRatio="xMidYMax meet" className="svg-separator sep12" viewBox="0 0 1600 200" style={{ display: 'block' }} data-height="200">
        <polygon style={{ fill: 'rgb(26, 36, 47)' }} points="-4,24 800,198 1604,24 1604,204 -4,204 "></polygon>
        <polygon style={{ opacity: 1, fill: '#95a5a6' }} points="-4,0 800,198 1604,0 1604,11.833 800,198 -4,12 "></polygon>
        <polygon style={{ opacity: 1, fill: '#d2d7d3' }} points="-4,12 -4,24 800,198 1604,24 1604,11.833 800,198 "></polygon></svg>
    </div>
  )
}

export default Divider1
