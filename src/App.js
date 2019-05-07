import React from 'react';
import './App.css';
import Titles from './Components/Titles';
import Forms from './Components/Forms';
import Wheather from './Components/Wheather';

//!
const API_KEY = "a3cd4e83650c3431dfc438c420dc7c27";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWheather = async (event) => {
    event.preventDefault();
    //from the inputs coming from forms.js
    const city = event.target.elements.city.value;
    const country = event.target.elements.country;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json()

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value ! "
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-6 form-container">
                <Forms getWheather={this.getWheather} />
                <Wheather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;






