export const requestTriviaData = () => {
  return  {
    type: 'REQUEST_TRIVIA'
  }
}

export const receiveTriviaData = data => {
  return  {
    type: 'RECEIVE_TRIVIA',
    payload: {
      data
    }
  }
}

export const addAnswer = (questionIndex, answer) => {
  return {
    type: 'ADD_ANSWER',
    payload: {
      questionIndex,
      answer
    }
  }
}