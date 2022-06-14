const eventHandlers = {
  passwordReset: require("./handlers/passwordReset").handler,
};

const types = Object.keys(eventHandlers);

exports.handler = async (event) => {
  const type = event?.type;

  if (!type || !types.includes(type))
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Invalid type",
        message: "The event type does not exist",
      }),
    };

  return await eventHandlers[type](event);
};
