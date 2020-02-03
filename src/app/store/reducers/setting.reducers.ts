import { initialSettingState, ISettingState } from '../state/setting.state';
import { SettingActions, ESettingActions } from '../actions/setting.action';

export const settingReducers = (
  state = initialSettingState,
  action: SettingActions
): ISettingState => {
  switch (action.type){
    case ESettingActions.SET_SETTING: {
      const key = Object.keys(action.payload)[0];
      window.localStorage.setItem(`app.settings.${key}`, action.payload[key]);
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
