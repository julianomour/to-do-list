/**
 * Model Tasks
 */

var mongoose = require('../database/app');
var Schema = mongoose.Schema

var taskSchema = new Schema({
   nome: String,
   descricao: String,
   status: Boolean
})  

module.exports = mongoose.model('Task', taskSchema)