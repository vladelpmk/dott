import { Reducer } from 'redux'
import { action } from 'typesafe-actions'
import { API_CALL } from 'middleware/api'
import { API_URL } from 'config'
import moment from 'moment';


export enum BooksActionTypes {
  GET_BOOKS = '@@books/GET',
  GET_BOOKS_SUCCESS = '@@books/GET_SUCCESS',

  GET_BOOKS_PAGE = '@@books/GET_PAGE',
  GET_BOOKS_PAGE_SUCCESS = '@@books/GET_PAGE_SUCCESS',

  GET_BOOKS_ERROR = '@@books/GET_ERROR'
}

export interface BooksState {
  initial: boolean;
  query: string
  docs: [] | any,
  page: number,
  numFound: number,
  start: number,
  error: any,
  loading: boolean,
  timeAt: any
}


export const initialState: BooksState = {
  docs: [],
  query: '',
  page: 0,
  numFound: 0,
  start: 0,
  loading: false,
  error: undefined,
  timeAt: false,
  initial: true
}

export const getBooksByTitle = (title:string) => action(
  API_CALL,
  {
    url: encodeURI(`${API_URL}search.json?q=${title}`),
    page: 1,
    query: title,
    request: BooksActionTypes.GET_BOOKS,
    success: BooksActionTypes.GET_BOOKS_SUCCESS,
    error: BooksActionTypes.GET_BOOKS_ERROR
  }
)

export const getBooksByTitlePage = (title:string, page:number) => action(
  API_CALL,
  {
    url: encodeURI(`${API_URL}search.json?q=${title}`),
    page: page,
    query: title,
    request: BooksActionTypes.GET_BOOKS_PAGE,
    success: BooksActionTypes.GET_BOOKS_PAGE_SUCCESS,
    error: BooksActionTypes.GET_BOOKS_ERROR
  }
)

const reducer: Reducer<BooksState> = (state = initialState, action) => {
  switch (action.type) {
    case BooksActionTypes.GET_BOOKS: {
      return { 
        ...state, 
        query: action.query,
        loading: true,
        initial: false
      }
    }
    case BooksActionTypes.GET_BOOKS_SUCCESS: {          
      return { 
        ...state, 
        ...action.data,
        timeAt: moment(),
        loading: false
      }
    }
    case BooksActionTypes.GET_BOOKS_PAGE_SUCCESS: {                
      return { 
        ...state, 
        docs: state.docs.concat(action.data.docs),
        page: action.data.page,
      }
    }
    case BooksActionTypes.GET_BOOKS_ERROR: {
      return { 
        ...state
        , error: action.error 
      }
    }
    default: {
      return state
    }
  }
}

export { reducer as booksReducer }