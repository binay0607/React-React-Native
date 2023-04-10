import {
  LATEST_NEWS_FETCHING,
  LATEST_NEWS_SUCCESS,
  LEARDERBOARD_FAILURE,
  LATEST_NEWS_CLEARDATA,
} from '../../services';

interface Action {
  type: string;
  payload: any;
}
interface State {
  is_success: boolean;
  latestNews_data: any;
  is_fetching: boolean;
  error: boolean;
  msg: string;
}

const initialState = {
  is_success: false,
  latestNews_data: [],
  is_fetching: false,
  error: false,
  msg: '',
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case LATEST_NEWS_FETCHING:
      return {
        ...state,
        is_fetching: true,
        is_success: false,
        error: false,
      };
    case LATEST_NEWS_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        is_success: true,
        latestNews_data: action.payload,
      };
    case LEARDERBOARD_FAILURE:
      return {
        ...state,
        is_fetching: false,
        is_success: false,
        error: true,
        latestNews_data: [],
        msg: action.payload,
      };
    case LATEST_NEWS_CLEARDATA:
      return {
        ...state,
        latestNews_data: [],
        is_fetching: false,
        is_success: false,
        error: false,
        msg: '',
      };

    default:
      return state;
  }
};
