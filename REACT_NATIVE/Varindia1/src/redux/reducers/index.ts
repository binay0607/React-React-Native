/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import application from './application';
import cybersecuritys from './cybersecuritys';
import details from './details';
import faceto from './faceto';
import movers from './movers';
import newArrival from './newArrival';
import newsLatest from './newsLatest';
import Startup from './Startup';
import technotainment from './technotainment';
import techtrend from './techtrend';
import varspeak from './varspeak';
import videodetails from './videodetails';
import videopagedata from './videopagedata';

export default combineReducers({
  application: application,
  newsLatest: newsLatest,
  newArrival: newArrival,
  faceto: faceto,
  cybersecuritys,
  videopagedata,
  movers,
  Startup,
  technotainment,
  techtrend,
  varspeak,
  details,
  videodetails,
});
