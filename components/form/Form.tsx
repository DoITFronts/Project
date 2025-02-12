'use client';

import Button from '../ui/Button';
import VALIDATION_RULES, { type Field, PASSWORD_CONFIRM_RULES } from '@/lib/formValidation';
import cn from 'clsx';
import {
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  useState,
} from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: () => void;
}
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: Field;
}
interface BaseProps {
  children: ReactNode | undefined;
  className?: string;
}

export default function Form({ onSubmit, id, className, children }: FormProps) {
  const methods = useForm();

  const formClass = cn('', className);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} id={id} className={formClass}>
        {children}
      </form>
    </FormProvider>
  );
}

function Label({ children, className }: LabelProps) {
  const labelClass = cn('block', className);

  return <label className={labelClass}> {children} </label>;
}

function LabelHeader({ children, className }: BaseProps) {
  const headerClass = cn(
    "font-['Pretendard'] text-[#595959] text-sm font-bold leading-tight",
    className,
  );

  return <h2 className={headerClass}>{children}</h2>;
}

const baseInputStyle =
  "h-11 px-4 py-2.5 bg-[#fcfcfc] rounded-xl justify-start items-center gap-2.5 inline-flex overflow-hidden w-full text-[#bfbfbf] text-base font-medium font-['Pretendard'] leading-normal ";

function Input({ className, name, ...rest }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputClass = cn(
    baseInputStyle,
    { 'outline outline-1 outline-error': !!errors[name] },
    className,
  );
  const placeholder = rest.placeholder ? rest.placeholder : name;

  return (
    <>
      <input
        {...register(name, VALIDATION_RULES[name])}
        className={inputClass}
        {...rest}
        placeholder={placeholder}
      />
      {errors[name] && <ErrorMessage className="">{String(errors[name].message)}</ErrorMessage>}
    </>
  );
}

// const eyeButtonStyle = 'h-24 w-24 text-gray-200';

function PasswordInput({ className, name, ...rest }: InputProps) {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const inputClass = cn(
    baseInputStyle,
    { 'outline outline-1 outline-error': !!errors[name] },
    className,
  );
  //   const EyeIcon = showPassword ? (
  //     <OpenEye className={eyeButtonStyle} />
  //   ) : (
  //     <ClosedEye className={eyeButtonStyle} />
  //   );
  const inputType = showPassword ? 'text' : 'password';
  const placeholder = rest.placeholder ? rest.placeholder : name;

  const registerOptions =
    name === 'passwordConfirmation'
      ? PASSWORD_CONFIRM_RULES(getValues('password'))
      : VALIDATION_RULES[name];

  return (
    <>
      <div className="relative">
        <input
          {...register(name, registerOptions)}
          className={inputClass}
          {...rest}
          type={inputType}
          placeholder={placeholder}
        />
        <button
          className="absolute bottom-10 right-16 xl:bottom-20"
          onClick={togglePasswordVisibility}
        >
          {/* {EyeIcon} */}
        </button>
      </div>
      {errors[name] && <ErrorMessage>{String(errors[name].message)}</ErrorMessage>}
    </>
  );
}

function Submit({ className, children }: BaseProps) {
  const { formState } = useFormContext();

  return (
    <Button type="submit" className={className} color="filled" disabled={!formState.isValid}>
      {children}
    </Button>
  );
}
function ErrorMessage({ className, children }: BaseProps) {
  const errrorClass = cn('text-red', className);

  return <span className={errrorClass}>{children}</span>;
}

Form.Label = Label;
Form.LabelHeader = LabelHeader;
Form.Input = Input;
Form.PasswordInput = PasswordInput;
Form.Submit = Submit;
