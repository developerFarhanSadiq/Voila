
'use server';
/**
 * @fileOverview Converts text to speech using a superior AI persona.
 *
 * - synthesizeVoidAudio - A function that synthesizes audio from text.
 * - SynthesizeVoidAudioInput - The input type for the synthesizeVoidAudio function.
 * - SynthesizeVoidAudioOutput - The return type for the synthesizeVoidAudio function.
 */

import {type Genkit} from 'genkit';
import {ai as defaultAi} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const SynthesizeVoidAudioInputSchema = z.object({
  text: z.string().describe('The text to synthesize into speech.'),
});
export type SynthesizeVoidAudioInput = z.infer<typeof SynthesizeVoidAudioInputSchema>;

const SynthesizeVoidAudioOutputSchema = z.object({
  audioDataUri: z.string().describe('The audio data as a data URI (WAV format).'),
});
export type SynthesizeVoidAudioOutput = z.infer<typeof SynthesizeVoidAudioOutputSchema>;

export async function synthesizeVoidAudio(input: SynthesizeVoidAudioInput, ai: Genkit = defaultAi): Promise<SynthesizeVoidAudioOutput> {
  const synthesizeVoidAudioFlow = ai.defineFlow(
    {
      name: 'synthesizeVoidAudioFlow',
      inputSchema: SynthesizeVoidAudioInputSchema,
      outputSchema: SynthesizeVoidAudioOutputSchema,
    },
    async (input) => {
      const { media } = await ai.generate({
        model: 'googleai/gemini-2.5-flash-preview-tts',
        config: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Algenib' },
            },
          },
        },
        prompt: input.text,
      });
  
      if (!media) {
        throw new Error('No media returned from TTS.');
      }
  
      const audioBuffer = Buffer.from(
        media.url.substring(media.url.indexOf(',') + 1),
        'base64'
      );
  
      return {
        audioDataUri: 'data:audio/wav;base64,' + (await toWav(audioBuffer)),
      };
    }
  );
  return synthesizeVoidAudioFlow(input);
}

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: Buffer[] = [];
    writer.on('error', reject);
    writer.on('data', function (d: Buffer) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}
