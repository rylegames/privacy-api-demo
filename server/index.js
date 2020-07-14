const express = require("express");
const axios = require("axios");
const CryptoJS = require("crypto-js");

const app = express();
const port = 3000;

// const apiKey = "7ec66d8f-884f-411a-9f93-92668fc8cf93";
// const api = "https://sandbox.privacy.com";

const apiKey = "64ec1e12-cdaa-4895-a23c-6cb9eb06ac2f";
const api = "https://api.privacy.com";

const callApi = async (request, response) => {
  const { method, path } = request;
  response.set("Access-Control-Allow-Origin", "*");
  try {
    const link = `${api}/v1${path}`;
    const { data } = await axios[method.toLowerCase()](link, {
      headers: { Authorization: `api-key ${apiKey}` },
      params: { ...request.query }
    });
    response.status(200);
    response.send({ ...data, link });
  } catch (err) {
    response.status(500);
    response.send(err);
  }
};

app.get("/card", callApi);
app.post("/card", callApi);
app.put("/card", callApi);

app.get("/fundingsource", callApi);
app.post("/fundingsource", callApi);

app.get("/transaction", callApi);

app.post("/simulate/authorize", callApi);
app.post("/simulate/void", callApi);
app.post("/simulate/clearing", callApi);
app.post("/simulate/return", callApi);

app.get("/embed/card", (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");

  const { card_token } = request.query;
  const embed_request_json = JSON.stringify({
    css: "https://example.com/default.css",
    token: card_token
  });

  const embed_request = Buffer.from(embed_request_json).toString("base64");
  const hmac = CryptoJS.enc.Base64.stringify(
    CryptoJS.HmacSHA256(embed_request_json, apiKey)
  );

  const link = `${api}/v1/embed/card`;
  const url = `${link}?embed_request=${embed_request}&hmac=${hmac}`;
  response.send({ link, url });
});

app.listen(port);
