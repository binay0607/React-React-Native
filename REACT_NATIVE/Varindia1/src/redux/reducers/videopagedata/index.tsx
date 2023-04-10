import {
  VIDEOPAGE_DATA_FETCHING,
  VIDEOPAGE_DATA_SUCCESS,
  VIDEOPAGE_DATA_FAILURE,
} from '../../services';

interface Action {
  type: string;
  payload: any;
}
interface State {
  is_success: boolean;
  videopage_data: any;
  is_fetching: boolean;
  error: boolean;
  msg: string;
  currentPage: number;
}

const initialState = {
  is_success: false,
  videopage_data: [],
  is_fetching: false,
  error: false,
  msg: '',
  currentPage: 1,
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case VIDEOPAGE_DATA_FETCHING:
      return {
        ...state,
        is_fetching: true,
        is_success: false,
        error: false,
      };
    case VIDEOPAGE_DATA_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        is_success: true,
        videopage_data: [...state.videopage_data, ...action.payload.data],
        currentPage: state.currentPage,
      };
    case VIDEOPAGE_DATA_FAILURE:
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
