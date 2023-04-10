import {
  TECHTREND_DATA_FETCHING,
  TECHTREND_DATA_FAILURE,
  TECHTREND_DATA_SUCCESS,
} from '../../services';

interface Action {
  type: string;
  payload: any;
}
interface State {
  is_success: boolean;
  techtrend_data: any;
  is_fetching: boolean;
  error: boolean;
  msg: string;
  currentPage: number;
}

const initialState = {
  is_success: false,
  techtrend_data: [],
  is_fetching: false,
  error: false,
  msg: '',
  currentPage: 1,
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case TECHTREND_DATA_FETCHING:
      return {
        ...state,
        is_fetching: true,
        is_success: false,
        error: false,
      };
    case TECHTREND_DATA_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        is_success: true,
        techtrend_data: [...state.techtrend_data, ...action.payload.data],
        currentPage: state.currentPage,
      };
    case TECHTREND_DATA_FAILURE:
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
