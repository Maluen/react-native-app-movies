import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';
import { SafeAreaView } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop: Constants.statusBarHeight,
  },
});

const MainView = ({ children }) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
);

MainView.propTypes = {
  children: PropTypes.node,
};

MainView.defaultProps = {
  children: null,
};

export default MainView;
