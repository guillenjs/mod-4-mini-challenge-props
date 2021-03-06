import React from 'react'

// TODO: import the SpiceItem component here
import SpiceItem from './SpiceItem'
// class component
class SpiceList extends React.Component {

  renderSpices() {
    // TODO: update this function to return an array of SpiceItem components
    // If you get an error message about a 'key' prop, make sure to fix it before submitting your code!
    // return this.props.spices.map((spice) => {
    //   <SpiceItem key={spice.id} spice = {spice}>
    // })

    return this.props.spices.map( spice => <SpiceItem key={spice.id} spice ={spice} />)
    
  }

  render() {
    console.log("SpiceList props:", this.props.spices)
    return (
      <section className="spice-list">
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList