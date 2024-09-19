import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: sessionStorage.getItem("open_ai_key"),
    dangerouslyAllowBrowser: true,
});

export default openai;