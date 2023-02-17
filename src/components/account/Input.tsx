import styled from "styled-components";
import { motion } from "framer-motion";

const LoginInputBlock = styled(motion.div)``;

const LoginInputLabel = styled(motion.label)`
  font-family: "Aldrich", sans-serif;
  margin-left: 15px;
`;

const LoginInput = styled(motion.input)`
  width: 240px;
  height: 48px;
  margin-top: 5px;
  border-bottom: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #000000;
  box-shadow: #000000 2px 2px 2px;
  transition: all 0.5s;
  padding: 5px 20px;
  &:active {
    box-shadow: #000000 2px 2px 2px inset;
  }
  &:focus {
    box-shadow: #000000 2px 2px 2px inset;
    background: rgba(255, 255, 255, 0.9);
    outline: none;
  }
`;

// const loginInputAnimation: any = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   transition: { delay: 5, duration: 0.5 },
// };

type InputForAccountType = {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export const InputForAccount = ({
  type,
  name,
  value,
  onChange,
  required = true,
}: InputForAccountType) => {
  return (
    <LoginInputBlock
    // variants={loginInputAnimation}
    // initial="initial"
    // animate="animate"
    // transition={{
    //   delay: 0.5,
    // }}
    >
      <LoginInputLabel>{name}</LoginInputLabel>
      <LoginInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </LoginInputBlock>
  );
};
