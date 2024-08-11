import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';

// Accept the thunk as an argument to the useThunk hook
const useThunk = (thunk) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
  
    // Memoize the thunk execution function
    const runThunk = useCallback((arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => setIsError(err))
        .finally(() => setIsLoading(false));
    }, [dispatch, thunk]); // Add thunk as a dependency
  
    return [runThunk, isError, isLoading];
};

export default useThunk;