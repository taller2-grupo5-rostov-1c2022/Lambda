require("dotenv").config();
const fetch = require("cross-fetch");

exports.handler = async (_event) => {
  const endpoint = process.env.ENDPOINT;
  const role = process.env.ROLE;
  const api_key = process.env.API_KEY;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      api_key,
      role,
    },
  });

  console.log(res);

  return res;
};
