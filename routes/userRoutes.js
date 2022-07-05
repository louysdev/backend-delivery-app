const UsersController = require('../controllers/usersController');

module.exports = (app) => {

    // OBTENER DATOS
    app.get('/api/users/getAll', UsersController.getAll);

    // GUARDAR DATOS
    app.post('/api/users/create', UsersController.register);

    // LOGIN
    app.post('/api/users/login', UsersController.login);
}