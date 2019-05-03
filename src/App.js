import React from 'react';
import './App.css';
import Titles from './Components/Titles';
import Forms from './Components/Forms';
import Wheather from './Components/Wheather';




const API_KEY = "a3cd4e83650c3431dfc438c420dc7c27";

class App extends React.Component{
  
  
  getWheather = async (event) => {
    event.preventDefault();
    
    const city = event.target.elements.city.value;
    const country = event.target.elements.country;
    
    //create the api call
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    
    const data = await api_call.json();
    
    console.log(data);
  }
  
  
  render() {
    return (
      <div className="App">
      <Titles/>
      <Forms getWheather={this.getWheather}/>
      <Wheather/>
    </div>
  );
}
}

export default App;
