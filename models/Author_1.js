/**
 * Created by dipit on 6/2/17.
 */

var mongoose= require('mongoose');
var Schema = mongoose.Schema;


var findbyauthorSchema =  new Schema({

        Name: {
            type: String,
            default: 'NULL'

        }


    }
);

var Authors_1 = mongoose.model('Author_1', findbyauthorSchema);

module.exports = Authors_1;