const { Schema, model } = require('mongoose');


const patternSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 280
    },
    file: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false
    },
    yarn: [yarnSchema],
    needles: [needleSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);
const Pattern= model('Pattern', patternSchema);

module.exports = Pattern;