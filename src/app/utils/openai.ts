import {ChatCompletionRequestMessage, Configuration, OpenAIApi} from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const api = new OpenAIApi(config);

export const openai = {
  generate: async ()  => {
    const response = await api.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.6,
        messages: [{role: "user", content: "Hello world"}],
    })
    console.log(response.data.choices[0].message);
}
} 

openai.generate();
