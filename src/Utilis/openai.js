import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';
const openai = new OpenAI({
  apiKey: OPENAI_KEY, 
  dangerouslyAllowBrowser:true,// This is the default and can be omitted
});
export default openai;
// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }
