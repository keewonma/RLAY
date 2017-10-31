import React, { Component } from 'react';
import { View, StatusBar, AppRegistry, TextInput, Text } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
    <View style={{flex: 1, padding: 20}}>
      <Text
      style={{fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',}}
      >
          Devotional Questions
      </Text>
      <TextInput
        style={{
          height: 100,
          borderColor: 'gray',
          borderWidth: 1,
          textAlign: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexWrap: 'wrap',
        }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    </View>
    );
  }
}
