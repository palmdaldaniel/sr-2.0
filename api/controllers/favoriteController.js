const sqlite3 = require("sqlite3");
const fetch = require("node-fetch");

const json = "format=json";
const paginationFalse = "pagination=false";

const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "../../SR_DB.db"));

const getFavoriteChannels = async (req, res) => {
  const { id } = req.params;
  let query = /* SQL */ `SELECT * FROM channels WHERE userid = $userid`;
  let params = {
    $userid: id,
  };

  db.all(query, params, (err, favoriteChannels) => {
    if (err) {
      res.status(404).json({ err: err });
      return;
    }
    res.json(favoriteChannels);
  });
};

const saveFavoriteChannel = async (req, res) => {
  const { channelId, channelName, userId } = req.body;
  

  let query = /* SQL */ `INSERT INTO channels (channelname, userid, channelid)
                          VALUES ($channelname, $userid, $channelid)`;
  let params = {
    $channelname: channelName,
    $userid: userId,
    $channelid: channelId,
  };

  db.run(query, params, function (err) {
    if (err) {
      console.log(err);
      res.status(404).json({ err: err });
      return;
    }
    res.json({ success: "Saved channel succesfully" });
  });
};


const saveFavoriteProgram = async (req, res) => {
  console.log(req.body);
  const { programname, userid, programid  } = req.body
  
    let query = /* SQL */ `INSERT INTO programs (programname, userid, programid)
    VALUES ($programname, $userid, $programid)`

    let params = {
      $programname: programname,
      $userid: userid,
      $programid: programid

    }

    db.run(query, params, function (err) {
      if (err) {
        console.log(err);
        res.status(404).json({ err: err });
        return;
      }
      res.json({ success: "Saved program succesfully" });
    });
  };
  

module.exports = {
  getFavoriteChannels,
  saveFavoriteChannel,
  saveFavoriteProgram
};
