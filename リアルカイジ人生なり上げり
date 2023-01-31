import { Configuration, OpenAIApi } from 'openai';
 
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
 
const openai = new OpenAIApi(configuration);
const basePromptPrefix =
`
下記のタイトルのブログ記事の詳細な目次を書いてください。
 
  タイトル:
`
 
const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)
 
  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.8,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();
 
  // I build Prompt #2.
  const secondPrompt = 
  `
  以下のブログ記事の目次とタイトルを参考に、ポールグラハムの文体で書かれたブログ記事を作成してください。ストーリーのある文章にしてください。ポイントを列挙するだけではいけません。一つ一つを深く掘り下げて、なぜそうなるのかを説明してください。
 
  タイトル: ${req.body.userInput}
 
  目次: ${basePromptOutput.text}
 
  ブログ:
  `
  
  // I call the OpenAI API a second time with Prompt #2
  const secondPromptCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${secondPrompt}`,
    // I set a higher temperature for this one. Up to you!
    temperature: 0.85,
        // I also increase max_tokens.
    max_tokens: 1250,
  });
  
  // Get the output
  const secondPromptOutput = secondPromptCompletion.data.choices.pop();
 
  // Send over the Prompt #2's output to our UI instead of Prompt #1's.
  res.status(200).json({ output: secondPromptOutput });
};
 
export default generateAction;
