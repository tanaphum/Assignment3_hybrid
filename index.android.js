/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Alert,
  TouchableHighlight,
  Image,
  ActivityIndicator,
  ListView
} from 'react-native';

export default class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      name : "name",
      background : '#faebd7',
      weather : [
      {
      name : "",
      date :"",
      temp :'',
      icon :""
      },
          {
      name : "",
      date :"",
      temp :'',
      icon :""
      },
          {
      name : "",
      date :"",
      temp :'',
      icon :""
      },
          {
      name : "",
      date :"",
      temp :'',
      icon :""
      },
          {
      name : "",
      date :"",
      temp :'',
      icon :""
      },
      ],
    }
  }
  
  componentDidMount() {

    return fetch('http://samples.openweathermap.org/data/2.5/forecast?q=London&appid=b1b15e88fa797225412429c1c50c122a1')
       .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          
              weather : [
              {name : responseJson.list[0].weather[0].main,
              date : responseJson.list[0].dt_txt,
              temp : responseJson.list[0].main.temp,
              icon : 'openweathermap.org/img/w/' + responseJson.list[0].weather[0].icon +'.png'
                },
              {name : responseJson.list[8].weather[0].main,
              date : responseJson.list[8].dt_txt,
              temp : responseJson.list[8].main.temp,
              icon : 'openweathermap.org/img/w/' + responseJson.list[8].weather[0].icon +'.png'
                },
              {name : responseJson.list[16].weather[0].main,
              date : responseJson.list[16].dt_txt,
              temp : responseJson.list[16].main.temp,
              icon : 'openweathermap.org/img/w/' + responseJson.list[16].weather[0].icon +'.png'
                },
              {name : responseJson.list[24].weather[0].main,
              date : responseJson.list[24].dt_txt,
              temp : responseJson.list[24].main.temp,
              icon : 'openweathermap.org/img/w/' + responseJson.list[24].weather[0].icon +'.png'
                },
              {name : responseJson.list[32].weather[0].main,
              date : responseJson.list[32].dt_txt,
              temp : responseJson.list[32].main.temp,
              icon : 'openweathermap.org/img/w/' + responseJson.list[32].weather[0].icon +'.png'
                }            
              ]
          
         
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
        _onPressIn(event){
        this.setState({
             background : '#b1dae5'
        })
    }
    _onPressOut(event){
        this.setState({
            background : '#b1dae5'
        })
    }
              _onPressIn2(event){
        this.setState({
             background : '#faebd7'
        })
    }
    _onPressOut2(event){
        this.setState({
            background : '#faebd7'
        })
    }

        _handleName(event) {
        var name= event.nativeEvent.text;
        var appid='b1b15e88fa797225412429c1c50c122a1';
        

        fetch('http://samples.openweathermap.org/data/2.5/forecast?q='+ name + '&appid=b1b15e88fa797225412429c1c50c122a1')
        .then((response) => response.json())
        .then((responseJSON)=>{
            console.log(response.json);
            this.setState({
              weather : [
              {name : responseJson.list[0].weather[0].main,
              date : responseJson.list[0].dt_txt,
              temp : responseJson.list[0].main.temp,
              icon : 'openweathermap.org/img/w/' + responseJson.list[0].weather[0].icon +'.png'
                },
              {name : responseJson.list[8].weather[0].main,
              date : responseJson.list[8].dt_txt,
              temp : responseJson.list[8].main.temp,
              icon : 'openweathermap.org/img/w/' + responseJson.list[8].weather[0].icon +'.png'
                },
              {name : responseJson.list[16].weather[0].main,
              date : responseJson.list[16].dt_txt,
              temp : responseJson.list[16].main.temp,
              icon : 'openweathermap.org/img/w/' + responseJson.list[16].weather[0].icon +'.png'
                },
              {name : responseJson.list[24].weather[0].main,
              date : responseJson.list[24].dt_txt,
              temp : responseJson.list[24].main.temp,
              icon : 'openweathermap.org/img/w/' + responseJson.list[24].weather[0].icon +'.png'
                },
              {name : responseJson.list[32].weather[0].main,
              date : responseJson.list[32].dt_txt,
              temp : responseJson.list[32].main.temp,
              icon : 'openweathermap.org/img/w/' + responseJson.list[32].weather[0].icon +'.png'
                }            
              ]
                
            });
            console.log(this.state.weather);
        })
        .catch((error)=>{
            console.warn(error);
        });

        this.setState({
            name:name,
        },);

    }

  render() {
    return (
      <View style={{backgroundColor : this.state.background}}>
       
          <TouchableHighlight onPressIn={(event)=>this._onPressIn(event)} onPressOut={(event)=>this._onPressOut(event)}>
            <View style={styles.button1}>
                <Text style={styles.button1}>
                    theme1
                </Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight onPressIn={(event)=>this._onPressIn2(event)} onPressOut={(event)=>this._onPressOut2(event)}>
            <View style={styles.button2}>
                <Text style={styles.button2}>
                    theme2
                </Text>
            </View>
        </TouchableHighlight>
      
      <TextInput style={{width: 100 }} onSubmitEditing = {(event) => this._handleName(event)}/>
                <Text>
                    Hello {this.state.name}
                </Text>
        <View >
          <Text>
                {this.state.weather[0].date}
          </Text>
          <Text>
                {this.state.weather[0].name}
         </Text>
         <Text>
                {this.state.weather[0].temp}
        </Text>
        <Image source = {{uri: 'http://'+this.state.weather[0].icon}}
                style={styles.image} resizeMode='cover'>
        </Image>
          <Text>
                {this.state.weather[1].date}
          </Text>
          <Text>
                {this.state.weather[1].name}
         </Text>
         <Text>
                {this.state.weather[1].temp}
        </Text>
        <Image source = {{uri: 'http://'+this.state.weather[1].icon}}
                style={styles.image} resizeMode='cover'>
        </Image>
          <Text>
                {this.state.weather[2].date}
          </Text>
          <Text>
                {this.state.weather[2].name}
         </Text>
         <Text>
                {this.state.weather[2].temp}
        </Text>
        <Image source = {{uri: 'http://'+this.state.weather[2].icon}}
                style={styles.image} resizeMode='cover'>
        </Image>
          <Text>
                {this.state.weather[3].date}
          </Text>
          <Text>
                {this.state.weather[3].name}
         </Text>
         <Text>
                {this.state.weather[3].temp}
        </Text>
        <Image source = {{uri: 'http://'+this.state.weather[3].icon}}
                style={styles.image} resizeMode='cover'>
        </Image>
          <Text>
                {this.state.weather[4].date}
          </Text>
          <Text>
                {this.state.weather[4].name}
         </Text>
         <Text>
                {this.state.weather[4].temp}
        </Text>
        <Image source = {{uri: 'http://'+this.state.weather[4].icon}}
                style={styles.image} resizeMode='cover'>
        </Image>
        </View>
      </View>
    );
  }

  
}

var styles = require('./style');

AppRegistry.registerComponent('App', () => App);
