/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  MOVERSSHAKERS_DATA_SUCCESS,
  MOVERSSHAKERS_DATA_FAILURE,
  MOVERSSHAKERS_DATA_FETCHING,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const movers = (page: number) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then(async (state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: MOVERSSHAKERS_DATA_FETCHING,
          payload: true,
        });
        await axios
          .get(url.moversurl + page)
          .then(function (response) {
            console.log('response', response?.data?.newslist);
            if (response.status == 200) {
              movers_data_success(dispatch, response?.data?.newslist);
            } else {
              movers_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            movers_data_failure(dispatch, error);
          });
      } else {
        movers_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const movers_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: MOVERSSHAKERS_DATA_SUCCESS,
    payload: {data},
  });
};

const movers_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: MOVERSSHAKERS_DATA_FAILURE, payload: error});
};
