import React from 'react'
import { addAnswer } from '../../actions/triviaActions'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import HeadLine from '../../ui-components/HeadLine'
import './question.css'


const mapDispatchToProps = (dispatch) => {
  return {
    addTriviaAnswer: (questionIndex, answer) => dispatch(addAnswer(questionIndex, answer))
  }
}

const mapState = ({trivia: {trivia}}, { match: {params}, history}) => {
  const questionIndex = Number(params.questionIndex)
  let question = {}
  if (questionIndex && trivia.length && questionIndex <= trivia.length) {
    question = trivia[questionIndex - 1]
  } 
  return {question, currentQuestion: questionIndex, totalQuestions: trivia.length}
}

class Question extends React.Component {

  componentDidMount () {
   const {question, currentQuestion, totalQuestions, history} = this.props
    if(totalQuestions === 0  || (!question.question && currentQuestion < totalQuestions)) {
      history.push('/')
    }
    return null
  }
 
  answerQuestion = answer => {
    const {currentQuestion, history, addTriviaAnswer, totalQuestions} = this.props
    addTriviaAnswer(currentQuestion - 1, answer)
    history.push(currentQuestion === totalQuestions ? '/results' : `${currentQuestion + 1}`)
  }

  render () {
    const { question: {question, category}, currentQuestion, totalQuestions, history} = this.props
    return <React.Fragment>
      <HeadLine primaryText={category} />
      <section className="ui segment question">
        <p dangerouslySetInnerHTML={{__html: `${question}`}} />
        <Button primary onClick={() => this.answerQuestion('True')}>True</Button>
        <Button secondary onClick={() => this.answerQuestion('False')}>False</Button>
      </section>
      <footer>{currentQuestion} of {totalQuestions}</footer>
    </React.Fragment>
  }
}

export default connect(mapState, mapDispatchToProps)(Question)