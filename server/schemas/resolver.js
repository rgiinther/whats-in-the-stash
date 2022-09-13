const { AuthenticationError } = require('apollo-server-express');
const { User, Project, Pattern, Yarn, Needles} = require('../models');
const { signToken } = require('../utils/auth');

const revolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('projects')
                .populate('pattern')
                .populate('yarn')
                .populate('needles');
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
        projects: async () => {
            return Project.Find()
            .populate
        },  
          
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
        addProject: async (parent, args, context) => {
            if (context.user) {
               const project = await Project.findOneAndUpdate({}) 
            }
            
        }, 
        removeProject: async (parent, args, context) => {

        },
        addYarn: async (parent, args, context) => {},
        removeYarn: async (parent, args, context) => {},
        addPattern: async (parent, args, context) => {},
        addNeedles: async (parent, args, context) => {},
        uploadPic: async (parent, args, context) => {},
        uploadFile: async (parent, args, context) => {},
    }
}
