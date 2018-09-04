import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ViewPropTypes } from 'react-native';
import FitImage from 'react-native-fit-image';
import { Card, Subheader } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 15,
    marginBottom: 15,
  },

  moviePoster: {
    margin: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

class MovieCard extends React.Component {
  static propTypes = {
    movie: PropTypes.object.isRequired,
    style: PropTypes.shape({
      container: ViewPropTypes.style,
    }),

    onPress: PropTypes.func,
  };

  static defaultProps = {
    style: {},

    onPress: () => {},
  };

  handlePress = () => {
    this.props.onPress(this.props.movie);
  }

  render() {
    const {
      movie,
      style: propsStyle = {},
      ...rest
    } = this.props;
    return (
      <Card
        {...rest}
        style={{ container: [styles.container, propsStyle.container] }}
        onPress={this.handlePress}
      >
        <Subheader
          lines={2}
          text={`${movie.Title} (${movie.Year})`}
          style={{
            text: styles.movieTitle,
          }}
        />
        <FitImage
          style={styles.moviePoster}
          source={{ uri: movie.Poster }}
        />
      </Card>
    );
  }
}

export default MovieCard;
