
var mongoose= require('mongoose');
var Schema = mongoose.Schema;


var findbyauthorSchema =  new Schema({

        Name: {
            type: String,
            default: 'NULL'

        }


    }
);

var Authors_3 = mongoose.model('Author_3', findbyauthorSchema);

module.exports = Authors_3;