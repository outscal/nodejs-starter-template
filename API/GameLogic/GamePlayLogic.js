
var ServerEvents = require("../../ServerEvents/ServerEvents");
module.exports = class GameLogic {
    constructor(table, potValue) {
        // this.gamePlayers = {};
       
    }
    LeaveGame(playerID) {
       // delete this.gamePlayers[playerID];
    }

    StartGame() {
      
    }

    NotifyPlayersInGame(event, cardData) {
       // Object.values(this.gamePlayers)[0].socket.to(this.table.tableName).emit(event, cardData);
       // Object.values(this.gamePlayers)[0].socket.emit(event, cardData);
    }

    ifNoOnePlaying() {
        // console.log("[GamePlayLogic] players in game" + Object.keys(this.gamePlayers).length);
        // return (Object.keys(this.gamePlayers).length < 1);
    }
    RemovePlayerFromGame(player) {
        // player.socket.emit(ServerEvents.ON_LEAVE_GAME, playerData);
        // player.socket.to(this.roomName).emit(ServerEvents.ON_LEAVE_GAME, playerData);
        // delete this.gamePlayers[player.playerID];
    }
    AddPlayerInGame(player) {
        // if (Object.keys(this.playersInRoomDictionary).length < this.roomSize) {
        //     //player.socket.to(this.roomName).emit(ServerEvents.ON_JOIN_ROOM, playerData);
        //     this.gamePlayers[player.playerID] = player;
        //     this.game.AssignPad(player.playerID);

        //     return true;
        // }
        // return false;
    }


}