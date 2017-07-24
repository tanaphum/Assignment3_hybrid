'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  data: {
    textAlign: 'center',
    flexDirection: 'row'
  },
  input: {
   height: 40,
   borderColor: 'gray',
   borderWidth: 1,
   width: 200,
   marginTop : 20,
   marginBottom : 20
  },
 boxButton: {
     marginBottom : 20
 },
    image :{
      width:50, 
      height:50
    },
        button1:{
        width: 100,
        height: 50,
        backgroundColor: '#b1dae5',
        justifyContent: 'center',
        alignItems: 'center'
    },
       button2:{
        width: 100,
        height: 50,
        backgroundColor: '#faebd7',
        justifyContent: 'center',
        alignItems: 'center'
    },

});