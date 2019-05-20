import React,{Component} from 'react';
import {View,Image} from 'react-native';

// get picture from local files
// or from external source

export default class App extends Component {

  render() {
    return (

      <View style={styles.container}>   
        <Image source={require('./pic.png')}/>
        <view style={{margin:'50'}}/>  
        <Image source={{url:'https//....jpg'}}/> 
      </View>
    );
  }
}

