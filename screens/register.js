import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import { Value } from 'react-native-reanimated';

const Register = ({navigation}) => {
    const [check, setCheck] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submitRegister = () => {
      console.log('hello register!');
      auth()
        .createUserWithEmailAndPassword(email, pass)
        .then(() => {
          // console.log('User account created & signed in!');
          check==0?firestore().collection('company').add({
            name: name,
            email: email
          }):firestore().collection('student').add({
            name: name,
            email: email
          });
            navigation.navigate('Login');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            // console.log('That email address is already in use!');
            alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            // console.log('That email address is invalid!');
            alert('That email address is invalid!');
          }

          console.error(error);
      });
    }
  
    return (
      <>
      {/* <View style={{width: '100%', backgroundColor: 'lightgrey', paddingTop: 8, paddingBottom: 8, alignItems: 'center'}}><Text style={{fontSize: 20}}>Campus Recruitment {name}</Text></View> */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{fontSize: 20, fontWeight: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={{marginBottom: 30, fontSize: 24, textAlign: 'left'}}>Campus Recruitment System</Text>
              <View style={{width: '90%', marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <Text onPress={() => setCheck(0)} style={check==0?{fontSize: 15, fontWeight: 'bold'}:{fontSize: 14,}}>Company</Text>
                {/* <Text onPress={() => setCheck(2)} style={check==2?{fontSize: 15, fontWeight: 'bold'}:{fontSize: 14}}>Admin</Text> */}
                <Text onPress={() => setCheck(1)} style={check==1?{fontSize: 15, fontWeight: 'bold'}:{fontSize: 14}}>Student</Text>
              </View>
              <View style={{width: '90%', backgroundColor: 'lightgrey', padding: 10}}>
                <Text style={{fontSize: 15}}>Enter Name</Text>
                <TextInput onChangeText={(e) => setName(e)} style={{ width: '100%'}} placeholder='Enter name' />
                <Text style={{fontSize: 15}}>Enter Email</Text>
                <TextInput onChangeText={(e) => setEmail(e)}  style={{width: '100%'}} placeholder='Enter Email' textContentType='emailAddress' />
                <Text style={{fontSize: 15}}>Enter Password</Text>
                <TextInput onChangeText={(e) => setPass(e)} style={{width: '100%'}} placeholder='Enter password' textContentType='password' />
                <TouchableOpacity style={{display: 'flex'}} onPress={() => submitRegister()}><Text style={{textAlign: 'center', fontSize: 18,backgroundColor: 'darkgrey', paddingTop: 4, paddingBottom: 4}}>Register</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{display: 'flex'}}><Text style={{textAlign: 'center', paddingTop: 4, paddingBottom: 4, color: 'blue'}}>Already has an account</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  };

  export default Register;