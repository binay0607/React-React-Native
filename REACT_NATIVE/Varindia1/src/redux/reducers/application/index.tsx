import * as actionTypes from '../../services';
interface Action {
  theme: any;
  font: any;
  force_dark: any;
  language: any;
  type: string;
  payload: any;
  music: boolean;
  soundeffects: boolean;
  animations: boolean;
  automaticdownload: boolean;
  DownloadUsingCellularData: boolean;
  PracticeReminder: boolean;
}
interface State {
  font: any;
  force_dark: any;
  language: any;
  theme: any;
  music: boolean;
  soundeffects: boolean;
  animations: boolean;
  automaticdownload: boolean;
  DownloadUsingCellularData: boolean;
  PracticeReminder: boolean;
}

const initialState = {
  theme: null,
  font: null,
  force_dark: null,
  language: 'en',
  music: true,
  soundeffects: true,
  animations: true,
  automaticdownload: true,
  DownloadUsingCellularData: true,
  PracticeReminder: true,
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case actionTypes.CHANGE_FONT:
      return {
        ...state,
        font: action.font,
      };
    case actionTypes.FORCE_APPEARANCE:
      return {
        ...state,
        force_dark: action.force_dark,
      };
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };

    case actionTypes.CHANGE_MUSIC:
      return {
        ...state,
        music: action.music,
      };
    case actionTypes.CHANGE_SOUND_EFFECTS:
      return {
        ...state,
        soundeffects: action.soundeffects,
      };
    case actionTypes.CHANGE_ANIMATIONS:
      return {
        ...state,
        animations: action.animations,
      };

    case actionTypes.CHANGE_AUTOMATIC_DOWNLOAD:
      return {
        ...state,
        automaticdownload: action.automaticdownload,
      };
    case actionTypes.CHANGE_DOWNLOAD_USING_CELLULAR_DATA:
      return {
        ...state,
        DownloadUsingCellularData: action.DownloadUsingCellularData,
      };
    case actionTypes.CHANGE_PRACTICE_REMINDER:
      return {
        ...state,
        PracticeReminder: action.PracticeReminder,
      };
    default:
      return state;
  }
};
