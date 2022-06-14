const { Firestore, FieldValue } = require("@google-cloud/firestore");
const { error: logError, info, success } = require("../util/log");

exports.handler = async (event) => {
  info(`Handling event: ${JSON.stringify(event)}`);
  try {
    const type = event?.type;

    info(`Connecting to Firestore`);
    const firestore = new Firestore();
    info(`Connected to Firestore`);

    await firestore.doc("metrics/users").update({
      passwordReset: FieldValue.increment(1),
    });
    success(`Successfully handled event`);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Successfully incremented ${type}`,
      }),
    };
  } catch (error) {
    logError(`Error handling event`);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
