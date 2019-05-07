import React from 'react';
import './App.css';
import Titles from './Components/Titles';
import Forms from './Components/Forms';
import Wheather from './Components/Wheather';

//!
const API_KEY = "a3cd4e83650c3431dfc438c420dc7c27";



class App extends React.Component{

  state = {

    temperature : undefined,
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

    console.log(data);

    this.setState({

      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description
      

    });
  }
  
  
  render() {
    return (
      <div className="">
      <Titles/>
      <Forms getWheather={this.getWheather}/>
      <Wheather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
      />

    </div>
  );
}
}

export default App;
