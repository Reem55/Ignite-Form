import { ADD_FORM, FETCH_FORM, FETCH_SUCCEEDDED, FETCH_FAILED} from "./actiontype";
const FormReducer  = {form = [], action} => {


  switch (action.type) {
    case FETCH_SUCCEEDDED;
    return action.receivedForm;
    case ADD_FORM:
      return [
        ...form,
        action.newMovie
      ];
    default:
      return Form;

  }
}

export default FormReducer;
