const { success } = require("../util/log");

exports.handler = async (event) => {
  success("Test Ran Successfully");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Success`,
    }),
  };
};
