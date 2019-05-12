import { Middleware, Action } from "redux";
import { ApplicationState } from 'store';
import axios from 'axios'

import humps from 'humps';

export const API_CALL = '@api.CALL';

export const apiMiddleWare: Middleware<ApplicationState, Action | Promise<Action>> = 
  store => next => action => {
    if (action.type === API_CALL) {
        axios(action.payload.url).then(response => store.dispatch({
          type: action.payload.success,
          data: {
            ...humps.camelizeKeys(response.data),
            page: action.payload.page
          }
        })).catch(responseError => store.dispatch({
          type: action.payload.error,
          data: humps.camelizeKeys(responseError)
        }));

        store.dispatch({
            type: action.payload.request,
            data: action
        })
    }
    return next(action)
  }
