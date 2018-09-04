import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Toolbar } from 'react-native-material-ui';
import { Constants } from 'expo';

import MainView from '../../components/MainView';
import Tabs from '../../components/Tabs';
import ListTabContent from './ListTabContent';
import FavoritesTabContent from './FavoritesTabContent';
import * as libraryActions from '../../actions/library';

const routes = [
  { key: 'list', title: 'My List', component: ListTabContent },
  { key: 'favorites', title: 'Favorites', component: FavoritesTabContent },
];

class HomeScreen extends React.Component {
  static propTypes = {
    tabIndex: PropTypes.number.isRequired,

    libraryActions: PropTypes.object.isRequired,
  };

  handleMenuIconPress = () => {
    this.props.navigation.toggleDrawer();
  }

  handleSearchIconPress = () => {
    this.props.navigation.navigate('Search');
  }

  handleGridIconPress = () => {
    this.props.libraryActions.rowLengthsChange();
  }

  handleRightIconPress = (info) => {
    if (info.index === 0) {
      this.handleGridIconPress();
    } else {
      this.handleSearchIconPress();
    }
  }

  handleTabIndexChange = (index) => {
    const route = routes[index];
    this.props.libraryActions.navChange(route.key);
  }

  render() {
    const { tabIndex } = this.props;
    return (
      <MainView>
        <Toolbar
          leftElement="md-menu"
          onLeftElementPress={this.handleMenuIconPress}
          centerElement={Constants.manifest.name}
          rightElement={['md-grid', 'md-search']}
          onRightElementPress={this.handleRightIconPress}
        />
        <Tabs
          routes={routes}
          index={tabIndex}
          onIndexChange={this.handleTabIndexChange}
        />
      </MainView>
    );
  }
}

const stateToProps = ({ library }) => ({
  tabIndex: routes.findIndex(r => r.key === library.nav),
});

const dispatchToProps = dispatch => ({
  libraryActions: bindActionCreators(libraryActions, dispatch),
});

export default connect(stateToProps, dispatchToProps)(HomeScreen);
