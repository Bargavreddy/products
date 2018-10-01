import React from 'react'

function BusDetails(props) {
    return (
        <div>

            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">{props.busDetails.BusName}</div>
                        <div className="meta"> BusId :  {props.busDetails.BusId}</div>
                        <div className="description">
                            <p>  BusName: <b>{props.busDetails.BusName} </b></p>
                            <p>   Noseats:<b> {props.busDetails.Noseats} </b> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default BusDetails;