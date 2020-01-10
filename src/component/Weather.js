import React from 'react'
import WeatherGraph from './WeatherGraph'
import client from '../Client/client'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lat:37.773972,
      long:-122.431297,
      forcast:[]
    }
  }

  async componentDidMount() {
    if (this.state.lat && this.state.long){
      const weather = await client.getWeather(this.state.lat, this.state.long, this.props.token)
      console.log(JSON.stringify(weather))
      const forcast = weather.daily.data
      this.setState({forcast:forcast})
    }

  }

  render() {
    return(
      <div>
        <WeatherGraph forecast={this.state.forecast} />
      </div>
    )
  }
}

export default Weather
