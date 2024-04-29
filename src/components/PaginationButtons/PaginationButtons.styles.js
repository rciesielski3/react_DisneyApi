import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: ${({ isActive, theme }) =>
    isActive ? "#007bff" : theme === "dark" ? "#213547" : "#fff"};
  color: ${({ isActive, theme }) =>
    isActive ? "#fff" : theme === "dark" ? "#007bff" : "#007bff"};
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
