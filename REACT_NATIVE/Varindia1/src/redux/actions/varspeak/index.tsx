/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  VARSPEAK_DATA_FETCHING,
  VARSPEAK_DATA_SUCCESS,
  VARSPEAK_DATA_FAILURE,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const varspeak = (page: number) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then(async (state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: VARSPEAK_DATA_FETCHING,
          payload: true,
        });
        await axios
          .get(url.varspeakurl + page)
          .then(function (response) {
            console.log('response', response?.data?.newslist);
            if (response.status == 200) {
              varspeak_data_success(dispatch, response?.data?.newslist);
            } else {
              varspeak_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            varspeak_data_failure(dispatch, error);
          });
      } else {
        varspeak_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const varspeak_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: VARSPEAK_DATA_SUCCESS,
    payload: {data},
  });
};

const varspeak_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: VARSPEAK_DATA_FAILURE, payload: error});
};
