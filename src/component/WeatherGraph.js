import React from 'react'

class WeatherGraph extends React.Component {
  render() {
    debugger
    return(
      <div>
        Forcast
        {JSON.stringify(this.props.forecast)}
      </div>
    )
  }
}

export default WeatherGraph
