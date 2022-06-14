const https = require("https");
const { success } = require("../util/log");

const route = "https://jsonplaceholder.typicode.com/todos/1";

exports.handler = async (event) => {
  const res = await https.get(route);
  success("Successfully fetched " + route);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Success`,
      data: res?.outputData,
    }),
  };
};
