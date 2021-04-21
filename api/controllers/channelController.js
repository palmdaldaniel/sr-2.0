const fetch = require('node-fetch');
const json = 'format=json'
const pagination  = 'pagination=false'


const getAllChannels = async (req, res) => {
    let channels = await fetch(`http://api.sr.se/api/v2/channels?${json}`);
    channels = await channels.json();
    res.json(channels);

}

module.exports = {
getAllChannels
}