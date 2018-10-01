import React, { Component } from 'react'

class BikeForm extends Component {
    constructor() {
        super()
        this.state = {
            bikeName: '',
            bikeModel: '',
            bikeCost: ''
        }
    }
    handlechange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBike(this.state)
        this.clearForm();
        
    }
    clearForm(){
        this.setState({
            bikeName: '',
            bikeModel: '',
            bikeCost: ''
        })
    }

    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.handleSubmit} >
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="bikeName"
                            value={this.state.bikeName} onChange={this.handlechange}
                            placeholder="Enter Bike Name" />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="bikeModel"
                            value={this.state.bikeModel} onChange={this.handlechange}
                            placeholder="Enter Bike Model" />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="bikeCost"
                            value={this.state.bikeCost} onChange={this.handlechange}
                            placeholder="Enter Bike Cost" />
                    </div>

                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default BikeForm;