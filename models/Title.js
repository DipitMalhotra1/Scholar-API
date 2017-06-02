
var mongoose= require('mongoose');
var Schema = mongoose.Schema;


var titleSchema =  new Schema({

        Title: {
            type: String,
            default: 'NULL'

        }


    }
);

var Titles = mongoose.model('Title', titleSchema);

module.exports = Titles;