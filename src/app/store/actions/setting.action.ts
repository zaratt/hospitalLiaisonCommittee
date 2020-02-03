import { Action } from '@ngrx/store';

export const SET_SETTING = '[Settings] Set Setting';
export const CHANGE_SETTING = '[Settings] Change Setting';

export enum ESettingActions {
  SET_SETTING = '[Set setting] SET_SETTING',
  GET_SETTING = '[Get setting] GET_SETTING'
}
export class SetSettingAction implements Action {
  readonly type = ESettingActions.SET_SETTING;
  constructor(public payload: object) {}
}

export class GetSettingAction implements Action {
  readonly type = ESettingActions.GET_SETTING;
}

export type SettingActions = SetSettingAction | GetSettingAction;
