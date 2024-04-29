import styled, { keyframes } from "styled-components";

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const loadingAnimation = keyframes`
  0%, 100% {
    content: "Loading";
  }
  25% {
    content: "Loading.";
  }
  50% {
    content: "Loading..";
  }
  75% {
    content: "Loading...";
  }
`;

export const LoadingMessage = styled.div`
  font-size: 38px;
  color: #333;
  position: relative;

  &::after {
    content: "Loading...";
    animation: ${loadingAnimation} 1s linear infinite;
  }
`;
