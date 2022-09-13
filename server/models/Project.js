const { Schema, model } = require('mongoose');
//const yarnSchema = require('./Yarn');
const patternSchema = require('./Pattern');
const needleSchema = require('./Needles');
const yarnSchema = require('./Yarn');


const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: 'You need to have a project name',
      minlength: 1,
      maxlength: 280
    },
    type: {
      type: String,
      required: true
    },
    pattern: [patternSchema],
    yarn: [yarnSchema], 
    needles: [needleSchema],
  },
  {
    toJSON: {
      getters: true
    }
  }
);


const Project = model('Project', projectSchema);

module.exports = Project;