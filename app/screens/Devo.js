import React, { Component } from 'react';
import {  AppRegistry, ScrollView, StatusBar, TextInput, Text } from 'react-native';

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
    <ScrollView style={{flex: 1, padding: 20}}>
      <Text
        style={{fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',}}
      >
          Devotional Questions
      </Text>
      <Text
        style={{fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',}}
      >
        {"\n"}Day 1: Read Psalm 27{"\n"}
      </Text>
      <Text>
      1. What stood out to you about this Psalm?{"\n"}
      2. When was a time that you were afraid?{"\n"}
      3. Why do you think David wrote this Psalm?{"\n"}
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


      <Text
        style={{fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',}}
          >
          {"\n"}Day 2: Read Exodus 1{"\n"}
          </Text>
          <Text>
          1. What stood out to you about this chapter?{"\n"}
          2. What do you think it meant that the midwives feared God?{"\n"}
          3. What did the lack of a fear of God cause Pharaoah to do?{"\n"}
          4. What did the fear of God cause the midwives to do? (Reread verse 17 for clues){"\n"}
      </Text>
      <Text
        style={{fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',}}
          >
          {"\n"}Day 3: Read 1 Peter 5:6-7{"\n"}
      </Text>
      <Text>
          1. What stood out to you about this chapter?{"\n"}
          2. How does fearing God make us humble?{"\n"}
          3. How do you deal with your fears?{"\n"}
          4. The fear of the lord cast out all fear so what should we do with those fears?{"\n"}
      </Text>

    </ScrollView>
    );
  }
}
