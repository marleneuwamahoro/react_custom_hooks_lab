import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Initialize state with the value from localStorage if it exists,
  // otherwise use the provided initialValue.
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  // Whenever the state or key changes, save the value to localStorage.
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  // Return the state and the setter function.
  return [state, setState];
}