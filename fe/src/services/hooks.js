import { useCallback } from "react";

export const useServiceCall = () => {
  const exec = useCallback(async (serviceFutures, errorHandler=()=>{}) => {
    try {
      const futures = Array.isArray(serviceFutures) ? serviceFutures : [serviceFutures];
      const responses = await Promise.all(futures);
      if(responses.length === 1) {
        return responses[0];
      }
      return responses;
    } catch(e) {
      errorHandler();
      return null;
    }
  }, []);

  return exec;
}
