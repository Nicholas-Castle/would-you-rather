import { GET_QUESTIONS, TOGGLE_QUESTION, ADD_QUESTION }from '../actions/questions';

export default function questions(state={}, action){
  switch(action.type){
      case GET_QUESTIONS:
          return {
              ...state,
              ...action.questions
          }
      case ADD_QUESTION:
        return {
            ...state,
            [action.question.id]:action.question
        }
      case TOGGLE_QUESTION:
          return {
              ...state,
              [action.qid]:{
                  ...state[action.qid],
                  [action.answer]: {
                      ...state[action.qid][action.answer],
                      votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                  }
              }
          }
      default: 
          return state;
  }
}