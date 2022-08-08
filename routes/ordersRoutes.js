const OrdersController = require('../controllers/ordersController');
const passport = require('passport');

module.exports = (app) => {

    //POST ROUTES
    app.post('/api/orders/create', passport.authenticate('jwt', {session: false}), OrdersController.create);

    //GET ROUTES
    app.get('/api/orders/findByStatus/:status', passport.authenticate('jwt', {session: false}), OrdersController.findByStatus);
    app.get('/api/orders/findByDeliveryAndStatus/:id_delivery/:status', passport.authenticate('jwt', {session: false}), OrdersController.findByDeliveryAndStatus);

    //PUt ROUTES
    app.put('/api/orders/updateToDispatched', passport.authenticate('jwt', {session: false}), OrdersController.updateToDispatched);
    app.put('/api/orders/updateToOnTheWay', passport.authenticate('jwt', {session: false}), OrdersController.updateToOnTheWay);


}
