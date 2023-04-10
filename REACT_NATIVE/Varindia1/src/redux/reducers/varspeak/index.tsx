import {
  VARSPEAK_DATA_FETCHING,
  VARSPEAK_DATA_SUCCESS,
  VARSPEAK_DATA_FAILURE,
} from '../../services';

interface Action {
  type: string;
  payload: any;
}
interface State {
  is_success: boolean;
  varspeak_data: any;
  is_fetching: boolean;
  error: boolean;
  msg: string;
  currentPage: number;
}

const initialState = {
  is_success: false,
  varspeak_data: [],
  is_fetching: false,
  error: false,
  msg: '',
  currentPage: 1,
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case VARSPEAK_DATA_FETCHING:
      return {
        ...state,
        is_fetching: true,
        is_success: false,
        error: false,
      };
    case VARSPEAK_DATA_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        is_success: true,
        varspeak_data: [...state.varspeak_data, ...action.payload.data],
        currentPage: state.currentPage,
      };
    case VARSPEAK_DATA_FAILURE:
      return {
        ...state,
        is_fetching: false,
        is_success: false,
        error: true,
        msg: action.payload,
      };

    default:
      return state;
  }
};
