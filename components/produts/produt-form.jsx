import React, { Component } from 'react'

class ProdutForms extends Component {
    constructor() {
        super()
        this.state = {
            productName: '',
            produtCost: ''
        }
    }
    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProdut(this.state)

        
        this.resetForm();

    }
    resetForm() {
        this.setState({
            productName: '',
            produtCost: ''
        })
    }

    render() {
        return (
            <div>
                <h3> Produt Adding Deatails </h3>
                <form className="ui form" onSubmit={this.handleSubmit} >
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="productName" placeholder="Produt Name"
                            onChange={this.handleChange}
                            value={this.state.productName} />
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="produtCost"
                            onChange={this.handleChange}
                            placeholder="Produt Cost" value={this.state.produtCost} />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default ProdutForms;