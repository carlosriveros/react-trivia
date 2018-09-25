import React, { Component } from 'react'
import './App.css'
import Home from './components/home/Home'
import Question from  './components/question/Question'
import Results from './components/results/Results'
import { Route, Switch} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class App extends Component {
  render() {
    return (
      <Route render={({location})=> 
        
        <TransitionGroup>
          <CSSTransition 
          timeout={500}
          key={location.key}
          classNames='fade'>
          <div className="App">
          <Switch location={location}>
            <Route exact path='/' component={Home}/>
            <Route exact path='/results' component={Results}/>
            <Route path='/:questionIndex' component={Question}/>
          </Switch>
          </div>
          </CSSTransition>
          </TransitionGroup>
        } />
      
    );
  }
}

export default App
