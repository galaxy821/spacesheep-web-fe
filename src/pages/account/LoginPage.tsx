import { FormEvent } from "react";
import { SignInButtonForLoginPage } from "../../components/account/Buttons";
import { InputForAccount } from "../../components/account/Input";
import Block from "../../components/common/Block";
import { useForm, useFormStateobjectForLoginType } from "../../hooks/UseForm";

const LoginPage = () => {
  const [state, onChange] = useForm<useFormStateobjectForLoginType>({
    email: "",
    password: "",
  });
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(state.email + " " + state.password);
    /**api 통신하는 곳*/
  };
  return (
    <>
      <Block size={50}></Block>
      <form onSubmit={onSubmit}>
        <InputForAccount
          type="email"
          name="email"
          value={state.email}
          onChange={onChange}
        ></InputForAccount>
        <Block size={10}></Block>
        <InputForAccount
          type="password"
          name="password"
          value={state.password}
          onChange={onChange}
        ></InputForAccount>
        <Block size={30}></Block>
        <SignInButtonForLoginPage />
      </form>
    </>
  );
};

export default LoginPage;
