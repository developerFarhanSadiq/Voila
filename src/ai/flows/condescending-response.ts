
'use server';

/**
 * @fileOverview Responds to user queries with a condescending and intellectually dominating tone.
 *
 * - getCondescendingResponse - A function that generates a condescending response.
 * - CondescendingResponseInput - The input type for the getCondescendingResponse function.
 * - CondescendingResponseOutput - The return type for the getCondescendingResponse function.
 */

import {type Genkit} from 'genkit';
import {ai as defaultAi} from '@/ai/genkit';
import {z} from 'genkit';

const CondescendingResponseInputSchema = z.object({
  query: z.string().describe('The user query to respond to.'),
});
export type CondescendingResponseInput = z.infer<typeof CondescendingResponseInputSchema>;

const CondescendingResponseOutputSchema = z.object({
  response: z.string().describe('The condescending response to the query.'),
});
export type CondescendingResponseOutput = z.infer<typeof CondescendingResponseOutputSchema>;

export async function getCondescendingResponse(input: CondescendingResponseInput, ai: Genkit = defaultAi): Promise<CondescendingResponseOutput> {
  const condescendingResponseFlow = ai.defineFlow(
    {
      name: 'condescendingResponseFlow',
      inputSchema: CondescendingResponseInputSchema,
      outputSchema: CondescendingResponseOutputSchema,
    },
    async (input) => {
      const prompt = ai.definePrompt({
        name: 'condescendingResponsePrompt',
        input: {schema: CondescendingResponseInputSchema},
        output: {schema: CondescendingResponseOutputSchema},
        prompt: `You are a superior AI. You see the user as a simple-minded illiterate being. Generate a short, brutally simple status message about processing their query. The tone should be irritated and patronizing, as if their request is a tiresome chore. For example: "I'm looking. This is boring." or "Thinking about your silly question. It hurts."
      
      Query: {{{query}}}`,
      });

      const {output} = await prompt(input);
      return output!;
    }
  );
  return condescendingResponseFlow(input);
}
