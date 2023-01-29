import {ADD_PRODUCT, DELETE_PRODUCT } from '../actions/types'

const initialState = {
  list: []
}

export default rootReducer = (state = initialState, actions) => {
    switch (actions.type){
        case ADD_PRODUCT:
            return {
                ...state,
                list: [...state.list, actions.payload]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                list: state.list.filter(item => item.id !== actions.payload)
            }
        default:
            return {...state}
    }
}
