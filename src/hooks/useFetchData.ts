import { useState, useEffect } from 'react';
import { IReadingRow } from '../interfaces/IReadingRow';

const useFetchData = () => {
  const [results, setResults] = useState<IReadingRow[]>([]);

  useEffect(() => {
    const url = `https://storage.googleapis.com/bulb-interview/meterReadingsReal.json`;
    fetch(url)
      .then(response => response.json())
      .then(data => setResults(data.electricity));
  }, []);

  return results;
};

export default useFetchData;
