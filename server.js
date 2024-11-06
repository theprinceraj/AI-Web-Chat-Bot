const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
// const openai = new OpenAIApi(new Configuration({
//     // replace your-api-key with your API key from ChatGPT
//     apiKey: "your-api-key",
// }));

app.post("/chat", async (req, res) => {
    try {
        // const resp = await openai.createChatCompletion({
        //     model: "gpt-3.5-turbo",
        //     messages: [
        //         {role: "user", content: req.body.question},
        //     ],
        // });

        res.status(200).json({message: resp.data.choices[0].message.content});
    } catch (e) {
        res.status(400).json({message: e.message});
    }
});

app.listen(3000, () => {
    console.log("Server live at http://localhost:3000");
});
