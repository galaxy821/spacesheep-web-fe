import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

type useFormType<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void];
type useAndSetFormType<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>
];

export type useFormStateobjectForLoginType = {
  email: string;
  password: string;
};
export type useFormStateobjectForSignUpType = {
  email: string;
  password: string;
  rePassword: string;
};

export function useForm<T>(initialState: T): useFormType<T> {
  const [state, setState] = useState(initialState);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((state) => ({ ...state, [name]: value }));
  }, []);

  return [state, onChange];
}

export function useAndSetForm<T>(initialState: T): useAndSetFormType<T> {
  const [state, setState] = useState(initialState);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((state) => ({ ...state, [name]: value }));
  }, []);

  return [state, onChange, setState];
}
