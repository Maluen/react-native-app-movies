import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, Linking, Image } from 'react-native';
import { Toolbar, Card, Subheader, Divider } from 'react-native-material-ui';

import MainView from '../components/MainView';

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
});

class SettingsScreen extends React.Component {
  static propTypes = {
  };

  handleBackIconPress = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <MainView>
        <Toolbar
          leftElement="md-arrow-back"
          onLeftElementPress={this.handleBackIconPress}
          centerElement="Settings"
        />
        <ScrollView style={styles.scrollView}>

        </ScrollView>
      </MainView>
    );
  }
}

const stateToProps = ({  }) => ({

});

const dispatchToProps = dispatch => ({

});

export default connect(stateToProps, dispatchToProps)(SettingsScreen);
