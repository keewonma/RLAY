import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { DevoButton } from '../components/Buttons';


handleSwapCurrency = () => {
  console.log('press swap currency');
};

class Home extends Component {

  render() {
    return(
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <DevoButton onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}




export default Home;
