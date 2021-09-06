const { listenerCount } = require("events");
const mongoose = require ("mongoose");
const RunSchema  = new mongoose.Schema({
createdBy: {
    type: String,
    required: false,
},
run:{
    type: Array, Object,
    required: false
}
});

runDb = mongoose.createConnection("mongodb+srv://dbUser:OnlyLetters@cluster0.9pjth.mongodb.net/Run?retryWrites=true&w=majority", {useNewUrlParser:true});


const Run = runDb.model("Run", RunSchema);
module.exports = Run;