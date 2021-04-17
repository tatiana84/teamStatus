// 1-4 step:
const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Sebastian',
            lastName: 'Braniste',
            age: 7
        },
        {
            firstName: 'Radu',
            lastName: ' Braniste',
            age: 12
        }
      ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Baracas',
            teamPoints: 30,
            opponentPoints: 17
        },
        {
            opponent: 'Tadeos',
            teamPoints: 50,
            opponentPoints: 37
        }
    ],
// 5 step:
    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },
// 6 step:
    addPlayer(firstName, lastName, age) {
        this._players.push ({
            firstName,
            lastName,
            age
        });
    },
// 8 step:
    addGame(opponent, teamPoints, opponentPoints) {
        this._games.push ({
            opponent,
            teamPoints,
            opponentPoints
        });
    }
}
// 7 step:
team.addPlayer('Steph', 'Curry', 'Age 28');
team.addPlayer('Lisa', 'Leslie', 'Age 44');
team.addPlayer('Bugs', 'Bunny', 'Age 76');

//console.log(team._players);

// 9 step:
team.addGame('RealSucces', 45, 12);
team.addGame('TomPlay', 14, 23);
team.addGame('Ghenea', 14, 13);

//console.log(team._games);