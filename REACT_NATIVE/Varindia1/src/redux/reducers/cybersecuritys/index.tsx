import {
  CYBER_SECURITY_DATA_FETCHING,
  CYBER_SECURITY_DATA_SUCCESS,
  CYBER_SECURITY_DATA_FAILURE,
} from '../../services';

interface Action {
  type: string;
  payload: any;
}
interface State {
  is_success: boolean;
  cybersecuritys_data: any;
  is_fetching: boolean;
  error: boolean;
  msg: string;
  currentPage: number;
}

const initialState = {
  is_success: false,
  cybersecuritys_data: [],
  is_fetching: false,
  error: false,
  msg: '',
  currentPage: 1,
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case CYBER_SECURITY_DATA_FETCHING:
      return {
        ...state,
        is_fetching: true,
        is_success: false,
        error: false,
      };
    case CYBER_SECURITY_DATA_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        is_success: true,
        // cybersecuritys_data: action.payload,
        cybersecuritys_data: [
          ...state.cybersecuritys_data,
          ...action.payload.data,
        ],
        currentPage: state.currentPage,
      };
    case CYBER_SECURITY_DATA_FAILURE:
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
