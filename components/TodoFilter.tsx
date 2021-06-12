import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useDarkMode } from '../providers/darkModeContext';
import GlobalStyle from '../styles/GlobalStyle';
import { Filter } from './Todo';

interface TodoFilterProps {
  setActiveFilter: Function,
  activeFilter: Filter,
}

const filters: Filter[] = ['ALL', 'ACTIVE', 'COMPLETED']

export default function TodoFilter({setActiveFilter, activeFilter}: TodoFilterProps) {
  const {darkMode} = useDarkMode();
  return (
    <View style={[styles.filter, darkMode ? styles.filterDark : styles.filterLight]}>
      {filters.map((filter, i) => (
        <Pressable key={i} onPress={() => setActiveFilter(filter)}>
        <Text
          style={[
            styles.text, 
            setTextStyle(darkMode, filter, activeFilter)
          ]}
        >{capitalize(filter)}</Text>
      </Pressable>
      ))}
    </View>
  )
}

const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
}

const setTextStyle = (darkMode: boolean, filter: Filter, activeFilter: Filter) => {
  if (filter === activeFilter) {
    return styles.active;
  }
  if (darkMode) {
    return styles.textDark;
  }
  return styles.textLight;
}

const { colorSet, fontSet } = GlobalStyle;

const styles = StyleSheet.create({
  filter: {
    margin: 24,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  filterDark: {
    backgroundColor: colorSet.darkVeryDarkDesaturatedBlue,
  },
  filterLight: {
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: fontSet.Bold,
    padding: 19
  },
  textLight: {
    color: colorSet.lightVeryDarkGrayishBlue
  },
  textDark: {
    color: colorSet.darkLightGrayishBlue
  },
  active: {
    color: colorSet.checkFrom
  },
})
