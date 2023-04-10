/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  STARTUP_DATA_FETCHING,
  STARTUP_DATA_SUCCESS,
  STARTUP_DATA_FAILURE
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const Startup = (page: number) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then(async (state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: STARTUP_DATA_FETCHING,
          payload: true,
        });
        await axios
          .get(url.startupurl + page)
          .then(function (response) {
            console.log('response', response?.data?.newslist);
            if (response.status == 200) {
              startup_data_success(dispatch, response?.data?.newslist);
            } else {
              startup_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            startup_data_failure(dispatch, error);
          });
      } else {
        startup_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const startup_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: STARTUP_DATA_SUCCESS,
    payload: {data},
  });
};

const startup_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: STARTUP_DATA_FAILURE, payload: error});
};
