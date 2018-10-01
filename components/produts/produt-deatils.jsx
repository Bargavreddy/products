import React from 'react'

function ProdutDetails(props) {
  return (
    <div>
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">{props.produtdeatils.productName}</div>
            <div className="meta"> Produt Id :  {props.produtdeatils.produtId}</div>
            <div className="description">
              <p>  Produt Name: <b>{props.produtdeatils.productName} </b></p>
              <p>  Produt Cost :<b> {props.produtdeatils.produtCost} </b> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdutDetails;