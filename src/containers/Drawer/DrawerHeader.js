import React from 'react';
import { Drawer as MaterialDrawer, Subheader } from 'react-native-material-ui';
import { StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';

import drawerHeaderImg from '../../assets/drawer-header.jpg';

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'flex-end',
  },

  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  text: {
    color: 'white',
    fontSize: 20,
  },
});

class DrawerHeader extends React.Component {
  render() {
    return (
      <MaterialDrawer.Header
        style={{
          contentContainer: styles.contentContainer,
        }}
      >
        <Image
          source={drawerHeaderImg}
          resizeMode="cover"
          style={styles.image}
        />
        <Subheader
          text={Constants.manifest.name}
          style={{
            text: styles.text,
          }}
        />
      </MaterialDrawer.Header>
    );
  }
}

export default DrawerHeader;
