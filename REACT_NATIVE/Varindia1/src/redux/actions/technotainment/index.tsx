/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  TECHNOTAINMENT_DATA_FETCHING,
  TECHNOTAINMENT_DATA_SUCCESS,
  TECHNOTAINMENT_DATA_FAILURE,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const technotainment = (page: number) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then(async (state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: TECHNOTAINMENT_DATA_FETCHING,
          payload: true,
        });
        await axios
          .get(url.technotainmenturl + page)
          .then(function (response) {
            console.log('response', response?.data?.newslist);
            if (response.status == 200) {
              technotainment_data_success(dispatch, response?.data?.newslist);
            } else {
              technotainment_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            technotainment_data_failure(dispatch, error);
          });
      } else {
        technotainment_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const technotainment_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: TECHNOTAINMENT_DATA_SUCCESS,
    payload: {data},
  });
};

const technotainment_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: TECHNOTAINMENT_DATA_FAILURE, payload: error});
};
