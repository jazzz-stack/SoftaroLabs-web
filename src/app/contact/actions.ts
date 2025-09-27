'use server';

import { z } from 'zod';
import { analyzeContactForm, ContactFormOutput } from '@/ai/flows/contact-form-analysis';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: ContactFormOutput;
};

export async function submitContactForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: 'Invalid form data',
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const aiResponse = await analyzeContactForm(parsed.data);
    
    return {
      message: 'success',
      data: aiResponse,
    };
  } catch (error) {
    return {
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
