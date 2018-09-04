import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.grey300,
  },
});

class TabContent extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <View style={styles.container}>
        {children}
      </View>
    );
  }
}

export default TabContent;
