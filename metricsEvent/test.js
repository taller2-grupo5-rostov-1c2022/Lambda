exports.handler = async () => {
  const event = {
    type: "passwordReset",
    payload: {
      email: "email@domain",
    },
  };

  await require("./index.js")
    .handler(event)
    .then((res) => console.log(res));
};
