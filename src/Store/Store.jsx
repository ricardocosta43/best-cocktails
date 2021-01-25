import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoriesReducer from './Categories/Categories.reducer';
import drinksReducer from './Drinks/Drinks.reducer';
import drinksDetailReducer from './Drinks_Detail/Drinks_Detail.reducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    drinks: drinksReducer,
    drinksDetail: drinksDetailReducer,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
  )

export default store;