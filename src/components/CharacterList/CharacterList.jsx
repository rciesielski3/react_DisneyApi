import CharacterCard from "../CharacterCard/CharacterCard";
import useCharacterData from "../useCharacterData";
import { ListWrapper, LoadingMessage } from "./CharacterList.styles";
import PaginationButtons from "../PaginationButtons/PaginationButtons";

const CharacterList = ({ theme }) => {
  const {
    characters,
    loading,
    error,
    handlePageChange,
    currentPage,
    totalPages,
  } = useCharacterData();

  if (loading) {
    return <LoadingMessage />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!characters || characters.length === 0) {
    return <div>No characters found.</div>;
  }

  return (
    <div>
      <ListWrapper theme={theme}>
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} theme={theme} />
        ))}
      </ListWrapper>
      <PaginationButtons
        currentPage={currentPage}
        totalPages={totalPages}
        loadPage={handlePageChange}
        theme={theme}
      />
    </div>
  );
};

export default CharacterList;
