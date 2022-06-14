const { firestore, incrementField } = require("../firebase");
const { error: logError, info, success } = require("../util/log");

exports.handler = async (event) => {
  info(`Handling event: ${JSON.stringify(event)}`);
  try {
    const type = event?.type;

    info(`Updating Password Reset Metrics`);

    let documentRef = firestore.doc("metrics/users");

    await documentRef.update({
      passwordReset: incrementField(1),
    });

    success(`Successfully Updated Password Reset Metrics`);

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
