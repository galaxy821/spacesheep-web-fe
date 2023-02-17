import styled from "styled-components";
import { motion } from "framer-motion";

export const PrimaryStyleButtonForMotion = styled(motion.button)`
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

export const SecondaryStyleButtonForMotion = styled(motion.button)`
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
