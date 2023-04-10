/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
import {
  VIDEODETAILS_DATA_FETCHING,
  VIDEODETAILS_DATA_SUCCESS,
  VIDEODETAILS_DATA_FAILURE,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const videodetails = (page: number) => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then(async (state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: VIDEODETAILS_DATA_FETCHING,
          payload: true,
        });
        await axios
          .get(url.videodetailsurl + page)
          .then(function (response) {
            console.log('response', response?.data);
            if (response.status == 200) {
              videodetails_data_success(dispatch, response?.data);
            } else {
              videodetails_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            videodetails_data_failure(dispatch, error);
          });
      } else {
        videodetails_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const videodetails_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: VIDEODETAILS_DATA_SUCCESS,
    payload: {data},
  });
};

const videodetails_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: VIDEODETAILS_DATA_FAILURE, payload: error});
};
