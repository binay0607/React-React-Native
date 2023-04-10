/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  VIDEOPAGE_DATA_FETCHING,
  VIDEOPAGE_DATA_SUCCESS,
  VIDEOPAGE_DATA_FAILURE,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const videopagedata = (page: number) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then(async (state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: VIDEOPAGE_DATA_FETCHING,
          payload: true,
        });
        await axios
          .get(url.Videopage + page)
          .then(function (response) {
            console.log('response', response?.data?.newslist);
            if (response.status == 200) {
              videopagedata_data_success(dispatch, response?.data?.newslist);
            } else {
              videopagedata_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            videopagedata_data_failure(dispatch, error);
          });
      } else {
        videopagedata_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const videopagedata_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: VIDEOPAGE_DATA_SUCCESS,
    payload: {data},
  });
};

const videopagedata_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: VIDEOPAGE_DATA_FAILURE, payload: error});
};
