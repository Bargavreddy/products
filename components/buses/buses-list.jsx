import React, { Component } from 'react'
import BusDetails from './buses-details'
import BusForm from './buses-form'

class BusList extends Component {
    constructor() {
        super();
        this.state = {
            "buses": [
                {
                    BusId: 1,
                    BusName: 'Volvo',
                    Noseats: 35,

                },
                {
                    BusId: 2,
                    BusName: 'Volvo',
                    Noseats: 35,

                },
                {
                    BusId: 3,
                    BusName: 'Volvo',
                    Noseats: 35,
                }
            ],
            BusDetails: null,
            latestId: 4

        }
    }

    busDetails = (selectedBus) => {

        console.log('Selcted Bus is', selectedBus)
        this.setState({
            BusDetails: selectedBus
        })

    }

    getBuses = (newbus) => {
        console.log('getting from child component bus deatails', newbus)
        let newBus = Object.assign({}, newbus, { BusId: this.state.latestId })
        let newBusList = [...this.state.buses, newBus]
        this.setState({
            buses: newBusList,
            latestId: this.state.latestId + 1
        })

    }

    render() {
        return (
            <div className="ui grid">
                <h3 className="App">List of Buses</h3>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>BusId</th>
                            <th>BusName</th>
                            <th>Noseats</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.buses.map(bl =>
                            <tr key={bl.BusId} >
                                <td>{bl.BusId}</td>
                                <td>{bl.BusName}</td>
                                <td>{bl.Noseats} </td>

                                <td>{bl.Action}
                                    <button className="ui primary button"
                                        onClick={() => this.busDetails(bl)}
                                    > Viewlist</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="row">
                    <div className="two wide column">
                        {this.state.BusDetails && <BusDetails busDetails={this.state.BusDetails} />}
                    </div>
                    <div className="two wide column">
                        <BusForm addBus={this.getBuses} />
                    </div>
                </div>
            </div>
        )
    }
}

export default BusList;