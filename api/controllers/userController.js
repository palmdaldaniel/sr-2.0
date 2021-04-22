const sqlite3 = require('sqlite3');
const Encrypt = require('../Encrypt')
const path = require('path');



const db = new sqlite3.Database(path.join(__dirname, '../SR_DB.db'))


const whoami = (req, res) => {
    console.log(req.session.user);
    res.json(req.session.user || null)
}

const login = (req, res) => {
    const { email, password  } = req.body
 /*    
    let rootUser = {
        email: email
    } */
    console.log(email);

    let query = /* SQL */ `SELECT * FROM users WHERE email = $email`;
    let params = {
        $email: email
    }

    db.get(query, params, (err, user) => {
         console.log(user);
       
        if(user === undefined) {
            res.status(404).json({err: err, message:'Email or password is incorrect'})
            return
        }  
        console.log(user);
        req.session.user = user;

        res.json({success: 'logged in', username: user.username})
    });




/* 
    req.session.user = rootUser
    console.log(req.session.user);
    res.send({succes: 'logged in', user: rootUser}) */
}

const logout = (req, res) => {
    delete req.session.user
    res.json({succes: 'User is logged out'})
}



module.exports = {
    whoami,
    login,
    logout
}