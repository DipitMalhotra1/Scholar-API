
var mongoose= require('mongoose');
var Schema = mongoose.Schema;


var publisherSchema =  new Schema({

        Name: {
            type: String,
            default: 'NULL'

        }


    }
);

var Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = Publisher;