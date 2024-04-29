import { useState } from "react";
import { CardWrapper, Image, Title, Button } from "./CharacterCard.styles";
import CharacterModal from "../CharacterModal/CharacterModal";

const CharacterCard = ({ character, theme }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CardWrapper theme={theme}>
        <Image src={character.imageUrl} alt={character.name} />
        <Title>{character.name}</Title>
        <Button theme={theme} onClick={openModal}>
          More info
        </Button>
      </CardWrapper>
      {modalOpen && (
        <CharacterModal
          character={character}
          onClose={closeModal}
          theme={theme}
        />
      )}
    </>
  );
};

export default CharacterCard;
