var mongoose= require('mongoose');
var Schema = mongoose.Schema;


var authorSchema =  new Schema({

    Author1Firstname: {
            type: String,
            default: 'NULL'

    },

    Author1Lastname: {
        type: String,
        default: 'NULL'

        },

    Author2Firstname: {
        type: String,
        default: 'NULL'
        },

    Author2Lastname: {type: String,
        default: 'NULL'
        },
    Author3Firstname: {
        type: String,
        default: 'NULL'
        },

    Author3Lastname: {
        type: String,
        default: 'NULL'
        },
    Author4Firstname: {
        type: String,
        default: 'NULL'
        },

    Author4Lastname: {
        type: String,
        default: 'NULL'
        },
    Author5Firstname: {
        type: String,
        default: 'NULL'
        },

    Author5Lastname: {
        type: String,
        default: 'NULL'
        },


        Title:{
            type: String,
            required: true
        },

        Publisher: {
            type: String,
            default: 'NULL'
        },

        Pages: {
        type: String,
        required: false,
        default: 'NULL'
        },

        Syllabi: {
        type: Number,
        required: false,
        default: ' '
        },
        Number: {
        type: String,
        required: false,
        default: ' '
        },
        Volume: {
        type: String,
        required: false,
        default: ' '
        },

        Year: {
        type: String,
        required: false,
            default: ' '
        },

        Author1Gender: {
        type: String,
        required: false,
            default: 'NULL'
        },
        Author2Gender: {
        type: String,
        required: false,
        default: 'NULL'
            },
        Author3Gender: {
        type: String,
        required: false,
        default: 'NULL'
        },
        Author4Gender: {
        type: String,
        required: false,
        default: 'NULL'
        },
        Author5Gender: {
        type: String,
        required: false,
        default: 'NULL'
        }



    }
);

var ID = mongoose.model('Author', authorSchema);

module.exports = ID;