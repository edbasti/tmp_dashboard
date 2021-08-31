import { useEffect, useState } from 'react';
import 'whatwg-fetch';
import { checkStatus } from '../utils/check-api-status';

type ResponseData<T> = T | undefined;
type ResponseError = Error | null;

interface UseAPIProps {
  url: string;
  options?: RequestInit;
  immediately: boolean;
}

export default function useAPI<T>({
  url,
  options = { headers: {} },
  immediately = true,
}: UseAPIProps): [
  ResponseData<T>,
  boolean,
  ResponseError,
  () => Promise<void>
] {
  const defaultOptions: RequestInit = {
    method: 'GET',
    // mode: 'same-origin',
    cache: 'default',
    // credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrer: 'client',
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ResponseError>(null);
  const [data, setData] = useState<ResponseData<T>>(undefined);

  useEffect(() => {
    if (immediately) {
      fetchUrl();
    }
  }, []);

  const fetchUrl = async () => {
    preFetch();
    try {
      const fetchOptions: RequestInit = {
        ...defaultOptions,
        ...options,
        headers: {
          ...defaultOptions.headers,
          ...options.headers,
        },
      };
      const response = await fetch(url, fetchOptions);
      checkStatus({ response, url });
      const json = await response.json();
      success(json);
    } catch (err) {
      failure(err);
    }
  };

  const preFetch = () => {
    setIsLoading(true);
    setError(null);
    setData(undefined);
  };

  const success = (data: ResponseData<T>) => {
    setIsLoading(false);
    setError(null);
    setData(data);
  };

  const failure = (error: ResponseError) => {
    setIsLoading(false);
    setError(error);
    setData(undefined);
  };

  return [data, isLoading, error, fetchUrl];
}
