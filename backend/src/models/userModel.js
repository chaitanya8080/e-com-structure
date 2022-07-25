


const mongoose = require("mongoose");

const bcrypt  = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstname:{type:String, required: true},
    lastname :{type:String, required:false},
    email:{type:String, required:true},
    password:{type:String, required:true},
},
{
    versionKey:false,
    timestamps:true,
})

userSchema.pre("save", function(){
    const hash = bcrypt.hashSync(this.password, 8)
    this.password = hash;
    return next();
})


userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}



const User = mongoose.model("user", userSchema);

module.exports = User