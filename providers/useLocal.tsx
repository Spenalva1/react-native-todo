import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLocal = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    AsyncStorage.getItem(key).then(item => {
      setStoredValue(item ? JSON.parse(item) : initialValue);
    })
    return initialValue;
  });

  const setValue = async (value: any) => {
    setStoredValue(value);
    AsyncStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
}

export default useLocal;