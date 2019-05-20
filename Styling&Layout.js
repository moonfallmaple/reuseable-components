import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'



// flexDirection:表示子元素是纵向堆叠还是横向延伸的。默认flexDirection：column(Web: default flexDirection：row)
// flexDirection:column
// 当子元素从上至下排列时，纵轴为M轴，横轴为C轴
// flexDirection：row
// 当子元素从左至右排列时，纵轴为C轴，横轴为M轴

// justifyContent：子元素如何沿着M轴排列
// flex-start
// center
// flex-end
// space-around
// space-between

// align-items：子元素如何沿着C轴排列
// flex-start
// center
// flex-end
// stretch



class FlexboxExamples extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default FlexboxExamples;