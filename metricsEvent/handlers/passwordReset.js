const { Firestore, FieldValue } = require("@google-cloud/firestore");

exports.handler = async (event) => {
  try {
    const type = event?.type;

    const firestore = new Firestore();

    firestore.doc("metrics/users").update({
      passwordReset: FieldValue.increment(1),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Successfully incremented ${type}`,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
