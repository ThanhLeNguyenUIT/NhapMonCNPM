var mongoose = require('mongoose')
var categorySchema = mongoose.Schema({
    name_category: String
})

var category = mongoose.model('categories', categorySchema);

module.exports = category;