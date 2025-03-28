import React, { useState, useEffect } from 'react';
import { fetchData } from '../fetch';

interface DataDisplayProps {
  url: string;
}

export const DataDisplay: React.FC<DataDisplayProps> = ({ url }: {url: string}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(url);
        setData(result);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  if (loading) return <p className="text-gray-600">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!data) return null;

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-2">Data Display</h2>
      <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
