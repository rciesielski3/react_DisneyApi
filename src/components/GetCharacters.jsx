import { useState, useEffect } from "react";

const BASE_URL = "https://api.disneyapi.dev";

const GetCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCharacters([]);
        setLoading(true);
        setError(null);

        const [characterResponse, infoResponse] = await Promise.all([
          fetch(`${BASE_URL}/character?page=${currentPage}&pageSize=12`),
          fetch(`${BASE_URL}/character`),
        ]);

        if (!characterResponse.ok || !infoResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const [characterData, infoData] = await Promise.all([
          characterResponse.json(),
          infoResponse.json(),
        ]);

        setCharacters(() => [...characterData.data]);
        setTotalPages(infoData.info.totalPages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  return { characters, loading, error, setCurrentPage, totalPages };
};

export default GetCharacters;
