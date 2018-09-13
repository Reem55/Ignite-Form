import { connect } from 'react-redux'
import Main from './MainScreen'
import {addFormAction, fetchFormAction, fetchSuccessAction, fetchFailedAction} from "../Redux/actiontype";

const mapStateToProps = {state} => {

  return {

    Forms: state.formReducers
  }
};

const mapDispatchToProps ={ dispatch } => {
  return {
    onFetchForm: () => {
      dispatch(fetchFormAction());
    }

  };
}

const ContactForm =connect(mapStateToProps, mapDispatchToProps)(LunchScreen);
export default ContactForm;
