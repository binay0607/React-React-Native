import {
  NEW_ARRIVAL_FETCHING,
  NEW_ARRIVAL_SUCCESS,
  NEW_ARRIVAL_FAILURE,
  NEW_ARRIVAL_CLEARDATA,
} from '../../services';

interface Action {
  type: string;
  payload: any;
}
interface State {
  is_success: boolean;
  newArrival_data: any;
  is_fetching: boolean;
  error: boolean;
  msg: string;
}

const initialState = {
  is_success: false,
  newArrival_data: [],
  is_fetching: false,
  error: false,
  msg: '',
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case NEW_ARRIVAL_FETCHING:
      return {
        ...state,
        is_fetching: true,
        is_success: false,
        error: false,
      };
    case NEW_ARRIVAL_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        is_success: true,
        newArrival_data: action.payload,
      };
    case NEW_ARRIVAL_FAILURE:
      return {
        ...state,
        is_fetching: false,
        is_success: false,
        error: true,
        newArrival_data: [],
        msg: action.payload,
      };
    case NEW_ARRIVAL_CLEARDATA:
      return {
        ...state,
        newArrival_data: [],
        is_fetching: false,
        is_success: false,
        error: false,
        msg: '',
      };

    default:
      return state;
  }
};
