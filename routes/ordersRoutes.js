const OrdersController = require('../controllers/ordersController');
const passport = require('passport');

module.exports = (app) => {

    //POST ROUTES
    app.post('/api/orders/create', passport.authenticate('jwt', {session: false}), OrdersController.create);

    //GET ROUTES
    app.get('/api/orders/findByStatus/:status', passport.authenticate('jwt', {session: false}), OrdersController.findByStatus);

    //PUt ROUTES
    app.put('/api/orders/updateToDispatched', passport.authenticate('jwt', {session: false}), OrdersController.updateToDispatched);


}
