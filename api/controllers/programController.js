const fetch = require('node-fetch');

const json = 'format=json';
const paginationFalse  = 'pagination=false';


const getAllPrograms = async (req, res) => {

    let allprograms = await fetch(`http://api.sr.se/api/v2/programs/index?${json}&${paginationFalse}`)
    allprograms = await allprograms.json()
    res.json(allprograms)

}


module.exports = {
    getAllPrograms
}