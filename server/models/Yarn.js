const { Schema, model } = require('mongoose');


const yarnSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
      maxlength: 280
    },
    picture: {
      type: String,
      required: true
    },
    weight: {
      type: String,
      required: true, 
    },
    amount: {
        type: String, 
        required: true,
    },
    length: {
        type: String,
        required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);
const Yarn= model('Yarn', yarnSchema);

module.exports = Yarn;