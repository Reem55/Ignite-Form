import React, { Component } from 'react'

import { Images } from '../Themes'
import ContactForm from '../Containers/ContactForm'
import { Icon, Input, Button } from 'react-native-elements'
import { Text,view, Image, Alert, Platform, Input, FlatList } from 'react-native'



export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { request: {
        first_name:'',
        last_name:'',
        email:'',
        subject:'',
        description:'',}
    };
  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Input
          placeholder='First Name....'
          leftIcon={{ name: 'person'}}
          inputStyle={inputs.constraints}
          onChange={(event) => { this.handleInput('first_name', event.nativeEvent.text)}}
        />
        <Input
          placeholder='Last Name....'
          leftIcon={{ name: 'person'}}
          inputStyle={inputs.constraints}
          onChange={(event) => { this.handleInput('last_name', event.nativeEvent.text)}}

        />
        <Input
          placeholder='Email....'
          leftIcon={{ name: 'email'}}
          inputStyle={inputs.constraints}
          onChange={(event) => { this.handleInput('email', event.nativeEvent.text)}}

        />
        <Input
          placeholder='Subject....'
          leftIcon={{ name: 'chat'}}
          inputStyle={inputs.constraints}
          onChange={(event) => { this.handleInput('subject', event.nativeEvent.text)}}

        />
        <Input
          placeholder='Description....'
          leftIcon={{ name: 'create'}}
          inputStyle={inputs.constraints}
          onChange={(event) => { this.handleInput('description', event.nativeEvent.text)}}

        />



        <Button
          title='Done'
          leftIcon={{ name: 'check'}}
          buttonStyle={{
            width: 200,
            height:30,
            backgroundColor:'#C71585',
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 25
          }}
          onPress={() => {
          this.props.onFetchForm('asc');
          }
          }}
        />
        <FlatList

          data={this.props.Contact}
          keyExtractor={(item) => item.name}
          renderItem={({item, index}) => <Text>
            `${item.FirstName}, ${item.LastName}, ${item.Email}, ${item.Subject}, ${item.description}`
          </Text>
          }
        />
      </View>
    );
  }
}
const inputs = StyleSheet.create({
  constraints: {
    paddingTop:5,
    //    paddingBottom:5,
    marginTop: 10,
    marginBottom: 10
  }
});

