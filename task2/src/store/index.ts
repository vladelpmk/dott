import { combineReducers, Store, createStore, applyMiddleware } from 'redux';
import { BooksState, booksReducer } from 'modules/books';
import { composeWithDevTools } from 'redux-devtools-extension';
import { apiMiddleWare } from 'middleware/api';

export interface ApplicationState {
  books: BooksState
};

const createRootReducer = () =>
  combineReducers({
    books: booksReducer,
  });


export default function configureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({})

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(
      apiMiddleWare
    ))
  )

  return store;
};