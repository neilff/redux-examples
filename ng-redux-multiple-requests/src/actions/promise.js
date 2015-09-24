import {bindActionCreators} from 'redux';
import {createAction} from 'redux-actions';
import {
  REQUEST_PLAYER_INFO,
  REQUEST_PLAYER_INFO_SUCCESS,
  REQUEST_PLAYER_INFO_ERROR,
  REQUEST_PLAYER_TEAM_DATA,
  REQUEST_PLAYER_TEAM_DATA_SUCCESS,
  REQUEST_PLAYER_TEAM_DATA_ERROR
} from '../constants';
import webAPI from '../api';

export function getPlayerInfo(id) {
  id = parseInt(id);

  return {
    types: [
      REQUEST_PLAYER_INFO,
      REQUEST_PLAYER_INFO_SUCCESS,
      REQUEST_PLAYER_INFO_ERROR
    ],
    payload: {
      promise: webAPI.getPlayerInfo(id),
      data: id
    }
  };
}

export function getPlayerTeamData(id) {
  id = parseInt(id);

  return {
    types: [
      REQUEST_PLAYER_TEAM_DATA,
      REQUEST_PLAYER_TEAM_DATA_SUCCESS,
      REQUEST_PLAYER_TEAM_DATA_ERROR
    ],
    payload: {
      promise: webAPI.getPlayerTeamData(id),
      data: id
    }
  };
}

export default {
  getPlayerInfo,
  getPlayerTeamData
};
