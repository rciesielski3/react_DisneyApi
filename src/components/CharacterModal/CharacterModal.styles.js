import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: ${({ theme }) =>
    theme === "dark" ? "#2D3339" : "#E3E8F3"};
  border-radius: 8px;
  padding: 20px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  background-color: ${({ theme }) => (theme === "dark" ? "#213547" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#007bff" : "#007bff")};
  border: 1px solid #007bff;
  position: absolute;
  top: 5px;
  right: 5px;
  &:hover {
    background-color: #0056b3;
    color: red;
  }
`;

export const CharacterImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const CharacterName = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FilteredList = styled.div`
  display: flex;
  margin-bottom: 10px;
  overflow-y: auto;
  max-height: 50vh;
  max-width: 80vh;
  > div {
    margin-right: 20px;
  }
  h3 {
    text-align: center;
    color: ${({ theme }) => (theme === "dark" ? "#213547" : "#000")};
  }
`;

export const FilteredListItem = styled.li`
  margin-bottom: 5px;
  color: ${({ theme }) => (theme === "dark" ? "333" : "#a1b5d8")};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => (theme === "dark" ? "#213547" : "#fff")};
  color: ${({ theme }) => (theme === "dark" ? "#007bff" : "#007bff")};
  border: 1px solid #007bff;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;
