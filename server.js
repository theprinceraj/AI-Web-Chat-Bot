const { OpenAIApi , Configuration } = require('openai');
const express = require('express');
const app = express();

app.use(express.static(__dirname,'public'));

const openai = new OpenAIApi(new Configuration({
    // replace your-api-key with your API key from ChatGPT
    apiKey: 'your-api-key'
}));

app.listen(3000, () => {
  console.log('Server live at http://localhost:3000');
});
