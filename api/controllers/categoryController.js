const fetch = require("node-fetch");

const json = "format=json";
const pagination = "pagination=false";

const getAllCategories = async (req, res) => {
  let categories = await fetch(
    `http://api.sr.se/api/v2/programcategories?${json}&${pagination}`
  );
  categories = await categories.json();
  res.json(categories);
};

const getFilteredProgramsByCategory = async (req, res) => {
  let filter = await fetch(
    `http://api.sr.se/api/v2/programs/index?programcategoryid=${req.params.id}&${json}`
  );
  filter = await filter.json();
  res.json(filter);
};

module.exports = {
  getAllCategories,
  getFilteredProgramsByCategory,
};
