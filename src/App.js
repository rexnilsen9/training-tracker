import React, { Component } from 'react';
import axios from 'axios';
import Endurance from './comps/Endurance';
import Cardio from './comps/Cardio';
import Strength from './comps/Strength';
import './App.css';





class App extends Component {
  constructor() {
    super()

    this.state = {
      spainLocation: '',
      spainTemp: '',
      spainCondition: '',
      franceLocation: '',
      franceTemp: '',
      franceCondition:'',
    }
  }

  componentWillMount() {
    axios.get('http://api.apixu.com/v1/current.json?key=a4d02cad00034886aad230624181002&q=Ax-Les-Thermes')
      .then(res =>
        this.setState({
          franceTemp: res.data.current.temp_f,
          franceLocation: res.data.location.name,
          franceCondition:res.data.current.condition.text,
        })
      )

    axios.get('http://api.apixu.com/v1/current.json?key=a4d02cad00034886aad230624181002&q=Olesa-de-Montserrat')
      .then(res => this.setState({
        spainTemp: res.data.current.temp_f,
        spainLocation: res.data.location.name,
        spainCondition: res.data.current.condition.text
      }))
  }

  render() {

    
    return (
      <div className="App">
        <header className='main'>
          <h1>Training Tracker</h1>
        </header>
        <div className='weather'>
          <div className='places'>
            <h3>In {this.state.franceLocation} it is currently  {this.state.franceTemp}° and {this.state.franceCondition}.</h3>
            <h3>In  {this.state.spainLocation} it is currently {this.state.spainTemp}° and {this.state.spainCondition}</h3>
          </div>
        </div>
        <div className='workouts'>
          Endurance Exercises
          <Endurance />
          Cardio Workouts 
          <Cardio/>
          Strength Workouts
          <Strength/>
        </div>
      </div>

    )
  }
}






export default App;
