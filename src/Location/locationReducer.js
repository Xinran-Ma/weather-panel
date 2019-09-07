const locationReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return action.value;
    default: 
      return state;
  }
}

export const CountryReducer = (state = '', action) => {
  switch (action.type) {

    case 'UPDATE_COUNTRY':
      return action.value;
    default: 
      return state;
  }
}

export default locationReducer;