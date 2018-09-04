import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { withTheme, Icon } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 0,
  },

  iconContainer: {
    width: 40,
  },

  textContainer: {
    flex: 1,
  },

  text: {
    fontSize: 18,
  },
});

class DetailsPlot extends React.Component {
  static propTypes = {
    result: PropTypes.object.isRequired,
  };

  render() {
    const { result, theme } = this.props;
    const { primaryColor } = theme.palette;
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon
            name="md-information-circle"
            color={primaryColor}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{result.Plot}</Text>
        </View>
      </View>
    );
  }
}

export default withTheme(DetailsPlot);
