import React from 'react'
import { requestTriviaData, receiveTriviaData} from '../../actions/triviaActions'
import { connect } from 'react-redux'
import { fetch } from '../../services/http'
import { Button } from 'semantic-ui-react'
import HeadLine from '../../ui-components/HeadLine'


const requestTrivia = () => (dispatch) => {
  dispatch(requestTriviaData())
  return fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
  .then(response => {
    dispatch(receiveTriviaData(response))
  })
}

const mapState = (state, ownProps) => {
  return state
}

const Home = ({requestTrivia, trivia: { requestingTrivia } , history}) => {

  const fetchTrivia = () => {
    requestTrivia()
      .then(response => {
        history.push('1')
      })
  }
  
  return (
  <React.Fragment>
    <HeadLine primaryText="Welcome to the Trivia Challenge!" />
    <section>
      <p>You will be presented with 10 True or False Questions.</p>
      <p>Can you score 100%?</p>
    </section>
    <footer>
      <Button primary onClick={fetchTrivia} loading={requestingTrivia}>BEGIN</Button>
    </footer>
  </React.Fragment>
  )
}

export default connect(mapState, {requestTrivia})(Home)