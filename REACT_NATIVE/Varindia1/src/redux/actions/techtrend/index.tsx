/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  TECHTREND_DATA_FETCHING,
  TECHTREND_DATA_SUCCESS,
  TECHTREND_DATA_FAILURE,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const techtrend = (page: number) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then(async (state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: TECHTREND_DATA_FETCHING,
          payload: true,
        });
        await axios
          .get(url.techtrendurl + page)
          .then(function (response) {
            console.log('response', response?.data?.newslist);
            if (response.status == 200) {
              techtrend_data_success(dispatch, response?.data?.newslist);
            } else {
              techtrend_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            techtrend_data_failure(dispatch, error);
          });
      } else {
        techtrend_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const techtrend_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: TECHTREND_DATA_SUCCESS,
    payload: {data},
  });
};

const techtrend_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: TECHTREND_DATA_FAILURE, payload: error});
};
