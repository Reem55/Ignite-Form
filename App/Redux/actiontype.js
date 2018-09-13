

export const fetchFormAction = (sort) =>{
  return{
    type: FETCH_FORM,
    sort
  }
}


export const AddFormAction = (newForm) => {
  return{
    type: ADD_FORM,
    newForm
  }
}


export const ADD_FORM = 'ADD_FORM';
export const FETCH_FORM ='FETCH_FORM';



export const FETCH_SUCCEEDDED = 'FETCH_SUCCEEDED';
export const FETCH_FAILED = 'FETCH_FAILED';
