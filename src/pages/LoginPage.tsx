import React from "react";
import Block from "../components/common/Block";
import { SpacesheepLogo } from "../components/common/Logo";
import { SpacesheepMainTitle } from "../components/common/Title";
import { InputForAccount } from "../components/account/Input";
import { ButtonForAccount } from "../components/account/Buttons";
import useAuth from "../store/Auth";

const LoginPage = () => {
  return (
    <>
      <SpacesheepMainTitle>spacesheep</SpacesheepMainTitle>
      <Block size={60}></Block>
      <SpacesheepLogo></SpacesheepLogo>
      <Block size={50}></Block>
      <form>
        <InputForAccount type="email"></InputForAccount>
        <Block size={10}></Block>
        <InputForAccount type="password"></InputForAccount>
        <Block size={30}></Block>
        <ButtonForAccount primary={true} buttonAnimated={true}>
          sign in
        </ButtonForAccount>
      </form>
    </>
  );
};

export default LoginPage;
