import React from 'react'
import { connect } from 'react-redux'
import { fetch } from '../../services/http'
import { List, Button } from 'semantic-ui-react'
import HeadLine from '../../ui-components/HeadLine'
import './results.css'

const mapState = ({ trivia}, ownProps) => {
  const correctAnswers = trivia.trivia.reduce((prev, curr) => {
    const isCorrect = curr.correct_answer === curr.answer ? 1 : 0
    return prev + isCorrect
  }, 0)
  return { trivia, correctAnswers, totalQuestions: trivia.trivia.length}
}

const Results = ({trivia: {trivia, requestingTrivia}, correctAnswers, totalQuestions, history}) => {

  const playAgain = () => {
    history.push('/')
  }

  if (!trivia.length) {
    history.push('/')
  }
  
  return (
  <React.Fragment>
    <HeadLine primaryText="You Scored" secondaryText={`${correctAnswers} / ${totalQuestions}`} />
    <section>
      <List>
      {trivia.map((question, index) => (
      <List.Item key={index} >
        <List.Icon name={question.correct_answer === question.answer ? 'check circle outline' : 'times'} />
        <List.Content>
          <p dangerouslySetInnerHTML={{__html: `${question.question}`}} />
          {question.correct_answer !== question.answer  && <span>Correct answer: {question.correct_answer}</span>}
          </List.Content>
      </List.Item>
      ))}
      </List>
    </section>
    <footer>
      <Button primary onClick={playAgain}>Play Again?</Button>
    </footer>
  </React.Fragment>
  )
}

export default connect(mapState, {})(Results)