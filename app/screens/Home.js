import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { DevoButton } from '../components/Buttons';
import { ScheduleButton } from '../components/Buttons';
import { LeadersButton } from '../components/Buttons';




class Home extends Component {

  handleSwapCurrency = () => {
    console.log('press swap currency');
  };
  render() {
    return(
      <Container>
        <StatusBar translucent={true} barStyle="light-content" />
        <DevoButton onPress={this.handleSwapCurrency} />
        <ScheduleButton onPress={this.handleSwapCurrency} />
        <LeadersButton onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}




export default Home;
