/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  DEATAILS_DATA_FETCHING,
  DEATAILS_DATA_SUCCESS,
  DEATAILS_DATA_FAILURE,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const details = (page: number) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then(async (state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: DEATAILS_DATA_FETCHING,
          payload: true,
        });
        await axios
          .get(url.detailsurl + page)
          .then(function (response) {
            console.log('response', response?.data);
            if (response.status == 200) {
              details_data_success(dispatch, response?.data);
            } else {
              details_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            details_data_failure(dispatch, error);
          });
      } else {
        details_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const details_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: DEATAILS_DATA_SUCCESS,
    payload: {data},
  });
};

const details_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: DEATAILS_DATA_FAILURE, payload: error});
};
