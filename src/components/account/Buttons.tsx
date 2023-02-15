import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PrimaryButtonForAccount = styled(motion.button)`
  width: 240px;
  height: 48px;
  border-radius: 20px;
  background-color: #e0b3b3;
  border-style: hidden;
  color: #000000;
  transition: all 1s;
  &:hover {
    background-color: #e0b3b3;
  }
  &:active {
    box-shadow: #000000 2px 2px 2px inset;
  }
  font-family: "Aldrich", sans-serif;
  font-size: 16px;
  text-transform: none;
  box-shadow: #000000 2px 2px 2px;
`;

const SecondaryButtonForAccount = styled(motion.button)`
  width: 240px;
  height: 48px;
  border-radius: 20px;
  background-color: #ffffff;
  border-style: hidden;
  transition: all 1s;
  &:hover {
    background-color: #ffffff;
  }
  &:active {
    box-shadow: #000000 2px 2px 2px inset;
  }
  color: #000000;
  font-family: "Aldrich", sans-serif;
  font-size: 16px;
  text-transform: none;
  box-shadow: #000000 2px 2px 2px;
`;

const loginButtonAnimation = {
  initial: { y: "-59px" },
  animate: { y: "0px", transition: { duration: 0.5 } },
};

type ButtonForAccountType = {
  primary?: boolean;
  buttonAnimated?: boolean | undefined;
  children: React.ReactNode;
};

export const ButtonForAccount = ({
  primary,
  buttonAnimated,
  children,
}: ButtonForAccountType) => {
  const navigate = useNavigate();
  const location = useLocation();

  const toLink = (e: React.MouseEvent) => {
    const { id } = e.target as HTMLElement;
    if (id === "primary") {
      switch (location.pathname) {
        case "/":
          navigate("/account/login");
          break;
        case "/account/login":
          navigate("/");
          break;
        case "/account/signup":
          navigate("/");
          break;
        default:
          alert("set link for move another page!");
          break;
      }
    } else {
      navigate("/account/signup");
    }
  };

  if (primary) {
    if (buttonAnimated) {
      return (
        <PrimaryButtonForAccount
          id="primary"
          onClick={toLink}
          variants={loginButtonAnimation}
          initial="initial"
          animate="animate"
        >
          {children}
        </PrimaryButtonForAccount>
      );
    } else {
      return (
        <PrimaryButtonForAccount id="primary" onClick={toLink}>
          {children}
        </PrimaryButtonForAccount>
      );
    }
  } else {
    return (
      <SecondaryButtonForAccount id="secondary" onClick={toLink}>
        {children}
      </SecondaryButtonForAccount>
    );
  }
};
