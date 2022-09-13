const { Schema, model } = require('mongoose');

const needleSchema = new Schema(
    {
       type: {
        type: String,
        required: true,
        maxlength: 280,
        quantity: {
            type: String, 
            required: false
           },
           size: {
            type: String,
            required: true
           }, 
           length: {
            type: String,
            required: false
           }  
       },
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Needles = model('Needles', needleSchema)

module.exports = Needles;