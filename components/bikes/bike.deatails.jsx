import React from 'react'

function BikeDeatails(props) {
  return (
    <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">{props.selectedByk.bikeName}</div>
            <div className="meta"> Produt Id :  {props.selectedByk.bikeId}</div>
            <div className="description">
              <p>  Produt Name: <b>{props.selectedByk.bikeModel} </b></p>
              <p>  Produt Cost :<b> {props.selectedByk.bikeCost} </b> </p>
            </div>
          </div>
        </div>
      </div>
  )
}
export default BikeDeatails