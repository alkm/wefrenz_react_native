import React, { Component } from 'react';
import { View, Text, Button, TextInput, StatusBar, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from "axios";
import { styles } from '../../styles/CommonStyles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Utils } from '../../utils/Utils.js';



export class Login extends Component {
	constructor(props) {
    	super(props);
    	this.state = { email: '', password: '', error: null };
  	}
  	render() {
    	return (
      	<View style={styles.container}>
      		<StatusBar backgroundColor='#2b90d9' barStyle='light-content'></StatusBar>
	        <Text style={styles.txt}>Please Login</Text>
	        <TextInput style={styles.input} onChangeText={(email) => this.setState({email})} placeholder="Email" autoCapitalize="none" autoCorrect={false} keyboardType="email-address"></TextInput>
        	<TextInput style={styles.input} onChangeText={(password) => this.setState({password})} placeholder="Password" autoCapitalize="none" autoCorrect={false} secureTextEntry={true}></TextInput>
        	<Button style={{color: '#ff0000', backgroundColor:'#ff0000'}} onPress={() => this.props.navigation.navigate('Home')} title="Home"></Button>
        	<View style={styles.btnGrp}>
	        		<TouchableOpacity style={styles.button} onPress={this.onSignUp.bind(this)}>
	        			<View style={styles.btnGrp}>
	        				<FontAwesomeIcon icon={ faSignInAlt } style={[styles.rotateLeft, styles.whiteFonts]}/>
				          	<Text style={[styles.btnTxt, styles.rtSpc, styles.ltSpc]}>Sign Up</Text>
			          	</View>
			        </TouchableOpacity>
	        	<TouchableOpacity style={styles.button} onPress={this.onSignIn.bind(this)}>
	        		<View style={styles.btnGrp}>
		            	<Text style={[styles.btnTxt, styles.rtSpc]}>Sign In</Text>
		          		<FontAwesomeIcon icon={ faSignInAlt } style={{color: '#fff'}}/>
		          	</View>
		        </TouchableOpacity>
	        </View>
	        <Text style={styles.error}>{this.state.error}</Text>
      	</View>
    )
  }

  isValid() {
    const { email, password } = this.state;
    let valid = false;
    if (email.length > 0) {
	    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(reg.test(email) === false)
		{
			this.setState({ error: 'Invalid Email' });
			return false;
		}else{
			valid = true;
		}
	}else{
		if (email.length === 0) {
	    	this.setState({ error: 'You must enter an email address' });
	    	return false;
	    } 
	}

	if(password.length > 0){
		valid = true;
	}else{
		this.setState({ error: 'You must enter a password' });
		return false;
	}

	return valid;
  }

  onSignIn() {
    const { email, password } = this.state;

    if (this.isValid()) {
    	this.setState({ error: '' });
    	let url = Utils.EndPoint()+'signin';
    	let data = {};
    	data.email = this.state.email;
    	data.password = this.state.password;
    	data = JSON.stringify(data);
    	axios.post(url, {headers: {"Access-Control-Allow-Origin": "*"}}, {data:data}).then((res)=>{
		//on success
			Alert.alert('success');

		}).catch((error)=>{

		//on error
			Alert.alert('error');
		});

    }
  }

  onSignUp() {
    const { email, password } = this.state;

    if (this.isValid()) {

    }
  }

};

export default Login;