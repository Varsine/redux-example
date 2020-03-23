const initialState = {
  car: [],
  phone: []
}

function reducer(state = initialState, action) {
  if (action.type === "ADD_CAR") {
    return {
      ...state,
      car: [action.brend]
    }
  } else if (action.type === "ADD_PHONE") {
    return {
      ...state,
      phone: [action.brend]
    }
  }
  return state
}

export default reducer
