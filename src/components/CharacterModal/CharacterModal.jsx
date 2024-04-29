import { useRef } from "react";
import { createPortal } from "react-dom";
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

const CharacterModal = ({ character, onClose, theme }) => {
  const modalRootRef = useRef(document.getElementById("modal-root"));
  const filteredInfo = filterCharacterInfo(character);

  return createPortal(
    <ModalOverlay theme={theme}>
      <ModalContainer theme={theme}>
        <ModalContent theme={theme}>
          <CloseButton theme={theme} onClick={onClose}>
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
    modalRootRef.current
  );
};

export default CharacterModal;
