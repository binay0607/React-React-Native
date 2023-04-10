import {
  VIDEODETAILS_DATA_FETCHING,
  VIDEODETAILS_DATA_SUCCESS,
  VIDEODETAILS_DATA_FAILURE,
} from '../../services';

interface Action {
  type: string;
  payload: any;
}
interface State {
  is_success: boolean;
  videodetails_data: any;
  is_fetching: boolean;
  error: boolean;
  msg: string;
}

const initialState = {
  is_success: false,
  videodetails_data: [],
  is_fetching: false,
  error: false,
  msg: '',
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case VIDEODETAILS_DATA_FETCHING:
      return {
        ...state,
        is_fetching: true,
        is_success: false,
        error: false,
      };
    case VIDEODETAILS_DATA_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        is_success: true,
        videodetails_data: action.payload,
      };
    case VIDEODETAILS_DATA_FAILURE:
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
