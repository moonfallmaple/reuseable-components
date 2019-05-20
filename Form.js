import React,{Component} from 'react';
import { StyleSheet, Text,TextInput,Switch, KeyboardAvoidingView,View } from 'react-native';


// onChangeText is basically a simplified version of onChange, so you can easily use it, without the hassle of going through event.target.value to get changed value.
```
<TextInput value={this.state.name} onChangeText={(text) => this.setState({name: text})}>
```
// KeyboardAvoidingView: make sure the view is going to avoid keyboard


export default class App extends Component {

  state={
    input:'hello',
    showInput:false,
  }

  handelToggleSwitch=()=>{
    this.setState((state)=>(
      {showInput:!state.showInput,}
    ))
  }

  handelTextChange = (event)=>{
    const{eventCount, target, text} =event.nativeEvent
    this.setState(()=>(
      {input:text}
    ))
  }



  render() {

    const {input, showInput}=this.state
    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>      
        <Switch 
          value={showInput}
          onValueChange={this.handelToggleSwitch}
        />
      
        { showInput===true && (
          <TextInput
           value={input}
           onChange={this.handelTextChange}
           sytle={styles.input}
           />)
           }

     </KeyboardAvoidingView>
    );
  }
}

const styles= StyleSheet.create({ 
  container:{
      flex:1,
      justifyContent:'center'
    },
  input:{
    width:100,
    height:100,
    borderRadius:50
  }
})
