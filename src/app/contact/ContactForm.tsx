'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';

import { submitContactForm, FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Bot, UserCheck, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Submitting...' : 'Submit Inquiry'}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const initialState: FormState = { message: '' };
  const [state, formAction] = useFormState(submitContactForm, initialState);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.message === 'success') {
      toast({
        title: 'Submission Successful!',
        description: 'Our AI has analyzed your request. See the results below.',
        variant: 'default',
      });
      form.reset();
    } else if (state.message && state.message !== 'Invalid form data') {
      toast({
        title: 'An Error Occurred',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, form]);

  return (
    <div>
      <form
        ref={form.ref}
        action={formAction}
        onSubmit={form.handleSubmit(() => formAction(new FormData(form.formState.isDirty ? form.control._fields._form : undefined)))}
        className="space-y-4 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...form.register('name')} placeholder="John Doe" />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...form.register('email')} placeholder="john.doe@example.com" />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" {...form.register('message')} placeholder="How can we help you today?" className="min-h-[150px]" />
          {form.formState.errors.message && (
            <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
          )}
        </div>
        {state.issues && (
            <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    Please fix the following issues:
                    <ul className="list-disc pl-5 mt-2">
                        {state.issues.map((issue, i) => <li key={i}>{issue}</li>)}
                    </ul>
                </AlertDescription>
            </Alert>
        )}
        <SubmitButton />
      </form>

      {state.data && (
        <div className="mt-12 space-y-6 animate-in fade-in duration-500">
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                        <div>
                            <CardTitle className="text-green-800 dark:text-green-300">Submission Received!</CardTitle>
                            <CardDescription className="text-green-700 dark:text-green-400">
                                Here is our AI-powered analysis of your inquiry.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
            </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Bot className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>Customer Fit Analysis</CardTitle>
                  <CardDescription>
                    An assessment of how your needs align with our services.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{state.data.customerFitAnalysis}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <UserCheck className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>Relevant Experts</CardTitle>
                  <CardDescription>
                    The best people on our team to handle your request.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {state.data.relevantExperts.map((expert, index) => (
                  <li key={index}>{expert}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Terminal className="h-6 w-6 text-secondary-foreground flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>Suggested Reply</CardTitle>
                  <CardDescription>
                    A draft reply to help our team respond faster.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-secondary rounded-md text-sm text-secondary-foreground">
                <p className="whitespace-pre-wrap font-mono">{state.data.suggestedReply}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
