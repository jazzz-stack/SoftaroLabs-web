'use server';

/**
 * @fileOverview Analyzes contact form submissions to determine customer fit,
 * suggests automated replies, and identifies relevant experts.
 *
 * - analyzeContactForm - A function that analyzes contact form data.
 * - ContactFormInput - The input type for the analyzeContactForm function.
 * - ContactFormOutput - The return type for the analyzeContactForm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  message: z.string().describe('The message submitted in the contact form.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  customerFitAnalysis: z.string().describe('An analysis of how well the customer fits the company profile.'),
  suggestedReply: z.string().describe('A suggested automated reply to the contact form submission.'),
  relevantExperts: z.array(z.string()).describe('A list of relevant experts best suited to reply to the submission.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function analyzeContactForm(input: ContactFormInput): Promise<ContactFormOutput> {
  return analyzeContactFormFlow(input);
}

const analyzeContactFormPrompt = ai.definePrompt({
  name: 'analyzeContactFormPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  prompt: `You are an AI assistant tasked with analyzing contact form submissions.

  Analyze the submission to determine the customer's fit with our company.
  Suggest an automated reply to the submission.
  List the relevant experts best suited to reply to the submission.

  Contact Form Submission:
  Name: {{{name}}}
  Email: {{{email}}}
  Message: {{{message}}}`,
});

const analyzeContactFormFlow = ai.defineFlow(
  {
    name: 'analyzeContactFormFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async input => {
    const {output} = await analyzeContactFormPrompt(input);
    return output!;
  }
);
