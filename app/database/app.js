var mongoose =  require('mongoose');
//  URI do MLab
mongoose.connect('mongodb://todolistuser:todolistuser@ds231229.mlab.com:31229/mongo-to-do-list');
mongoose.Promise = global.Promise;

// conexão local ao mongodb
// mongoose.connect('mongodb://localhost:27017/node-crud-mongo')

module.exports = mongoose;