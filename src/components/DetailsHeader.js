import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { withTheme, Icon } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  line: {
    flexDirection: 'row',
  },

  item: {
    flexDirection: 'row',
    marginRight: 15,
  },

  icon: {
    marginRight: 5,
  },

  text: {
    color: 'white',
    fontSize: 16,
  },

  titleText: {
    fontSize: 24,
  },

  year: {
  },

  yearText: {
  },

  duration: {
  },

  durationText: {
  },

  genreText: {
  },
});

class DetailsHeader extends React.Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { result, theme } = this.props;
    const { primaryColor } = theme.palette;
    return (
      <View style={[styles.container, { backgroundColor: primaryColor }]}>
        <View style={[styles.item, styles.title]}>
          <Text style={[styles.text, styles.titleText]}>{result.Title}</Text>
        </View>
        <View style={styles.line}>
          <View style={[styles.item, styles.year]}>
            <Icon
              style={[styles.icon, styles.yearIcon]}
              name="md-calendar"
              color="white"
            />
            <Text style={[styles.text, styles.yearText]}>{result.Year}</Text>
          </View>
          <View style={[styles.item, styles.duration]}>
            <Icon
              style={[styles.icon, styles.durationIcon]}
              name="md-time"
              color="white"
            />
            <Text style={[styles.text, styles.durationText]}>{result.Runtime}</Text>
          </View>
        </View>
        <View style={styles.line}>
          <View style={[styles.item, styles.genre]}>
            <Text style={[styles.text, styles.genreText]}>{result.Genre}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withTheme(DetailsHeader);
