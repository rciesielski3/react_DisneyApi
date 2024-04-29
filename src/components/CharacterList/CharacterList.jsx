import { useState, useEffect } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import GetCharacters from "../GetCharacters";
import { ListWrapper, LoadingMessage } from "./CharacterList.styles";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

const CharacterList = ({ theme }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    characters,
    loading,
    totalPages,
    setCurrentPage: setCharactersPage,
  } = GetCharacters(currentPage);

  const loadPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCharactersPage(currentPage);
  }, [currentPage, setCharactersPage]);

  if (loading && characters.length === 0) {
    return <LoadingMessage />;
  }

  return (
    <div>
      <ListWrapper theme={theme}>
        {characters.map((character) => (
          <CharacterCard
            key={character._id}
            character={character}
            theme={theme}
          />
        ))}
      </ListWrapper>
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        loadPage={loadPage}
        theme={theme}
      />
    </div>
  );
};

export default CharacterList;
