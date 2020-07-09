import { combineReducers } from 'redux'
import { RouterState, connectRouter } from 'connected-react-router'
import { History } from 'history'
import counterReducer from '../features/counter/counterSlice'

const rootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    // profile: profileReducer
})

export interface State {
    counter: number
    router: RouterState
}

export default rootReducer;