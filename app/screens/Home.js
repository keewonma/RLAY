import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { DevoButton} from '../components/Buttons';
// import { DevoButton2} from '../components/Buttons';
// import { DevoButton3} from '../components/Buttons';




class Home extends Component {

  handleSwapCurrency = () => {
    console.log('press swap currency');
  };
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
