const { error: logError, info } = require("./util/log");

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

  try {
    return await eventHandlers[type](event);
  } catch (e) {
    logError(`Error handling event: `, e.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: e.message,
      }),
    };
  }
};
