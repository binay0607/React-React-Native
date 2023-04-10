/* eslint-disable eqeqeq */
import {
  NEW_ARRIVAL_FETCHING,
  NEW_ARRIVAL_SUCCESS,
  NEW_ARRIVAL_FAILURE,
  NEW_ARRIVAL_CLEARDATA,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const newArrival = () => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then((state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: NEW_ARRIVAL_FETCHING,
          payload: true,
        });
        axios
          .get(url.NewArrival)
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
              newarrival_data_success(dispatch, response.data);
            } else {
              newarrival_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            newarrival_data_failure(dispatch, error);
          });
      } else {
        newarrival_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const newarrival_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: NEW_ARRIVAL_SUCCESS,
    payload: {data},
  });
};

const newarrival_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: NEW_ARRIVAL_FAILURE, payload: error});
};

export const newarrival_data_clear_data = () => {
  return (dispatch: (arg0: {type: any; payload: string}) => void) => {
    dispatch({
      type: NEW_ARRIVAL_CLEARDATA,
      payload: '',
    });
  };
};
