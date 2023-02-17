import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PrimaryStyleButtonForMotion,
  SecondaryStyleButtonForMotion,
} from "../common/Button";

// const loginButtonAnimation = {
//   initial: { y: "-59px" },
//   animate: { y: "0px", transition: { duration: 0.5 } },
//   exit: { opacity: 0, transition: { duration: 1 } },
// };

// const secondaryButtonAnimation = {
//   initial: { opacity: 1 },
//   animate: { opcaity: 1, transition: { duration: 0.5 } },
//   exit: { opacity: 0, transition: { duration: 1 } },
// };

// const signInButtonForFirstPageAnimation = {};

// const createAccountButtonForFirstPageAnimation = {
//   initial: { opacity: 1 },
//   animate: { opcaity: 1, transition: { duration: 0.5 } },
//   exit: { opacity: 0, transition: { duration: 1 } },
// };

export const SignInButtonForFirstPage = () => {
  const navigate = useNavigate();

  const toLink = () => {
    navigate("/account/login");
  };

  return (
    <PrimaryStyleButtonForMotion
      id="primary"
      onClick={toLink}
      layoutId="sign_in"
      // variants={loginButtonAnimation}
      // initial="initial"
      // animate="animate"
    >
      sign in
    </PrimaryStyleButtonForMotion>
  );
};

export const CreateAccountButtonForFirstPage = () => {
  const navigate = useNavigate();

  const toLink = () => {
    navigate("/account/signup");
  };

  return (
    <SecondaryStyleButtonForMotion
      id="secondary"
      onClick={toLink}
      // variants={createAccountButtonForFirstPageAnimation}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      // layoutId="create_account"
    >
      create account
    </SecondaryStyleButtonForMotion>
  );
};

export const SignInButtonForLoginPage = () => {
  const navigate = useNavigate();

  const toLink = () => {
    navigate("/");
  };

  return (
    <PrimaryStyleButtonForMotion
      id="primary"
      // onClick={toLink}
      animate={{ transition: { type: "easeInOut" } }}
      // variants={loginButtonAnimation}
      // initial="initial"
      // animate="animate"
      // layoutId="sign_in"
    >
      sign in
    </PrimaryStyleButtonForMotion>
  );
};

export const CreateAccountButtonForSignUpPage = () => {
  const navigate = useNavigate();

  const toLink = () => {
    navigate("/");
  };

  return (
    <PrimaryStyleButtonForMotion
      id="primary"
      // onClick={toLink}
      layoutId="create_account"
      // variants={loginButtonAnimation}
      // initial="initial"
      // animate="animate"
    >
      create account
    </PrimaryStyleButtonForMotion>
  );
};
