const fetch = require('node-fetch');

const json = 'format=json';
const paginationFalse  = 'pagination=false';


const getAllPrograms = async (req, res) => {

    let allprograms = await fetch(`http://api.sr.se/api/v2/programs/index?${json}&${paginationFalse}`)
    allprograms = await allprograms.json()
    res.json(allprograms)

}


const getProgramsForChannel = async (req, res) => {
    let programs = await fetch(`http://api.sr.se/api/v2/programs/index?channelid=${req.params.channelId}&${json}&${paginationFalse}`); 
    programs = await programs.json(); 
    res.json(programs); 
  }


module.exports = {
    getAllPrograms,
    getProgramsForChannel
    
}