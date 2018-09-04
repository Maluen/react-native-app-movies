import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Drawer as MaterialDrawer } from 'react-native-material-ui';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, ScrollView, Text, Alert } from 'react-native';

import DrawerHeader from './DrawerHeader';
import * as libraryActions from '../../actions/library';
import * as rootActions from '../../actions/root';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemText: {
    fontWeight: 'bold',
  },

  itemTextDanger: {
    color: 'red',
  },
});

const ItemText = ({ children, style }) => (
  <Text style={[styles.itemText, style]}>{children}</Text>
);
ItemText.propTypes = {
  children: PropTypes.string.isRequired,
  style: Text.propTypes.style,
};
ItemText.defaultProps = {
  style: {},
};

class Drawer extends React.Component {
  static propTypes = {
    libraryActions: PropTypes.object.isRequired,
    rootActions: PropTypes.object.isRequired,
  };

  handleSearchPress = () => {
    this.props.navigation.navigate('Search');
    this.props.navigation.closeDrawer();
  }

  handleListPress = () => {
    this.props.libraryActions.navChange('list');
    this.props.navigation.navigate('Home');
    this.props.navigation.closeDrawer();
  }

  handleFavoritesPress = () => {
    this.props.libraryActions.navChange('favorites');
    this.props.navigation.navigate('Home');
    this.props.navigation.closeDrawer();
  }

  handleCreditsPress = () => {
    this.props.navigation.navigate('Credits');
    this.props.navigation.closeDrawer();
  }

  handleWipeAllDataConfirm = () => {
    this.props.navigation.navigate('Home');
    this.props.rootActions.reset();
    this.props.navigation.closeDrawer();
  }

  handleWipeAllDataPress = () => {
    Alert.alert(
      'Wipe all data',
      'This will remove ALL the stored application data including saved movies. It can\'t be undone. Are you sure you want to do this?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: this.handleWipeAllDataConfirm },
      ],
      { cancelable: true },
    );
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <MaterialDrawer>
            <DrawerHeader />
            <MaterialDrawer.Section
              items={[
                {
                  icon: 'md-search',
                  value: <ItemText>Search</ItemText>,
                  onPress: this.handleSearchPress,
                },
              ]}
              divider
            />
            <MaterialDrawer.Section
              title="Browse"
              items={[
                {
                  icon: 'md-list',
                  value: <ItemText>My list</ItemText>,
                  onPress: this.handleListPress,
                },
                {
                  icon: 'md-star',
                  value: <ItemText>Favorites</ItemText>,
                  onPress: this.handleFavoritesPress,
                },
              ]}
              divider
            />
            <MaterialDrawer.Section
              title="More"
              items={[
                {
                  icon: 'md-warning',
                  value: <ItemText style={styles.itemTextDanger}>Wipe all data</ItemText>,
                  onPress: this.handleWipeAllDataPress,
                },
                {
                  icon: 'md-help-circle',
                  value: <ItemText>Credits</ItemText>,
                  onPress: this.handleCreditsPress,
                },
              ]}
            />
          </MaterialDrawer>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const stateToProps = ({}) => ({

});

const dispatchToProps = dispatch => ({
  libraryActions: bindActionCreators(libraryActions, dispatch),
  rootActions: bindActionCreators(rootActions, dispatch),
});

export default connect(stateToProps, dispatchToProps)(Drawer);
