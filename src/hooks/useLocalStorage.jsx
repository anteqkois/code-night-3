import { useState } from 'react';

export function useLocalStorage(
  key,
  initialValue
) {
  const [storedValue, setStoredValue] = useState<S>(() => {
    try {
      const item = window.localStorage.getItem(key);
      const valueToStore =
        initialValue instanceof Function ? initialValue() : initialValue;
      return item ? JSON.parse(item) : valueToStore;
    } catch (error) {
      return initialValue instanceof Function ? initialValue() : initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = (keyToRemove) =>
    localStorage.removeItem(keyToRemove ?? key);

  return [storedValue, setValue, removeItem];
}

export default useLocalStorage;