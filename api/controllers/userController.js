const sqlite3 = require("sqlite3");
const Encrypt = require("../Encrypt");
const path = require("path");
const utils = require("../core/utilities");

const db = new sqlite3.Database(path.join(__dirname, "../../SR_DB.db"));

const whoami = (req, res) => {
  console.log(req.session.user);
  res.json(req.session.user || null);
};

const login = (req, res) => {
  const { email, password } = req.body;

  // hash the password so it matches the ones you have in the db
  const hashedPassword = Encrypt.encrypt(password);
  // email is uniqe so first we check that one so let's check if a user exist in the db
  let query = /* SQL */ `SELECT * FROM users WHERE email = $email`;
  let params = {
    $email: email,
  };
  db.get(query, params, (err, user) => {
    // i know the email exists but not if the password match
    if (user === undefined || user.password !== hashedPassword) {
      console.log("inside if");
      res
        .status(404)
        .json({ err: err, message: "Email or password is incorrect" });
      return;
    } else if (user.email === email && user.password === hashedPassword) {
      console.log("It is a match, go a head an log in");
      delete user.password;
      req.session.user = user;

      res.status(200).json({
        success: "logged in",
        username: user.username,
        userid: user.userid,
      });
    }
    //delete passwaord before session starts
  });
};

const logout = (req, res) => {
  delete req.session.user;
  res.json({ succes: "User is logged out" });
};

const registerUser = (req, res) => {
  console.log(req.body);
  const { email, username, password } = req.body;

  // check if password is strong.
  const passwordIsStrong = utils.passwordValidator(password);

  // check if email is valid. 
  const validemail = utils.emailValidator(email)
  console.log(validemail);
  

  // first check if someone has that email
  let query = /* SQL */ `SELECT * from users WHERE email = $email`;
  let params = {
    $email: email,
  };
  console.log("query :", query);
  console.log("params :", params);

  db.get(query, params, (err, result) => {
    if (result) {
      res.status(404).json({ err: err, failed: "This email already exists" });
      return;
      // check if password is strong enough
    } else if(!validemail) {
      res.status(404).json({ failed: "Email is not strong enough" });
      return;
    } else if (!passwordIsStrong) {
      res.status(404).json({ failed: "Password is not strong enough" });
      return;
    } else {
      // email does not exist and password is strong so go ahead and run this code
      query = /* SQL */ `INSERT INTO users (email, username, password) VALUES($email, $username, $password)`;
      params = {
        $email: email,
        $username: username,
        $password: Encrypt.encrypt(password),
      };

      console.log("query :", query);
      console.log("params :", params);

      db.run(query, params, function (err) {
        if (err) {
          console.log("inside run", err);
          res.status(404).json({ err: err });
          return;
        }
        res
          .status(200)
          .json({ succes: "User registered successful", lasID: this.lastId });
      });
    } // end of last else
  }); // end of get
};

module.exports = {
  whoami,
  login,
  logout,
  registerUser,
};
