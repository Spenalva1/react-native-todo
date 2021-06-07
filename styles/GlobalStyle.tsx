import { JosefinSans_400Regular, JosefinSans_700Bold } from "@expo-google-fonts/josefin-sans";

export const fontsToUse = {JosefinSans_700Bold, JosefinSans_400Regular};

const _fontSet = {
  Regular: 'JosefinSans_400Regular',
  Bold: 'JosefinSans_700Bold',
};

const _colorSet = {
  checkFrom: 'hsl(192, 100%, 67%)',
  checkTo: 'hsl(280, 87%, 65%)',
  lightVeryLightGray: 'hsl(0, 0%, 98%)',
  lightVeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
  lightLightGrayishBlue: 'hsl(233, 11%, 84%)',
  lightDarkGrayishBlue: 'hsl(236, 9%, 61%)',
  lightVeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
  darkVeryDarkBlue: 'hsl(235, 21%, 11%)',
  darkVeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
  darkLightGrayishBlue: 'hsl(234, 39%, 85%)',
  darkLightGrayishBluehover: 'hsl(236, 33%, 92%)',
  darkDarkGrayishBlue: 'hsl(234, 11%, 52%)',
  darkVeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
};

const GlobalStyle = {
  fontSet: _fontSet,
  colorSet: _colorSet
};

export default GlobalStyle;