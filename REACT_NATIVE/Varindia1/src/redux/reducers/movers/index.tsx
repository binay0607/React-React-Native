import {
  MOVERSSHAKERS_DATA_FETCHING,
  MOVERSSHAKERS_DATA_SUCCESS,
  MOVERSSHAKERS_DATA_FAILURE,
} from '../../services';

interface Action {
  type: string;
  payload: any;
}
interface State {
  is_success: boolean;
  movers_data: any;
  is_fetching: boolean;
  error: boolean;
  msg: string;
  currentPage: number;
}

const initialState = {
  is_success: false,
  movers_data: [],
  is_fetching: false,
  error: false,
  msg: '',
  currentPage: 1,
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case MOVERSSHAKERS_DATA_FETCHING:
      return {
        ...state,
        is_fetching: true,
        is_success: false,
        error: false,
      };
    case MOVERSSHAKERS_DATA_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        is_success: true,
        movers_data: [...state.movers_data, ...action.payload.data],
        currentPage: state.currentPage,
      };
    case MOVERSSHAKERS_DATA_FAILURE:
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
