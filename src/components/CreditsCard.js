import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Linking, Image } from 'react-native';
import { Card, Subheader } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },

  headerContainer: {
    alignItems: 'center',
    paddingLeft: 0,
  },

  headerText: {
    fontSize: 20,
    textAlign: 'center',
  },

  image: {
    width: '100%',
    height: 130,
  },
});

class CreditsCard extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    imageSource: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ]).isRequired,
    url: PropTypes.string.isRequired,
    style: PropTypes.shape({
      image: Image.propTypes.style,
    }),
  };

  static defaultProps = {
    style: {},
  };

  handlePress = () => {
    Linking.openURL(this.props.url);
  }

  render() {
    const {
      text, imageSource,
      style: propsStyle,
    } = this.props;
    return (
      <Card
        style={{ container: styles.container }}
        onPress={this.handlePress}
      >
        <Subheader
          style={{
            container: styles.headerContainer,
            text: styles.headerText,
          }}
          text={text}
          inset={false}
          lines={2}
        />
        <Image
          style={[styles.image, propsStyle.image]}
          resizeMode="contain"
          source={imageSource}
        />
      </Card>
    );
  }
}

export default CreditsCard;
