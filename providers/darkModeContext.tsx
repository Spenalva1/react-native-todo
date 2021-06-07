import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DARK_MODE_KEY = 'darkmode';

const LocalStateContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});
const LocalStateProvider = LocalStateContext.Provider;

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = async () => {
    await AsyncStorage.setItem(DARK_MODE_KEY, JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  const getDarkmodeFromLocal = async () => {
    const item = await AsyncStorage.getItem(DARK_MODE_KEY);
    const localDarkMode = item ? JSON.parse(item) : false;
    setDarkMode(localDarkMode);
  }

  useEffect(() => {
    getDarkmodeFromLocal();
  }, []);

  return (
    <LocalStateProvider value={{ darkMode, toggleDarkMode }}>
      {children}
    </LocalStateProvider>
  );
};

const useDarkMode = () => {
  const all = useContext(LocalStateContext);
  return all;
};

export { DarkModeProvider, useDarkMode, LocalStateContext };
