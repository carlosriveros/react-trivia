import React, { Component } from 'react'
import './App.css'
import Home from './components/home/Home'
import Question from  './components/question/Question'
import Results from './components/results/Results'
import { Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/results' component={Results}/>
          <Route path='/:questionIndex' component={Question}/>
        </Switch>
      </div>
    );
  }
}

export default App
