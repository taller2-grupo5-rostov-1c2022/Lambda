const { TimeoutPromise } = require("./util/promise");
const { info } = require("./util/log");

const eventHandlers = {
  passwordReset: require("./handlers/passwordReset").handler,
  test: require("./handlers/test").handler,
};

const types = Object.keys(eventHandlers);

const invalidTypeError = {
  error: "Invalid type",
  message: "The event type does not exist",
};

exports.handler = async (event, context) => {
  const type = event?.type;
  info(`Received event of type ${type}`);

  if (!type || !types.includes(type))
    return {
      statusCode: 400,
      body: JSON.stringify(invalidTypeError),
    };

  return await TimeoutPromise.resolveWithTimeout(
    1000,
    eventHandlers[type](event)
  ).catch((error) => ({
    statusCode: 500,
    body: JSON.stringify({
      error: error.message,
    }),
  }));
};
