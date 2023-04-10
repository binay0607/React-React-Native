/* eslint-disable eqeqeq */
import {
  LATEST_NEWS_FETCHING,
  LATEST_NEWS_SUCCESS,
  LATEST_NEWS_FAILURE,
  LATEST_NEWS_CLEARDATA,
} from '../../services/';
import {checkNetwork} from '../../../utils';
import {url} from '../../../network_service';
import axios from 'axios';
export const newsLatest = () => {
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    checkNetwork().then((state: any) => {
      if (state.isConnected == true) {
        dispatch({
          type: LATEST_NEWS_FETCHING,
          payload: true,
        });
        axios
          .get(url.LatestNews)
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
              dashboard_data_success(dispatch, response.data);
            } else {
              dashboard_data_failure(dispatch, response.data);
            }
          })
          .catch(function (error) {
            dashboard_data_failure(dispatch, error);
          });
      } else {
        dashboard_data_failure(
          dispatch,
          'Your device is not connected to internet.',
        );
      }
    });
  };
};

const dashboard_data_success = (
  dispatch: (arg0: {type: any; payload: {data: any} | {data: any}}) => void,
  data: any,
) => {
  dispatch({
    type: LATEST_NEWS_SUCCESS,
    payload: {data},
  });
};

const dashboard_data_failure = (
  dispatch: (arg0: {type: string; payload: any}) => void,
  error: string,
) => {
  dispatch({type: LATEST_NEWS_FAILURE, payload: error});
};

export const dashbord_data_clear_data = () => {
  return (dispatch: (arg0: {type: any; payload: string}) => void) => {
    dispatch({
      type: LATEST_NEWS_CLEARDATA,
      payload: '',
    });
  };
};
