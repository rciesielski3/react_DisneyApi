import { useState, useEffect } from "react";

const BASE_URL = "https://api.disneyapi.dev";

const useCharacterData = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${BASE_URL}/character?page=${currentPage}&pageSize=12`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const { data, info } = await response.json();

        setCharacters(data);
        setTotalPages(info.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return {
    characters,
    loading,
    error,
    handlePageChange,
    currentPage,
    totalPages,
  };
};

export default useCharacterData;
