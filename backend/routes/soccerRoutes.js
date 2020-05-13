import { 
    addNewPlayer, 
    getPlayers,
    getPlayerWithID,
    UpdatePlayer,
    deletePlayer
} from '../controllers/playerControllers.js';

const routes = app => {
    app.route('/players')
        .get(getPlayers)
        .post(addNewPlayer);
        
    app.route('/player/:PlayerId')
        .get(getPlayers)
        .put(UpdatePlayer)
        .delete(deletePlayer);
};

export default routes;