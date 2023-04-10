/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  CYBER_SECURITY_DATA_FETCHING,
  CYBER_SECURITY_DATA_SUCCESS,
  CYBER_SECURITY_DATA_FAILURE,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const cybersecuritys = (page: number) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then(async (state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: CYBER_SECURITY_DATA_FETCHING,
          payload: true,
        });
        debugger;
        await axios
          .get(url.Cybersicurity + page)
          .then(function (response) {
            console.log('response', response?.data?.newslist);
            if (response.status == 200) {
              cybersecuritys_data_success(dispatch, response?.data?.newslist);
            } else {
              cybersecuritys_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            cybersecuritys_data_failure(dispatch, error);
          });
      } else {
        cybersecuritys_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const cybersecuritys_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: CYBER_SECURITY_DATA_SUCCESS,
    payload: {data},
  });
};

const cybersecuritys_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: CYBER_SECURITY_DATA_FAILURE, payload: error});
};
