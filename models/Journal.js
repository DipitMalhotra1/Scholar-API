/**
 * Created by dipit on 6/2/17.
 */

var mongoose= require('mongoose');
var Schema = mongoose.Schema;


var journalSchema =  new Schema({

        Name: {
            type: String,
            default: 'NULL'

        }


    }
);

var Journal = mongoose.model('Publisher', journalSchema);

module.exports = Journal;