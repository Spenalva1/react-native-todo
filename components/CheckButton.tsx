import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import CheckGradient from './icons/CheckGradient';
import Check from './icons/Check';

interface CheckButtonProps {
  check: boolean,
  toggleCheck: Function,
}

export default function CheckButton({check, toggleCheck}: CheckButtonProps) {
  return (
    <Pressable style={styles.checkButton} onPress={() => toggleCheck()}>
      {check && <CheckGradient />}
      {check && <Check style={styles.check} />}
    </Pressable>
  )
}
const styles = StyleSheet.create({
  checkButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  check: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [
      {
        translateY: -4.5,
      }, {
        translateX: -4.5,
      },
      {
        scale: 1.3
      }
    ]
  },
})
