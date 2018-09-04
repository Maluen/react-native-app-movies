import { COLOR } from 'react-native-material-ui';
import { Constants } from 'expo';

// you can set your style right here, it'll be propagated to application
export const uiTheme = {
  palette: {
    primaryColor: COLOR.blueGrey500,
    accentColor: COLOR.deepOrange500,
  },
  toolbar: {
    container: {
      paddingTop: Constants.statusBarHeight,
      height: 50 + Constants.statusBarHeight,
    },
  },
  iconSet: 'Ionicons',
};
