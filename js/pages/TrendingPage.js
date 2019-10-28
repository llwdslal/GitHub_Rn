/*
 * @Descripttion: 
 * @version: 
 * @Author: Rock Lee
 * @Date: 2019-10-23 17:13:20
 * @LastEditors: Rock Lee
 * @LastEditTime: 2019-10-28 16:50:06
 */

import React, { Component } from 'react';
import { View, StyleSheet, Text ,Button} from 'react-native';
import {connect} from 'react-redux';
import actions from '../action';
class TrendingPage extends Component {



  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>

        <Text style={styles.welcome}>TrendingPage</Text>

        <Button title = '改变主题颜色' onPress = {()=> {
          this.props.onThemeChange( {
            tintColor:"red",
            updateTime : new Date().getTime()
          });
        }}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10
  }
}); 

const mapStateToProps = state=>({});
const mapDispatchToProps = dispatch =>({
  onThemeChange:theme => dispatch(actions.onThemeChange(theme))
});

export default connect(mapStateToProps,mapDispatchToProps)(TrendingPage);