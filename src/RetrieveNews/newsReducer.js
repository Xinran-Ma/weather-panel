const newsReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_NEWS':
      return [
        ...action.value
      ];
    default: 
      return state;
  }
}

export default newsReducer;