import React,{Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createAppContainer ,createDrawerNavigator } from 'react-navigation';
import UdaciStatusBar from './UdaciStatusBar'


// Step1:build components for Route
class HomeScreen extends Component {
  render() {
    const navigation=this.props.navigation
    return (
      <View>
        <Text>Home view</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text>open drawer!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


class Dashboard extends Component{
  render(){
    const navigation=this.props.navigation
    return(
      <View>
        <Text>Dashboard view</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text>open drawer!</Text>
        </TouchableOpacity>
      </View>
    ) 
  }
}
 

// Step2: Create Drawer Navigator component
const Drawer = createAppContainer(createDrawerNavigator ({
  HomeScreen:{
    screen:HomeScreen,
  },
  Dashboard:{
    screen:Dashboard,
  }}
  )
)


// Step3: Add component to App
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <UdaciStatusBar backgroundColor={'purple'} barStyle="light-content" />
        <Drawer />
      </View>
    );
  }
}
