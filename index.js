const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/EdiTxT",

    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("DB connected")
    })

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

// below line will make a new model of named as User and inside () written code means create with name user
// on the basis of userSchema
const User = new mongoose.model("User", userSchema)

// Routes
app.post("/login", (req, res) => {

    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
      if(user){
        if(password===user.password){
            res.send({message:"Login successful",user:user})
        }else{
            res.send({message:"Please fill correct deatils, or register for an account"})
        }
      }

    })

})


app.post("/register", (req, res) => {

    const { username, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            alert("already registered")
        }
         else if (!user){
            const user = new User({
                username:username,
                password,
                email
            })
            user.save(err => {
                if (err) {
                    console.log(err)
                } else {
                    res.send({ message: "Successfully Register", user:user })
                }
            })
        }
        console.log(req.body)
    })
})

app.listen(9002, () => {
    console.log("DB satrted at port 9002")
})
