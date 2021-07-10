import { useEffect, useState } from 'react';
import { BASE_URI } from '../utils/commons/config';
import { requestOptions } from '../utils/secruity/baseRest';

export async function retrieve() {
  await fetch(`${BASE_URI}api`, requestOptions)
    .then(async (res) => {
      if (!res.ok) {
        // return Promise.reject(res.statusText);
        return null;
      }

      const data = await res.json();
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
}

export function useAsyncHook() {
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState(false);

  async function fetchAPI() {
    try {
      setLoading(true);

      const response = await fetch(`${BASE_URI}api`, requestOptions);
      const json = await response.json();
      setData(json);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return [data, loading];
}
