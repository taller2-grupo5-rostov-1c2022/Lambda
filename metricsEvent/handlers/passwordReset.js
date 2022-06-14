exports.handler = async (event) => {
  const type = event?.type;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello!`,
      type,
    }),
  };
};
