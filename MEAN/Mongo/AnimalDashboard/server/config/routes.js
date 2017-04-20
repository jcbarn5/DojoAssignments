var mongoose = require('mongoose');
var Sloth = mongoose.model('Sloth');
var sloths = require('../controllers/sloths.js');

module.exports = function(app) {
  app.get('/', function(req, res) {
    sloths.show(req, res)
  })
  app.get('/editSloth/:id', function(req, res) {
    sloths.edit(req, res)
  })
  app.get('/deleteSloth/:id',function(req,res){
    sloths.delete(req,res)
  });
  app.post('/updateSloth/:id', function(req, res) {
    sloths.update(req,res)
  })
  app.post('/addSloth', function(req, res) {
    console.log(req);
    console.log(res);
    sloths.addSloth(req, res)
})
}
