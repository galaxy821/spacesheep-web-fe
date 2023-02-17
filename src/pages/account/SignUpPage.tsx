import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateAccountButtonForSignUpPage } from "../../components/account/Buttons";
import { InputForAccount } from "../../components/account/Input";
import Block from "../../components/common/Block";
import {
  useAndSetForm,
  useFormStateobjectForSignUpType,
} from "../../hooks/UseForm";

const SignupPage = () => {
  const [state, onChange, setState] =
    useAndSetForm<useFormStateobjectForSignUpType>({
      email: "",
      password: "",
      rePassword: "",
    });
  // const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.password === state.rePassword) {
      alert("회원가입하는 부분");
      navigate("/account/login", { replace: true });
    } else {
      alert("비밀번호가 다릅니다.");
      setState((prev) => ({ ...prev, password: "", rePassword: "" }));
    }
  };
  return (
    <>
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
        <Block size={10}></Block>
        <InputForAccount
          type="password"
          name="rePassword"
          value={state.rePassword}
          onChange={onChange}
        ></InputForAccount>
        <Block size={17}></Block>
        <CreateAccountButtonForSignUpPage />
      </form>
    </>
  );
};

export default SignupPage;
