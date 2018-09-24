const initialState = {
  requestingTrivia: false,
  trivia: [],
}

const triviaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_TRIVIA' : {
      return { ...state, ...{requestingTrivia: false, trivia: action.payload.data.results}}
    }
    case 'REQUEST_TRIVIA' : {
      return { ...state, ...{requestingTrivia: true}}
    }
    case 'ADD_ANSWER' : {
      const trivia = state.trivia
      trivia[action.payload.questionIndex].answer = action.payload.answer
    }
    default : return state
  }
}

export default triviaReducer