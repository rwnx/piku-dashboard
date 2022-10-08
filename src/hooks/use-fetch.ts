import React, { useEffect, useState } from "react";

export enum QueryStatus {
  Idle = 'idle',
  Fetching = 'fetching',
  Fetched = 'fetched',
}

interface ApiResponse<Data> {
  data: Data | null;
  // TODO: error type
  errors: any[];
}

interface FetchResult<Data> extends ApiResponse<Data> {
  status: QueryStatus;
}

export function useFetch<Data> (url: string): FetchResult<Data> {
  const [status, setStatus] = useState<QueryStatus>(QueryStatus.Idle);
  const [result, setData] = useState<ApiResponse<Data>>({ data: null, errors: [] });

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setStatus(QueryStatus.Fetching);
      const response = await fetch(url);
      const result: ApiResponse<Data> = await response.json();
      setData(result);
      setStatus(QueryStatus.Fetched);
    };

    fetchData();
  }, [url]);

  return { status, ...result };
}
