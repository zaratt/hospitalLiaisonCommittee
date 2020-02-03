import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { settingReducers } from './setting.reducers';
import { ActionReducerMap } from '@ngrx/store';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  setting: settingReducers
}
