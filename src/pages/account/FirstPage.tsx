import * as React from "react";
import Block from "../../components/common/Block";
import {
  CreateAccountButtonForFirstPage,
  SignInButtonForFirstPage,
} from "../../components/account/Buttons";

const FirstPage = () => {
  return (
    <>
      <Block size={165}></Block>
      <SignInButtonForFirstPage />
      <Block size={30}></Block>
      <CreateAccountButtonForFirstPage />
    </>
  );
};

export default FirstPage;
