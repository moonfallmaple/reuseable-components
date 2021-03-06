import React,{Component} from 'react';
import { Text,View , Platform, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator,createStackNavigator } from 'react-navigation';
import {FontAwesome,Ionicons} from '@expo/vector-icons'
import UdaciStatusBar from './UdaciStatusBar'



export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <UdaciStatusBar backgroundColor={'purple'} barStyle="light-content" />
        <MainNavigator />
      </View>
    );
  }
}
class HomeScreen extends Component {
  render() {
    const navigation=this.props.navigation
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text>To Dashboard</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class Dashboard extends Component{
  render(){
    return(
      <View>
        <Text>This is the Dashboard</Text>
      </View>
    ) 
  }
}
 

const Tabs ={
  HomeScreen:{
    screen:HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) =>
        Platform.OS === 'ios' && <Ionicons name="md-home" size={30} color={tintColor} />,
    },
  },
  SettingsScreen:{
    screen:SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) =>
        Platform.OS === 'ios' && <Ionicons name="md-settings" size={30} color={tintColor} />,
    },
  }
}
const navigationOptions = {
  tabBarOptions: {
    showIcon: true,
    activeTintColor: Platform.OS === 'ios' ? "purple" : "white",
    style: {
      padding: 10,
      height: Platform.OS === 'ios' ? 60 : 'auto',
      fontSize: 18,
      backgroundColor: Platform.OS === 'ios' ? "white" : "purple",
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};

const TabNav=createBottomTabNavigator(Tabs,navigationOptions)



const MainNavigator = createAppContainer(createStackNavigator ({
  Home:{
      screen:TabNav,
      navigationOptions: {
        header: null
      } 
  },
  Dashboard:{
      screen:Dashboard,
  }
})
)
