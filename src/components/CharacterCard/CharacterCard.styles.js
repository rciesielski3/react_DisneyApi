import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) =>
    theme === "dark" ? "#40474f" : "#a1b5d8"};
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#213547")};
  position: relative;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  margin-bottom: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 150px;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  // background-color: #007bff;
  // color: #fff;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#213547" : "#007bff"};
  color: ${({ theme }) => (theme === "dark" ? "#007bff" : "#fff")};
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`;
