import { LayoutGroup } from "framer-motion";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Block from "../../components/common/Block";
import { SpacesheepLogo } from "../../components/common/Logo";
import { SpacesheepMainTitle } from "../../components/common/Title";
import {
  AccountBackground,
  AccountContentBlock,
} from "../../style/account/AccountStyle";

export const AccountPageContainer = () => {
  return (
    <>
      <AccountBackground />
      <AccountContentBlock>
        <SpacesheepMainTitle>spacesheep</SpacesheepMainTitle>
        <Block size={60}></Block>
        <SpacesheepLogo />
        <LayoutGroup>
          <Outlet />
        </LayoutGroup>
      </AccountContentBlock>
    </>
  );
};
