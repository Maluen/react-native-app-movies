import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Linking, Image } from 'react-native';
import { Toolbar, Card, Subheader, Divider } from 'react-native-material-ui';

import MainView from '../components/MainView';
import CreditsCard from '../components/CreditsCard';
import authorImg from '../assets/author.png';
import omdbapiImg from '../assets/omdbapi.png';

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
});

class CreditsScreen extends React.Component {
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
          centerElement="Credits"
        />
        <ScrollView style={styles.scrollView}>
          <CreditsCard
            text="Created by Manuel Dell'Elce"
            imageSource={authorImg}
            url="https://manueldellelce.com"
          />
          <Divider
            style={{
              container: {
                margin: 10,
              },
            }}
          />
          <CreditsCard
            text="Movie data provided by OMDb"
            imageSource={omdbapiImg}
            url="https://omdbapi.com"
            style={{ image: { height: 70 } }}
          />
        </ScrollView>
      </MainView>
    );
  }
}

const stateToProps = ({  }) => ({

});

const dispatchToProps = dispatch => ({

});

export default connect(stateToProps, dispatchToProps)(CreditsScreen);
