import { ISettingState, initialSettingState } from './setting.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState {
  router?: RouterReducerState;
  setting: ISettingState;
}
export const initialAppState: IAppState = {
  setting: initialSettingState
}

export function getInitialState(): IAppState {
  return initialAppState;
}

