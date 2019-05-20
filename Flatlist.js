import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';






function Decks({...item}){
  return(
    <View style={styles.box}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.questions.length}</Text>    
    </View>
  )
}


export default class App extends React.Component {

  state = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'Is React a Javascript UI library?',
          answer: 'Correct'
        },
        {
          question: 'Correct place to make Ajax requests is in a render method?',
          answer: 'Incorrect'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
          answer: 'Yes'
        }, 
        { 
          question: 'JavaScript is considered a weakly typed (or untyped) language?',
          answer: 'Correct'
        }
      ]
    }
  }


  render() {

    return (
      <View style={styles.container}>
        <FlatList
            data={Object.values(this.state)}
            renderItem={({item}) => 
              <Decks {...item} 
              /> }
            keyExtractor={(item, index) => item.title}
          />
      </View>
      
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
   
  },
  box: {
    height: 50,
    width: 200,
    backgroundColor: '#e76e63',
    margin: 10,
  },
  text:{
    textAlign:"center",
  }
});
