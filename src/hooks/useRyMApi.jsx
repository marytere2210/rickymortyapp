import { useState } from 'react';
import axios from 'axios'

function useRyMApi() {
const [data, setData]= useState(null)
const [loading, setLoading]= useState(false)
const [error, setError]= useState(null)

const request = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const resp = await axios.get(url);
      setData(resp.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, request };
}

export default useRyMApi;
