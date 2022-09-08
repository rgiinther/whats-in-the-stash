const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const { projectSchema } = require("./Project");

const userSchema = new Schema(
    {
        username: {
          type: String,
          required: true,
          unique: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
          match: [
            /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim,
            `Must use a valid email address`,
          ],
        },
        password: {
          type: String,
          required: true,
        },
        pets: [petSchema],
      },
    
      {
        toJSON: {
          virtuals: true,
        },
      }
    );
    
    // hash password
    userSchema.pre("save", async function (next) {
      if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
      }
      next();
    });
    
    userSchema.methods.isPassword = async function (pass) {
      return bcrypt.compare(pass, this.password);
    };
    
    userSchema.virtual("petCount").get(function () {
      return this.pets.length;
    });
    

const User = model("User", userSchema);

module.exports = User;