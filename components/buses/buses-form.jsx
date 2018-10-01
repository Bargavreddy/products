import React, { Component } from 'react'

class BusForm extends Component {
    constructor() {
        super();
        this.state = {
            BusName: "",
            Noseats: ""
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })

    }

    resetForm = () => {
        this.setState({
            BusName: "",
            Noseats: ""
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addBus(this.state);
        this.resetForm();
    }

    render() {
        return (
            <div>
                <h3> Buses Add</h3>
                <form className="ui form" onSubmit={this.handleSubmit} >
                    <div className="field">
                        <label>Bus Name</label>
                        <input type="text" name="BusName" placeholder="BusName"
                            onChange={this.handleChange}
                            value={this.state.BusName} />
                    </div>
                    <div className="field">
                        <label>Busnumber</label>
                        <input type="text" name="Noseats"
                            onChange={this.handleChange}
                            placeholder="Noseats" value={this.state.Noseats} />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default BusForm;