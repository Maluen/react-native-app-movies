import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, TextInput } from 'react-native';
import { Toolbar, withTheme } from 'react-native-material-ui';

import * as searchActions from '../actions/search';
import MainView from '../components/MainView';
import { normalizeSearchTerm } from '../utils/search';
import SearchResults from '../components/SearchResults';

const styles = StyleSheet.create({
  titleText: {
    marginLeft: 0,
    color: 'white',
  },
});

class SearchScreen extends React.Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    results: PropTypes.array.isRequired,

    searchActions: PropTypes.objectOf(PropTypes.func).isRequired,
  };

  handleSearchTermChange = (searchTerm) => {
    this.props.searchActions.searchTermChange(searchTerm);
  }

  handleSearchSubmit = () => {
    const searchTerm = normalizeSearchTerm(this.props.searchTerm);
    this.props.searchActions.search(searchTerm);
  }

  handleBackIconPress = () => {
    this.props.navigation.goBack();
  }

  handleClearIconPress = () => {
    this.handleSearchTermChange('');
  }

  handleDetailRequest = (movie) => {
    this.props.navigation.navigate('Details', {
      movie,
    });
  }

  render() {
    const {
      searchTerm, loading, results,
      theme,
    } = this.props;

    return (
      <MainView>
        <Toolbar
          leftElement="md-arrow-back"
          onLeftElementPress={this.handleBackIconPress}
          centerElement={(
            <TextInput
              autoFocus
              value={searchTerm}
              onChangeText={this.handleSearchTermChange}
              onSubmitEditing={this.handleSearchSubmit}
              placeholder="Search movies..."
              style={[
                theme.toolbar.titleText,
                theme.toolbarSearchActive.titleText,
                styles.titleText,
              ]}
              underlineColorAndroid="transparent"
            />
          )}
          rightElement={searchTerm.length > 0 ? 'md-close' : undefined}
          onRightElementPress={this.handleClearIconPress}
        />
        <SearchResults
          loading={loading}
          results={results}
          onDetailRequest={this.handleDetailRequest}
        />
      </MainView>
    );
  }
}

const stateToProps = ({ search }) => ({
  searchTerm: search.term,
  loading: search.loading,
  results: search.results,
});

const dispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(stateToProps, dispatchToProps)(
  withTheme(SearchScreen)
);
