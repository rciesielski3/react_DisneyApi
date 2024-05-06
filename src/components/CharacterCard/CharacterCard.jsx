import { useState } from "react";
import { CardWrapper, Image, Title, Button } from "./CharacterCard.styles";
import CharacterModal from "../characterModal/CharacterModal";
import { useTheme } from "../context/ThemeContext";

const CharacterCard = ({ character }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { theme } = useTheme();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <CardWrapper theme={theme}>
      <Image src={character.imageUrl} alt={character.name} />
      <Title>{character.name}</Title>
      <Button theme={theme} onClick={openModal}>
        More info
      </Button>
      {modalOpen && (
        <CharacterModal
          character={character}
          onClose={closeModal}
          theme={theme}
        />
      )}
    </CardWrapper>
  );
};

export default CharacterCard;
