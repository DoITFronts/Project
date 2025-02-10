'use client';

import { createContext, useContext } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import Button from '../ui/Button';

interface FormProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<any>;
}

const FormContext = createContext<ReturnType<typeof useForm> | null>(null);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('Form components must be used within a <Form>');
  }
  return context;
}

export function Form({ children, onSubmit }: FormProps) {
  const methods = useForm();
  return (
    <FormContext.Provider value={methods}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </FormContext.Provider>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  validation?: object;
}

Form.Input = function Input({ name, validation, ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <input
        {...register(name, validation)}
        {...props}
        className="border rounded-xl bg-gray-50 text-gray-400 text-base font-medium font-['Pretendard'] leading-normal h-11 w-full px-4 py-2.5 inline-flex overflow-hidden mb-2"
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name]?.message as string}</p>}
    </div>
  );
};

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

Form.SubmitButton = function SubmitButton({ children, ...props }: SubmitButtonProps) {
  return (
    <Button {...props} className="w-full" color="filled">
      {children}
    </Button>
  );
};
