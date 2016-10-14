import React, { Component } from 'react';
import Button from 'react-native-button';

export default class ExampleComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }
  _handlePress() {
    console.log('Pressed!');
  }
  render() {
    return (
      <Button
        style={{
          fontSize: 20,
          backgroundColor: 'green',
          color: 'white',
          padding: 10,
        }}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        Press Me!
      </Button>
    );
  }
};
