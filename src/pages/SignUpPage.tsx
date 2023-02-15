import Block from "../components/common/Block";
import { ButtonForAccount } from "../components/account/Buttons";
import { InputForAccount } from "../components/account/Input";
import { SpacesheepLogo } from "../components/common/Logo";
import { SpacesheepMainTitle } from "../components/common/Title";

const SignupPage = () => {
  return (
    <>
      <SpacesheepMainTitle>spacesheep</SpacesheepMainTitle>
      <Block size={60}></Block>
      <SpacesheepLogo></SpacesheepLogo>
      <Block size={0}></Block>
      <InputForAccount type="email"></InputForAccount>
      <Block size={10}></Block>
      <InputForAccount type="password"></InputForAccount>
      <Block size={10}></Block>
      <InputForAccount type="password"></InputForAccount>
      <Block size={17}></Block>
      <ButtonForAccount primary={true}>create account</ButtonForAccount>
    </>
  );
};

export default SignupPage;
