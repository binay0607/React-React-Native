import {
  FACE_TO_FACE_FETCHING,
  FACE_TO_FACE_SUCCESS,
  FACE_TO_FACE_FAILURE,
  FACE_TO_FACE_CLEARDATA,
} from '../../services';

interface Action {
  type: string;
  payload: any;
}
interface State {
  is_success: boolean;
  facetoface_data: any;
  is_fetching: boolean;
  error: boolean;
  msg: string;
  currentPage: number;
}

const initialState = {
  is_success: false,
  facetoface_data: [],
  is_fetching: false,
  error: false,
  msg: '',
  currentPage: 1,
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case FACE_TO_FACE_FETCHING:
      return {
        ...state,
        is_fetching: true,
        is_success: false,
        error: false,
      };
    case FACE_TO_FACE_SUCCESS:
      return {
        ...state,
        is_fetching: false,
        is_success: true,
        // facetoface_data: action.payload,
        facetoface_data: [...state.facetoface_data, ...action.payload.data],
        currentPage: state.currentPage,
      };
    case FACE_TO_FACE_FAILURE:
      return {
        ...state,
        is_fetching: false,
        is_success: false,
        error: true,
        msg: action.payload,
      };
    case FACE_TO_FACE_CLEARDATA:
      return {
        ...state,
        facetoface_data: [],
        is_fetching: false,
        is_success: false,
        error: false,
        msg: '',
      };

    default:
      return state;
  }
};
