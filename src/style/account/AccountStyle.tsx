import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const AccountBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(-45deg, #b39d3d, #5f9ebd, #5872c2, #60488b);
  background-size: 600% 600%;
  animation: ${gradient} 15s ease-in-out infinite;
  overflow: hidden;
`;

export const AccountContentBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
