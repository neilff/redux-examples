import axios from 'axios';
import q from 'q';

export function getPlayerInfo(playerId) {
  return axios.get('http://localhost:8080/api')
    .then(res => res.data.data)
    .then(data => data.filter(i => i.playerId === playerId));
}

export function getAllTeamsInfo() {
  return axios.get('http://localhost:8080/api2')
    .then(res => res.data.data);
}

export function getPlayerTeamData(id) {
  return q.all([
    getPlayerInfo(id),
    getAllTeamsInfo()
  ])
  .then(([players, teams]) => {
    const player = players[0];

    return teams
      .filter(i => i.teamAbbrev === player.playerTeamsPlayedFor)
      .sort((a, b) => b.seasonId - a.seasonId);
  });
}

export default {
  getPlayerInfo,
  getAllTeamsInfo,
  getPlayerTeamData
};
