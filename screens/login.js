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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const Login = ({navigation}) => {
    const [check, setCheck] = useState(0);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const submitLogin = () => {

        auth().signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                // alert('yes')
                // Signed in
                // var user = userCredential.user;
                if(check==0){
                    // alert('yes')
                    firestore().collection('company').onSnapshot((res) => {
                        res.docs.map((val) => {
                            if(val.data().email == email){
                                navigation.navigate('Company');
                            }
                        })
                    })
            }else if(check==1){
                    firestore().collection('student').onSnapshot((res) => {
                        res.docs.map((val) => {
                            if(val.data().email == email){
                                navigation.navigate('Student');
                            }
                        })
                })
                alert('Please fill the fields correctly!');
                // ...
            }else{
                // alert('Please fill the fields correctly!');
            }
        }).catch(() => {
            if(check==2 && (email=='admin' && pass=='admin')){
                navigation.navigate('Admin');
            }else{
                alert('Seedhe ho jao! hoshyari na maro!');
            }
        })
            // setTimeout(() => {
                
            // })


        
    }
  
    return (
      <>
      {/* <View style={{width: '100%', backgroundColor: 'lightgrey', paddingTop: 8, paddingBottom: 8, alignItems: 'center'}}><Text style={{fontSize: 20}}>Campus Recruitment System</Text></View> */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{fontSize: 20, fontWeight: 50, display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text style={{marginBottom: 30, fontSize: 24, textAlign: 'left'}}>Campus Recruitment System</Text>
              <View style={{width: '90%', marginBottom: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <Text onPress={() => setCheck(0)} style={check==0?{fontSize: 15, fontWeight: 'bold'}:{fontSize: 14,}}>Company</Text>
                <Text onPress={() => setCheck(2)} style={check==2?{fontSize: 15, fontWeight: 'bold'}:{fontSize: 14}}>Admin</Text>
                <Text onPress={() => setCheck(1)} style={check==1?{fontSize: 15, fontWeight: 'bold'}:{fontSize: 14}}>Student</Text>
              </View>
              <View style={{width: '90%', backgroundColor: 'lightgrey', padding: 10}}>
                <Text style={{fontSize: 15}}>Enter Email</Text>
                <TextInput onChangeText={(e) => setEmail(e)}  style={{width: '100%'}} placeholder='Enter Email' textContentType='emailAddress' />
                <Text style={{fontSize: 15}}>Enter Password</Text>
                <TextInput onChangeText={(e) => setPass(e)} style={{width: '100%'}} placeholder='Enter password' textContentType='password' />
                <TouchableOpacity onPress={() => submitLogin()} style={{display: 'flex'}}><Text style={{textAlign: 'center', fontSize: 18,backgroundColor: 'darkgrey', paddingTop: 4, paddingBottom: 4}}>Login</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  };

  export default Login;