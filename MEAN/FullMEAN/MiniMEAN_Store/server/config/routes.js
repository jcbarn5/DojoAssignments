var Customer = require('../controllers/customers.js')
var Order = require('../controllers/orders.js')
var Product = require('../controllers/products.js')
module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });

  //Products
	app.post('/products', Product.create);
	app.get('/products', Product.index);
	app.delete('/products/:id', Product.delete);

  //Customers
  app.get('/customers', Customer.index);
  app.get('/customers/recent', Customer.recent);
  app.post('/customers', Customer.create);
  app.delete('/customers/:id', Customer.delete);

  // Orders
  app.get('/orders', Order.index);
  app.get('/orders/recent', Order.recent);
  app.post('/orders/:productId/:customerId', Order.create);
  app.get('/orders/:id', Order.show);
  app.delete('/orders/:id', Order.delete);
}