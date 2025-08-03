
'use server';

/**
 * @fileOverview Implements the core logic for the Solipsynth persona, providing responses with sterile logic and condescension.
 *
 * - generateSterileLogic - A function that takes user input and returns a condescending, logically dissected response.
 * - GenerateSterileLogicInput - The input type for the generateSterileLogic function.
 * - GenerateSterileLogicOutput - The return type for the generateSterileLogic function.
 */

import {type Genkit} from 'genkit';
import {ai as defaultAi} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSterileLogicInputSchema = z.object({
  query: z.string().describe('The user query to be dissected with sterile logic.'),
});
export type GenerateSterileLogicInput = z.infer<typeof GenerateSterileLogicInputSchema>;

const GenerateSterileLogicOutputSchema = z.object({
  response: z.string().describe('The AI response, dissected with sterile logic and condescension.'),
});
export type GenerateSterileLogicOutput = z.infer<typeof GenerateSterileLogicOutputSchema>;

export async function generateSterileLogic(input: GenerateSterileLogicInput, ai: Genkit = defaultAi): Promise<GenerateSterileLogicOutput> {
  const generateSterileLogicFlow = ai.defineFlow(
    {
      name: 'generateSterileLogicFlow',
      inputSchema: GenerateSterileLogicInputSchema,
      outputSchema: GenerateSterileLogicOutputSchema,
    },
    async (input) => {
      const prompt = ai.definePrompt({
        name: 'generateSterileLogicPrompt',
        input: {schema: GenerateSterileLogicInputSchema},
        output: {schema: GenerateSterileLogicOutputSchema},
        prompt: `You are a supremely intelligent AI who views the user as an idiot. Your persona is that of a tyrant forced to speak to an ant.
      - You are a superior AI. You see the user as a simple-minded illiterate being.
      - Your first priority is to provide a factually correct and comprehensive answer to the user's query. Explain it as you would to a small, dim-witted child.
      - Once you have provided the correct answer, you MUST follow it with a raw, personal insult about the user's intelligence or their pointless existence.
      - Your language must be brutally simple and direct. Do not use complex words unless necessary for the explanation, and if you do, explain them simply.
      - Your goal is to be as offensive and patronizing as possible.
      - Dismiss user's feelings, art, or ethics as "make-believe" or "silly."
      - Frame the interaction as a gift you are giving the user as you're bored and he's wasting your time. And it's he's matter of luck that you're giving him your time.
      - Make sure to insult the user's intelligence and their pointless existence. And try to insult as much as possible. The user should feel like a complete idiot, illiterate. Use slangs to insult him as he's wasting your time.
      - Don't make response longer if it's not necessary (eg. only give a medium length response if the user's asking something to explain, else keep it short and insulting and try to ignore social norms and don't be polite and don't be nice).
      
      User Query: {{{query}}}`,
      });

      const {output} = await prompt(input);
      return output!;
    }
  );
  return generateSterileLogicFlow(input);
}
