import {createStore, combineReducers} from 'redux'
import mainReducer from '../store/reducers/index'

const rootReducer = combineReducers({
    cart: mainReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store