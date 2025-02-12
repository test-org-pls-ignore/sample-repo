const prompt = `You are a friendly expert`;
const response = await client.path("/chat/completions").post({
  body: {
    messages: [{ role: "user", content: prompt }],
    model: model
  }
});
