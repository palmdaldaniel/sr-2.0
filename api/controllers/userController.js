const sqlite3 = require("sqlite3");
const Encrypt = require("../Encrypt");
const path = require("path");


const db = new sqlite3.Database(path.join(__dirname, "../../SR_DB.db"));


const whoami = (req, res) => {
  console.log(req.session.user);
  res.json(req.session.user || null);
};

const login = (req, res) => {  
  
  const { email, password } = req.body;
  let query = /* SQL */ `SELECT * FROM users WHERE email = $email`;
   let params = {
    $email: email,
  };

  db.get(query, params, (err, user) => {
    if (user === undefined) {
      res
        .status(404)
        .json({ err: err, message: "Email or password is incorrect" });
      return;
    }
    console.log('user: ', user);
    //delete passwaord before session starts
    delete user.password
    req.session.user = user;

    res.json({ success: "logged in", username: user.username, userid: user.userid });
  });
   
};

const logout = (req, res) => {
  delete req.session.user;
  res.json({ succes: "User is logged out" }); 
};

const registerUser = (req, res) => {
  console.log(req.body);
  const { email, username, password } = req.body;

  // first check if someone has that email
  let query = /* SQL */ `SELECT * from users WHERE email = $email`;
  let params = {
    $email: email,
  };
  console.log('query :', query);
  console.log('params :', params);

  db.get(query, params, (err, result) => {
    //undefiened
    if (result) {
      res.json({ failed: "email already exists" });
    } else {
      // email does not exist so go ahead and run this code
      query = /* SQL */ `INSERT INTO users (email, username, password) VALUES($email, $username, $password)`;
      params = {
        $email: email,
        $username: username,
        $password: Encrypt.encrypt(password),
      };

      console.log('query :', query);
      console.log('params :', params);

      db.run(query, params, function (err) {
        if (err) {
          console.log('inside run', err );
          res.status(404).json({ err: err });
          return;
        }
        res.json({ succes: "User registered successful", lasID: this.lastId });
      });
    }
  });
};



module.exports = {
  whoami,
  login,
  logout,
  registerUser,
};
