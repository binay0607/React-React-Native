/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  FACE_TO_FACE_FETCHING,
  FACE_TO_FACE_SUCCESS,
  FACE_TO_FACE_FAILURE,
  FACE_TO_FACE_CLEARDATA,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const faceto = (page: number) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then(async (state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: FACE_TO_FACE_FETCHING,
          payload: true,
        });
        debugger;
        await axios
          .get(url.Facetofaceurl + page)
          .then(function (response) {
            console.log('response', response?.data?.newslist);
            if (response.status == 200) {
              faceto_data_success(dispatch, response?.data?.newslist);
            } else {
              faceto_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            faceto_data_failure(dispatch, error);
          });
      } else {
        faceto_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const faceto_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: FACE_TO_FACE_SUCCESS,
    payload: {data},
  });
};

const faceto_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: FACE_TO_FACE_FAILURE, payload: error});
};

export const faceto_data_clear_data = () => {
  return (dispatch: (arg0: {type: any; payload: string}) => void) => {
    dispatch({
      type: FACE_TO_FACE_CLEARDATA,
      payload: '',
    });
  };
};
