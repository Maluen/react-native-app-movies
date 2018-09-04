import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import TabContent from '../../components/TabContent';
import MovieCard from '../../components/MovieCard';
import StartSearchCard from '../../components/StartSearchCard';

function createRows(list, rowLength) {
  if (list.length === 0) return [];
  const rows = [[]];
  for (let i = 0; i < list.length; i++) {
    const row = rows[rows.length - 1];
    if (row.length === rowLength) {
      rows.push([list[i]]);
    } else {
      row.push(list[i]);
    }
  }
  return rows;
}

const styles = StyleSheet.create({
  startSearchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  movieCard: {
    marginBottom: 0,
    marginTop: 0,
  },

  fillView: {
    flex: 1,
  },
});

class LibraryTabContent extends React.Component {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.array).isRequired,
    rowLength: PropTypes.number.isRequired,
  };

  handleMovieCardPress = (movie) => {
    this.props.navigation.navigate('Details', {
      movie,
    });
  }

  handleStartSearchCardPress = () => {
    this.props.navigation.navigate('Search');
  }

  render() {
    const { rows, rowLength } = this.props;
    return (
      <TabContent>
        {rows.length === 0 ?
          <View style={styles.startSearchContainer}>
            <StartSearchCard
              onPress={this.handleStartSearchCardPress}
            />
          </View>
          :
          <ScrollView>
            {rows.map((row, i) => (
              <View
                key={i}
                style={styles.row}
              >
                {row.map(movie => (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onPress={this.handleMovieCardPress}
                    style={{ container: styles.movieCard }}
                  />
                ))}
                {}
                {row.length < rowLength ?
                  // keep grid proportions by filling
                  // the remaining slots with empty views
                  [...Array(rowLength - row.length)].map((v, i) => (
                    <View key={i} style={styles.fillView} />
                  ))
                  :
                  null
                }
              </View>
            ))}
          </ScrollView>
        }
      </TabContent>
    );
  }
}

const stateToProps = ({ library }, ownProps) => {
  const list = library.sections[ownProps.section];
  const rowLength = library.rowLengths[ownProps.section];
  return {
    rows: createRows(list, rowLength),
    rowLength,
  };
};

const dispatchToProps = dispatch => ({
});

export default connect(stateToProps, dispatchToProps)(
  withNavigation(LibraryTabContent)
);
