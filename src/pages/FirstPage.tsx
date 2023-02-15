import * as React from "react";
// import { motion } from "framer-motion";
import { SpacesheepMainTitle } from "../components/common/Title";
import { ButtonForAccount } from "../components/account/Buttons";
import Block from "../components/common/Block";
import { SpacesheepLogo } from "../components/common/Logo";
// import styled from "styled-components";

// const MotionDiv = styled(motion.div)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

const FirstPage = () => {
  return (
    <>
      <SpacesheepMainTitle>spacesheep</SpacesheepMainTitle>
      <Block size={60}></Block>
      <SpacesheepLogo />
      <Block size={175}></Block>
      <ButtonForAccount primary={true}>sign in</ButtonForAccount>
      <Block size={30}></Block>
      <ButtonForAccount>create account</ButtonForAccount>
      <div className="socialLogin">{/*social login button section*/} </div>
    </>
  );
};

export default FirstPage;
