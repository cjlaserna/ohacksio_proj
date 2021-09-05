const { listenerCount } = require("events");
const mongoose = require ("mongoose");
const UserSchema = new mongoose.Schema({
username: {
    type: String,
    required: false,
},
password: {
    type: String,
    required: false,
},
email: {
    type: String,
    required: false,
},
current_run:{
    type: String,
    required: false,
},
past_runs:{
    type: Array, String,
    required: false
},
verCode: {
    type: String,
    required: false,
}
});

userDb = mongoose.createConnection("mongodb+srv://dbUser:OnlyLetters@cluster0.9pjth.mongodb.net/User?retryWrites=true&w=majority", {useNewUrlParser:true});


const User = userDb.model("User", UserSchema);
module.exports = User;