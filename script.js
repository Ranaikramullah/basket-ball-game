
class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.score = 0;
    }


}


class PointGuard extends Player {
    constructor(name) {
        super(name, "Point Guard");
    }

    calculateScore() {
        // Calculate score based on position-specific logic
        return this.score * 2;
    }




}

class ShootingGuard extends Player {
    constructor(name) {
        super(name, "Shooting Guard");
    }

    calculateScore() {

        return this.score * 1.5;
    }
}

class SmallForward extends Player {
    constructor(name) {
        super(name, "Small Forward");
    }

    calculateScore() {

        return this.score * 1.75;
    }
}

class PowerForward extends Player {
    constructor(name) {
        super(name, "Power Forward");
    }

    calculateScore() {

        return this.score * 1.25;
    }
}

class Center extends Player {
    constructor(name) {
        super(name, "Center");
    }

    calculateScore() {

        return this.score * 1.5;
    }
}


class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }


    addPlayer(player) {
        this.players.push(player);
    }


    calculateTeamScore() {
        let teamScore = 0;
        for (const player of this.players) {

            teamScore += player.calculateScore();
        }
        return teamScore;

    }
}


class BasketballGame {
    constructor() {
        this.team1 = null;
        this.team2 = null;
    }


    createTeam(name) {
        return new Team(name);
    }


    addPlayerToTeam(team, playerName, position) {
        let player;
        switch (position) {
            case "Point Guard":
                player = new PointGuard(playerName);
                break;
            case "Shooting Guard":
                player = new ShootingGuard(playerName);
                break;
            case "Small Forward":
                player = new SmallForward(playerName);
                break;
            case "Power Forward":
                player = new PowerForward(playerName);
                break;
            case "Center":
                player = new Center(playerName);
                break;
            default:
                throw new Error(`Invalid position: ${position}`);
        }

        team.addPlayer(player);
    }


    playGame() {
        const team1Score = this.team1.calculateTeamScore();
        const team2Score = this.team2.calculateTeamScore();

        console.log(`Match Result:`);
        console.log(`${this.team1.name}: ${team1Score}`);
        console.log(`${this.team2.name}: ${team2Score}`);

        if (team1Score > team2Score) {
            console.log(`${this.team1.name} wins!`);
        } else if (team1Score < team2Score) {
            console.log(`${this.team2.name} wins!`);
        } else {
            console.log(`It's a tie!`);
        }
    }
}



const game = new BasketballGame();


const team1 = game.createTeam("Team 1");
const team2 = game.createTeam("Team 2");

// Add players to Team 1
game.addPlayerToTeam(team1, "Player 1", "Point Guard");
game.addPlayerToTeam(team1, "Player 2", "Power Forward");
game.addPlayerToTeam(team1, "Player 3", "Center");
game.addPlayerToTeam(team1, "Player 4", "Small Forward");
game.addPlayerToTeam(team1, "Player 5", "Shooting Guard");

// Add players to Team 2
game.addPlayerToTeam(team2, "Player 6", "Point Guard");
game.addPlayerToTeam(team2, "Player 7", "Power Forward");
game.addPlayerToTeam(team2, "Player 8", "Center");
game.addPlayerToTeam(team2, "Player 9", "Small Forward");
game.addPlayerToTeam(team2, "Player 10", "Shooting Guard");

// Set the created teams in the game
game.team1 = team1;
game.team2 = team2;

// Simulate game actions
team1.players[0].score = 12;
team1.players[1].score = 8;
team1.players[2].score = 10;
team1.players[3].score = 6;
team1.players[4].score = 4;

team2.players[0].score = 10;
team2.players[1].score = 6;
team2.players[2].score = 8;
team2.players[3].score = 12;
team2.players[4].score = 6;

// Calculate and display the game result
game.playGame();
