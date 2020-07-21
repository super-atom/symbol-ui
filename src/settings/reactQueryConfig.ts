const reactQueryConfig = {
  queries: {
    retry: 1,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    staleTime: 0,
    cacheTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false
  },
}

export default reactQueryConfig;