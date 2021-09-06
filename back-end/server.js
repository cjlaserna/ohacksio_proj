const express = require("express");
const moongose = require ("mongoose");
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer')
const {google} = require('googleapis')


const clientID = '593912518801-gsjoa08p63ktvpt9akl8p5n90otmto37.apps.googleusercontent.com'
const clientSecret = 'Da2Z9fRn4uvNL1cp4YlfIgx5'
const redirectURI = 'https://developers.google.com/oauthplayground'
const refreshToken = '1//04Jzv3g3hQOt9CgYIARAAGAQSNwF-L9IrhVNEw99_VWfl0gltp-w6pXtDLCWqbG8e-2BdOoWAdr4upaBwEb4-mi_vRb91RUUgQK8'

const oAuth = new google.auth.OAuth2(clientID, clientSecret, redirectURI)

oAuth.setCredentials({refresh_token: refreshToken})

const UserModel = require("./models/User");
const RunModel = require("./models/Run");
const { response } = require("express");

app.use(express.json());    
app.use(cors());

function badTokenGen(size){
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];  
    for (var i=0; i<size; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}


const sendVerificationEmail = async (verificationToken, userEmail)=>{
    try{
        const accessToken = await oAuth.getAccessToken()
        const transport = nodemailer.createTransport({service: 'gmail', auth: {type: 'OAuth2', user: 'vercode123@gmail.com', clientId: clientID, clientSecret : clientSecret, refreshToken: refreshToken, accessToken: accessToken}});  
        const options = {from: '{ADD NAME} verification code <vercode123@gmail.com>', to: userEmail, subject: "Verification Code", text: verificationToken};
        const result = transport.sendMail(options);
        console.log(result)
    }
    catch (error){
        return error
    }
}


app.post("/login", async (req, res) =>{  //check if an account exists
    const email = req.body.email;
    const password = req.body.password;
    UserModel.find({email: email, password: password}, (err, result)=>{
        if(err){    
            res.send(err);
        }
        if(result){
        res.send(result);}
        else{   
            res.send("Wrong information")
        }
    })
})


app.post ('/signup', async(req, res) =>{
    const user = req.body.user;
    console.log(user)
    const user2 = new UserModel({username: user.username, password: user.password, email: user.email})
    console.log(user2)
    await user2.save();
    res.send("registered user");
})

app.post('/register', async (req, res) =>{//authenticating and fetching user login from frontend
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    badToken = badTokenGen(5);
    console.log(badToken);
    UserModel.find({email: email}, (err, result) =>{
        if(result==0)
        {
            var seconds =Math.floor(Date.now()/1000);
            badToken+=seconds.toString(36);
            console.log(badToken)
            sendVerificationEmail(badToken, email);
            const user = new UserModel({username: username, password: password, email: email, verCode:badToken});
            res.send({user})
        }
        else{
            res.send("0")
        }
    });
});

app.post("/runID", async (req, res)=>{ // fetching data from frontend
    console.log("hope this runs")
    const _id = req.body._id;
    console.log(_id)
    let ph = "god"
    await UserModel.findById(_id, async (err, uModel)=>{
        await RunModel.findById(uModel.current_run  , async (err, rModel)=>{
            res.send(rModel)
        });
    });

}); 


app.post("/insert", async (req, res)=>{ // fetching data from frontend
    console.log("i hate aditya shelke")
    const createdBy = req.body.createdBy;
    const run = req.body.run;
    const Run = RunModel({createdBy:createdBy, run:run})
    try
    {
        await Run.save();
        res.send(Run._id);

    }catch(err){
    }
}); 

app.put("/update", async (req, res)=>{ // fetching data from frontend
    const run = req.body.run;
    const _id = req.body._id;
    await RunModel.findById(_id, (err, rModel)=>{
        rModel.save();
     });
}); 



app.get("/read", async (req, res)=>{//reading from database
   CourseModel.find({}/*looking in database*/, (err, result) => {
       if(err){
        res.send(err)
       }
       res.send(result);
   })
});


app.listen(3001, ()=> {
    //  console.log('Server up and running on 3001');
  });