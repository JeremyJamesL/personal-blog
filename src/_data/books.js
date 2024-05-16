const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  const url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";

  return EleventyFetch(url, {
    duration: "1d",
    type: "json",
  });
};

// https://www.goodreads.com/review/list?v=2
// https://www.goodreads.com/api/index#user.show
