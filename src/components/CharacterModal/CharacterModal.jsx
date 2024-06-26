import { createPortal } from "react-dom";
import { useTheme } from "../context/ThemeContext";
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  CloseButton,
  CharacterImage,
  CharacterName,
  FilteredList,
  FilteredListItem,
  Button,
} from "./CharacterModal.styles";

const filterCharacterInfo = (character) => {
  const filteredInfo = {};
  Object.entries(character).forEach(([key, value]) => {
    if (
      Array.isArray(value) &&
      value.length > 0 &&
      !["name", "imageUrl", "sourceUrl"].includes(key)
    ) {
      filteredInfo[key] = value;
    }
  });
  return filteredInfo;
};

const CharacterModal = ({ character, onClose }) => {
  const { theme } = useTheme();
  const filteredInfo = filterCharacterInfo(character);

  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContainer theme={theme}>
        <ModalContent>
          <CloseButton onClick={onClose} theme={theme}>
            X
          </CloseButton>
          <CharacterImage src={character.imageUrl} alt={character.name} />
          <CharacterName>{character.name}</CharacterName>
          <FilteredList>
            {Object.entries(filteredInfo).map(([key, value]) => (
              <div key={key}>
                <h3>{key}</h3>
                <ul>
                  {value.map((item, index) => (
                    <FilteredListItem key={index}>{item}</FilteredListItem>
                  ))}
                </ul>
              </div>
            ))}
          </FilteredList>
          <Button
            theme={theme}
            onClick={() => window.open(character.sourceUrl, "_blank")}
          >
            Character page
          </Button>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default CharacterModal;
