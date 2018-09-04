import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Toolbar, Divider, withTheme, Icon } from 'react-native-material-ui';
import FitImage from 'react-native-fit-image';

import * as detailsActions from '../actions/details';
import * as libraryActions from '../actions/library';
import MainView from '../components/MainView';
import DetailsHeader from '../components/DetailsHeader';
import DetailsPlot from '../components/DetailsPlot';

const styles = StyleSheet.create({
  moviePoster: {

  },

  result: {
  },
});

class DetailsScreen extends React.Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    result: PropTypes.object,
    libraryListAdded: PropTypes.bool.isRequired,
    libraryFavoritesAdded: PropTypes.bool.isRequired,

    detailsActions: PropTypes.object.isRequired,
    libraryActions: PropTypes.object.isRequired,
  };

  static defaultProps = {
    loading: true,
    result: null,
  };

  componentWillMount() {
    if (!this.props.result) {
      const movieId = this.props.movie.imdbID;
      this.props.detailsActions.fetchDetails(movieId);
    }
  }

  handleLeftIconPress = () => {
    this.props.navigation.goBack();
  }

  handleListIconPress = () => {
    if (this.props.libraryListAdded) {
      this.props.libraryActions.listRemove(this.props.movie);
    } else {
      this.props.libraryActions.listAdd(this.props.movie);
    }
  }

  handleFavoriteIconPress = () => {
    if (this.props.libraryFavoritesAdded) {
      this.props.libraryActions.favoritesRemove(this.props.movie);
    } else {
      this.props.libraryActions.favoritesAdd(this.props.movie);
    }
  }

  handleRightElementPress = (info) => {
    if (info.index === 0) {
      this.handleListIconPress();
    } else {
      this.handleFavoriteIconPress();
    }
  }

  render() {
    const {
      movie, loading, result, theme,
      libraryListAdded, libraryFavoritesAdded
    } = this.props;
    return (
      <MainView>
        <Toolbar
          leftElement="md-arrow-back"
          onLeftElementPress={this.handleLeftIconPress}
          centerElement="Movie Details"
          rightElement={[
            libraryListAdded ? 'md-checkmark-circle' : 'md-add',
            libraryFavoritesAdded ? 'md-heart' : 'md-heart-outline',
          ]}
          onRightElementPress={this.handleRightElementPress}
        />
        <ScrollView>
          <FitImage
            style={styles.moviePoster}
            source={{ uri: movie.Poster }}
          />
          {loading ?
            <View>
              <Text>Loading</Text>
            </View>
            :
            <View style={styles.result}>
              <DetailsHeader result={result} />
              <DetailsPlot result={result} />
            </View>
          }
        </ScrollView>
      </MainView>
    );
  }
}

const stateToProps = ({ details, library }, ownProps) => {
  const movie = ownProps.navigation.getParam('movie');
  const movieId = movie.imdbID;
  const movieDetails = details.resultsById[movieId] || {};

  return {
    movie,
    loading: movieDetails.loading,
    result: movieDetails.result,
    libraryListAdded: !!library.sections.list.find(m => m.imdbID === movieId),
    libraryFavoritesAdded: !!library.sections.favorites.find(m => m.imdbID === movieId),
  };
};

const dispatchToProps = dispatch => ({
  detailsActions: bindActionCreators(detailsActions, dispatch),
  libraryActions: bindActionCreators(libraryActions, dispatch),
});

export default connect(stateToProps, dispatchToProps)(
  withTheme(DetailsScreen)
);
