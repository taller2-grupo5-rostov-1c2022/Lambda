exports.handler = async () => {
  const passwordResetEvent = {
    type: "passwordReset",
    payload: {
      email: "email@domain",
    },
  };

  const testEvent = {
    type: "test",
  };

  await require("./index.js")
    .handler(passwordResetEvent)
    .then((res) => console.log(res));

  await require("./index.js")
    .handler(testEvent)
    .then((res) => console.log(res));
};
