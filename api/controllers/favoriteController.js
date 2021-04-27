const sqlite3 = require("sqlite3");
const fetch = require("node-fetch");

const json = "format=json";
const paginationFalse = "pagination=false";

const path = require("path");


const db = new sqlite3.Database(path.join(__dirname, "../SR_DB.db"));

const saveFavoriteChannel = async (req, res) => {
    const { channelId, channelName, userId  } = req.body

    let query = /* SQL */ `INSERT INTO channels (channelname, userid, channelid)
                          VALUES ($channelname, $userid, $channelid)`
    let params = {
        $channelname: channelName,
        $userid: userId,
        $channelid: channelId
    }

    console.log(params);

    db.run(query, params, function(err) {
        if(err) {
            console.log(err);
            res.status(404).json({err: err});
            return;
        }
        res.json({success: 'Saved channel succesfully'});

    })
 



 




};

module.exports = {
    saveFavoriteChannel
}