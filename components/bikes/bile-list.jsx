import React, { Component } from 'react'
import BikeDeatails from './bike.deatails'
import BikeForm from './bike-form'

 class BikeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "Bikes": [
                {
                    bikeId:1,
                    bikeName:'unicon',
                    bikeModel:'unicon123',
                    bikeCost: '95k'

                },
                {
                    bikeId:2,
                    bikeName:'Ducati',
                    bikeModel:'ducati143',
                    bikeCost: '105k'

                },
                {
                    bikeId:3,
                    bikeName:'Housng',
                    bikeModel:'Housng183',
                    bikeCost: '88k'

                }
            ],
            SelectedBike:null,
            newId:4
        }
    }
    

    selectedBike =(selectedBike)=>{
         
         this.setState({
            SelectedBike:selectedBike
         })
    }

    AddBike =(newbike)=>{
      let newBike = Object.assign({},newbike, {bikeId:this.state.newId})
      let newBikeList = [...this.state.Bikes,newBike ]
      this.setState({
        Bikes:newBikeList,
        newId: this.state.newId +1
      })
    }


  render() {
    return (
      <div>
        <h3> Bike List  </h3>
        <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Bike Id</th>
                            <th>Bike Name</th>
                            <th>Bike Model</th>
                            <th>Bike Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Bikes.map(bike =>
                            <tr key={bike.bikeId} >
                                <td>{bike.bikeId}</td>
                                <td>{bike.bikeName}</td>
                                <td>{bike.bikeModel} </td>
                                <td>{bike.bikeCost} </td>
                                <td>
                                    <button className="ui primary button"
                                        onClick={() => this.selectedBike(bike)}
                                    >Save</button>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>

               {this.state.SelectedBike && <BikeDeatails  selectedByk = {this.state.SelectedBike}/>}
               <BikeForm   addBike={this.AddBike} />
      </div>
    )
  }
}
export default BikeList;